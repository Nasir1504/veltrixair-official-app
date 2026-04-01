import { useEffect, useRef, useState } from "react";

const ViewportReveal = ({ children, className = "flex justify-center items-center" }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.intersectionRatio === 1) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.4,
            }
        );

        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={ref} className={className}>
            {!isVisible ? children : null}
        </div>
    );
};

export default ViewportReveal;