import { Suspense, lazy, useEffect, useRef, useState } from "react";

const SplineScene = lazy(() => import("./SplineScene"));

function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      options,
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}

const SplineElement = () => {
  const { ref, inView } = useInView();

  return (
    <div ref={ref} className="bg-bg1 w-full  h-screen">
      <Suspense fallback={null}>
        <SplineScene active={inView} />
      </Suspense>
    </div>
  );
};

export default SplineElement;
