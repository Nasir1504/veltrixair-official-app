import { useEffect, useRef } from "react";
import gsap from "gsap";
import Lenis from "lenis";

export default function FloatingBlob({
  BGColor = "#ffffff"
}) {
  const blobRef = useRef(null);

  useEffect(() => {
    // 🔹 Lenis setup (smooth scroll)
    const lenis = new Lenis({
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 🔹 GSAP random floating animation
    const moveBlob = () => {
      gsap.to(blobRef.current, {
        x: gsap.utils.random(-100, 100),
        y: gsap.utils.random(-5, 5),
        duration: gsap.utils.random(2, 4),
        ease: "sine.inOut",
        onComplete: moveBlob, // loop infinitely
      });
    };

    moveBlob();

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div
        ref={blobRef}
        className="max-xs:w-[80vw] max-xs:h-[60vw] w-[28vw] h-[24vw] rounded-full bg-white blur-3xl duration-100 ease-in-out opacity-70"
        style={{
          backgroundColor: `${BGColor}`
        }}
      />
    </div>
  );
}