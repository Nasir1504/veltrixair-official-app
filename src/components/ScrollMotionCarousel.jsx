import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SmoothScrollProvider from "./SmoothScrollProvider";

const ScrollMotionCarousel = () => {
    const sectionRef = useRef(null);
    const stripRef = useRef(null);


    // CHANGE THIS VALUE TO CONTROL CARD SIZE
    const CARD_WIDTH = 300; // in vw

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const section = sectionRef.current;
            const strip = stripRef.current;

            const getScrollAmount = () => strip.scrollWidth - window.innerWidth;

            gsap.to(strip, {
                x: () => -getScrollAmount(),
                ease: "none",
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => `+=${getScrollAmount()}`,
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                    invalidateOnRefresh: true,
                },
            });
            // refresh on resize
            const handleResize = () => ScrollTrigger.refresh();
            window.addEventListener("resize", handleResize);
        }, sectionRef);


        return () => ctx.revert();
    }, []);





    const images = Array.from({ length: 8 }, (_, i) =>
        `https://picsum.photos/600?random=${i + 1}`
    );

    return (
        <SmoothScrollProvider>
            <div
                ref={sectionRef}
                className="relative flex items-center h-screen overflow-hidden bg-black"
            >
                <div ref={stripRef} className="flex flex-nowrap will-change-transform transform-[translateZ(0)]">
                    {images.map((src, i) => (
                        <div
                            key={i}
                            className="p-8 shrink-0"
                            style={{ width: `${CARD_WIDTH}px` }}
                        >
                            <img
                                src={src}
                                alt=""
                                className="w-full aspect-square object-cover rounded-xl"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </SmoothScrollProvider>
    );
}

export default ScrollMotionCarousel;
