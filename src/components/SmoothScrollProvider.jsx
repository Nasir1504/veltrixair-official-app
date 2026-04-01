import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BezierEasing from "bezier-easing";

gsap.registerPlugin(ScrollTrigger);

const ease = BezierEasing(0.26, 0.07, 0.02, 0.98);
function LenisEffects() {
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    // 🔥 Sync Lenis → ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(update);
      lenis.off("scroll", ScrollTrigger.update);
      ScrollTrigger.scrollerProxy(document.documentElement, {});
    };
  }, [lenis]);

  return null;
}

export default function SmoothScrollProvider({ children }) {
  return (
    <ReactLenis
      root
      options={{
        // duration: 0.2,
        // easing: ease, // 👈 cubic-bezier applied
        smoothWheel: true,
      }}
    >
      <LenisEffects />
      {children}
    </ReactLenis>
  );
}
