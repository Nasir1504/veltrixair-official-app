import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTracking = () => {
    const location = useLocation();
    const consent = document.cookie.includes("cookie_consent=accepted");

    useEffect(() => {
        if (window.gtag && consent) {
            window.gtag("config", "G-BVPRK86ETY", {
                page_path: location.pathname,
            });
        }
    }, [location]);
};

export default usePageTracking;