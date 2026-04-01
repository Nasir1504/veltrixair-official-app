import { useRef } from "react";
import { useLenis } from "lenis/react";

const ParallaxSection = ({ strength = 150, children }) => {
  const ref = useRef(null);

  useLenis(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Only animate if in viewport
    if (rect.top < windowHeight && rect.bottom > 0) {
      const progress = 1 - rect.top / windowHeight;

      // clamp 0 → 1
      const clamped = Math.max(0, Math.min(1, progress));

      ref.current.style.transform = `translateY(${clamped * strength}px)`;
    }
  });

  return (
    <section
      ref={ref}
      className="will-change-transform"
    >
      {children}
    </section>
  );
};

export default ParallaxSection;
