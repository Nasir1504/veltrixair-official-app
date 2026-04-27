import { useLayoutEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ServiceCard from "./ServiceCard";

gsap.registerPlugin(ScrollTrigger);

const StackOfCards = ({
  SolutionWeProvide,
}) => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const activeIndexRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const { heading, subHeading, subService } = SolutionWeProvide;

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const cards = cardsRef.current;

      let scrollControll = 1000;

      if (subService.length > 20) {
        scrollControll = 1500;
      } else if (subService.length > 10) {
        scrollControll = 1200;
      }


      // Initial state
      cards.forEach((card, i) => {
        if (!card) return;
        if (i === 0) {
          gsap.set(card, { y: "0%", zIndex: 1 });
        } else {
          gsap.set(card, { y: "100%", zIndex: i + 1 });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${subService.length * scrollControll}`, // Increased for more control
          scrub: 0.6, // Slightly reduced lag for better end-of-scroll behavior
          pin: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const index = Math.min(
              Math.floor(self.progress * subService.length),
              subService.length - 1
            );
            if (index !== activeIndexRef.current) {
              activeIndexRef.current = index;
              setActiveIndex(index);
            }
          }
        },
      });

      cards.forEach((card, i) => {
        if (i === 0 || !card) return;

        // Current card comes up
        tl.to(card, {
          y: "0%",
          duration: 1,
          ease: "none", // Linear movement for consistent speed
        });

        // Previous card effect
        if (cards[i - 1]) {
          tl.to(
            cards[i - 1],
            {
              y: "-60px",
              scale: 0.85,
              filter: "blur(2px)",
              opacity: 0.7,
              duration: 1,
              ease: "none", // Linear movement for consistent speed
            },
            "<"
          );
        }
      });

      // Add a buffer at the end so the last card stays centered for a bit before unpinning
      tl.to({}, { duration: 1 });

    }, containerRef);

    return () => ctx.revert();
  }, [subService.length]);

  return (
    <div ref={containerRef} className="relative w-full">
      <div className="absolute z-1 w-full h-[46%] max-xs:h-[32%] flex flex-col justify-center items-center">
        <h2 className="text-text1 font-[poppins] font-semibold max-xs:leading-[4rem]
                       max-xxs:text-[1.4rem] max-xs:text-[1.8rem] max-xs:font-medium text-[1.8rem] md:text-[1.7rem] mdlg:text-[2rem] lg:text-[2.4rem] xl:text-[2.8rem]">
          {heading}
        </h2>
        <p className="text-text1 max-xs:w-[75%] w-[42%] text-center font-[Roboto_Mono] text-text12 font-semibold
                      text-[0.7rem] md:text-[0.7rem] mdlg:text-[0.85rem] lg:text-[1.2rem] max-xxs:text-[0.68rem] max-xs:text-[0.9rem]">
          {subHeading}
        </p>
      </div>
      <div className="h-screen w-full overflow-hidden flex items-center justify-center">
        <div className="relative w-full h-full">
          {subService.map((item, i) => {
            // Only render full content for cards near the active index
            const isNear = Math.abs(activeIndex - i) <= 1;
            
            return (
              <div
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
                className="absolute max-xxs:mt-[23%] max-xs:mt-[17%] mt-[6%] mdlg:mt-[6%] lg:mt-[8%] xl:mt-[7%] top-0 left-0 w-full h-full flex items-center justify-center will-change-transform"
                style={{ zIndex: subService.length - i }}
              >
                <ServiceCard 
                  item={item} 
                  i={i} 
                  isNear={isNear} 
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StackOfCards;
