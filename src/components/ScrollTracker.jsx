import { useLenis } from "lenis/react";

const ScrollTracker = ({
    setVelocity,
    setDirection,
    setProgress
}) => {
    useLenis((lenis) => {
        if (!lenis) return;

        setVelocity((prev) =>
            Math.abs(prev - lenis.velocity) > 0.05
                ? lenis.velocity
                : prev
        );

        setProgress(lenis.progress);
        setDirection(lenis.direction)

    });

    return null;
};

export default ScrollTracker;
