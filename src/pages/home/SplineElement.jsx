import { Suspense, lazy, useEffect, useRef, useState } from "react";

const SplineScene = lazy(() => import("./SplineScene"));

function useInView(options = { threshold: 0.2 }) {
  const ref = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
          observer.disconnect();
        }
      },
      options
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, hasEntered };
}

const Loader = () => (
  <div className="flex items-center justify-center h-full text-white">
    <p>Loading 3D...</p>
  </div>
);

const SplineElement = () => {
  const { ref, hasEntered } = useInView();

  return (
    <div ref={ref} className="bg-bg1 w-full h-screen">
      <Suspense fallback={<Loader />}>
        {/* ✅ Mount only when visible for the first time, keep context alive */}
        {hasEntered && <SplineScene />}
      </Suspense>
    </div>
  );
};

export default SplineElement;