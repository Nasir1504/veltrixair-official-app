import Cookies from "js-cookie";

let isLoaded = false;

export const loadAnalytics = () => {
  if (isLoaded) return; // prevent duplicate loading

  const consent = Cookies.get("cookie_consent");

  if (consent === "accepted") {
    // Load Google Analytics script
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-BVPRK86ETY";
    script.async = true;
    document.head.appendChild(script);

    // Setup gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;

    gtag("js", new Date());
    gtag("config", "G-BVPRK86ETY"); // 🔥 replace with your ID

    isLoaded = true;

    console.log("✅ Analytics Loaded");
  } else {
    console.log("❌ Consent not given");
  }
};