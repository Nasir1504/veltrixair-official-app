import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { loadAnalytics } from "../../utils/analytics";

const CookieConsent = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = Cookies.get("cookie_consent");

        if (!consent) {
            setVisible(true);
        } else if (consent === "accepted") {
            loadAnalytics(); // load on revisit
        }
    }, []);

    const handleAccept = () => {
        Cookies.set("cookie_consent", "accepted", { expires: 365 });
        loadAnalytics(); // 🔥 load immediately
        setVisible(false);
    };

    const handleReject = () => {
        Cookies.set("cookie_consent", "rejected", { expires: 365 });
        // Remove analytics cookies
        // Cookies.remove("_ga");
        // Cookies.remove("_ga_XXXXXXX");
        Cookies.remove("_ga", { path: "/" });
        Cookies.remove("_ga_BVPRK86ETY", { path: "/" });
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full h-[20vh] px-[5%] bg-[#00000090] backdrop-blur-[10px] text-white p-4 flex flex-col md:flex-row justify-between items-center z-20">
            <p className="text-sm mb-2 md:mb-0 max-xxs:text-[0.7rem] max-xs:pt-[5%] text-[1rem]">
                We use cookies to improve your experience.
            </p>

            <div className="flex gap-2">
                <button
                    onClick={handleAccept}
                    className="bg-btn3 px-4 py-1 rounded"
                >
                    Accept
                </button>

                <button
                    onClick={handleReject}
                    className="bg-bg1 px-4 py-1 rounded"
                >
                    Reject
                </button>
            </div>
        </div>
    );
};

export default CookieConsent;