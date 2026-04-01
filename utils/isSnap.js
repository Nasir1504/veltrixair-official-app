
// export const isSnap = () => navigator.userAgent === "ReactSnap";









// ❌ Before (your current way)
// useEffect(() => {
//   gsap.to(".box", { x: 200 });
// }, []);







// ✅ After (safe way)
// import { isSnap } from "../../utils/isSnap";

// useEffect(() => {
//   if (isSnap()) return; // 🚀 stop animations during snap

//   gsap.to(".box", { x: 200 });
// }, []);






// ✅ Step 3: For ScrollTrigger (important for you)
// useEffect(() => {
//   if (isSnap()) return;

//   gsap.registerPlugin(ScrollTrigger);

//   gsap.to(".section", {
//     scrollTrigger: ".section",
//     y: 100,
//   });

// }, []);






// ✅ Step 4: Optional (cleaner pattern)

// If you have many animations:

// if (!isSnap()) {
//   // all gsap code here
// }







// 💡 Bonus (better UX fallback)

// Instead of just disabling, you can:

// if (isSnap()) {
//   document.body.classList.add("snap-mode");
// }

// Then in CSS:

// .snap-mode * {
//   animation: none !important;
//   transition: none !important;
// }

// 👉 This disables ALL animations globally during snap