import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";

const BlockScrollSection = () => {
  const ref = useRef(null);
  const lenis = useLenis();

  useEffect(() => {
    if (!ref.current || !lenis) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          lenis.stop(); // 🚫 stop scrolling
        } else {
          lenis.start(); // ✅ resume scrolling
        }
      },
      {
        threshold: 0.6, // 60% visible
      }
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
      lenis.start(); // safety: always re-enable scroll
    };
  }, [lenis]);

  return (
    <section
      ref={ref}
    >
    </section>
  );
};

export default BlockScrollSection;