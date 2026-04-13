import { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollTracker from "./components/ScrollTracker";
import { NavBar, NavBarMobile } from "./components";
import { useLocation } from "react-router-dom";
import usePageTracking from "./hooks/usePageTracking";
import { Helmet } from "react-helmet-async";
gsap.registerPlugin(ScrollTrigger);

// pages
import Home from "./pages/home"
import AboutPage from "./pages/home/about/AboutPage"
import PeoplePage from "./pages/home/people-page/PeoplePage"

// ---------------------- Constructions ------------------
import ConstructionPage from "./pages/construction-page"
import FitOutConstructionPage from "./pages/construction-page/fit-out-precision/FitOutPrecisionPage"
import OverheadCrameInstallationPage from "./pages/construction-page/overhead-crane-installation"
import BuildingMaterialsSupplyPage from "./pages/construction-page/building-materials-supply/BuildingMaterialsSupplyPage"
import {
  AboutUsConstruction,
  PeopleConstruction
} from "./pages/construction-page";
// ------------------------ IT Solutions -----------------
import ITSolutionsMain from "./pages/it-solutions/ITSolutionsMain"
import AboutPageITSolution from "./pages/it-solutions/about/AboutPage";
import PeoplePageITSolution from "./pages/it-solutions/people-page";
import Services from "./pages/it-solutions/services/Services";
import { SERVICES_DATA } from "./pages/it-solutions/services/ServicesData";

import {
  Loader,
  CookieConsent,
  NotFound
} from "./components";

// imgs
import NavLogo from "./assets/imgs/footer/veltrixair-logo-type-three.png";


function App() {

  const [velocity, setVelocity] = useState(0);
  const [direction, setDirection] = useState();
  const [progress, setProgress] = useState();
  const [showLoader, setShowLoader] = useState(true);
  // mobile navbar
  const [toggle, setToggle] = useState({
    main: false,
    sub: false
  });

  usePageTracking();

  const location = useLocation();
  const baseUrl = "https://veltrixair.com";
  const canonicalUrl = baseUrl + location.pathname;

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }



    const reset = () => {
      window.scrollTo(0, 0);
      if (typeof window.scrollTo === 'function') {
        window.scrollTo(0, 0);
      }
    };

    reset();

    setTimeout(reset, 50); // ensure after layout
  }, [location.pathname]);

  useEffect(() => {
    if (toggle.main) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [toggle]);


  return (
    <HelmetProvider>
      <Helmet>
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>
      <ReactLenis
        root
        autoRaf={true}
        options={{
          lerp: 0.07,
          smoothWheel: true,
          syncTouch: true,
          allowNestedScroll: true,
          touchMultiplier: 2,
          wheelMultiplier: 1,
          infinite: false,
        }}
      >
        {/* Reset scroll & kill stale GSAP on every route change */}
        {/* <ScrollReset /> */}
        {/* <p className="top-0 fixed z-40 text-2xl left-[50%]">{location.pathname}</p> */}
        <ScrollTracker
          setVelocity={setVelocity}
          setDirection={setDirection}
          setProgress={setProgress}
        />

        <CookieConsent />

        {/* ------- Navbar ----------- */}
        <div
          className={`fixed z-20 top-0 w-full bg-[#ffffff10] rounded-b-[1.2rem] border border-white border-b-1 border-t-0 backdrop-blur-[20px] max-xs:hidden
           text-white transition-transform duration-500 ${direction === 1 ? "-translate-y-full" : "translate-y-0"} mix-blend-difference`}
        >
          <NavBar
            Direction={direction}
          />
        </div>
        {/* ----- Mobile ------ */}
        <div
          className={`fixed z-20 top-0 px-[5%] w-full h-[8vh] xs:hidden flex justify-between items-center bg-[#000000]
           text-white transition-transform duration-500 ${direction === 1 ? "-translate-y-full" : "translate-y-0"}`}
        >

          <Link
            className="top-0 left-0 z-1 absolute w-[50%] h-full cursor-pointer"
            to={"/"}
            onClick={() => setToggle(false)}
          />
          <img
            src={NavLogo}
            alt=""
            className="w-[40%]"
            style={{
              objectFit: "contain"
            }}

          />
          <button className={`relative shrink-0 ${toggle.sub ? "z-0" : "z-1"} h-[35%] aspect-3/2 flex flex-col justify-between items-end cursor-pointer`}
            onClick={() => setToggle(p => ({
              main: true,
              sub: false

            }))}
          >
            <div className={`w-full shrink-0 h-[2px] bg-bg2 rounded-2xl`} />
            <div className={`w-full shrink-0 h-[2px] bg-bg2 rounded-2xl`} />
            <div className={`w-full shrink-0 h-[2px] bg-bg2 rounded-2xl`} />


          </button>
          <div className={`absolute z-2 left-0 top-0 w-full h-screen bg-bg1 duration-150 ease-fluid ${toggle.main ? "translate-x-0" : "translate-x-[100%]"}`}>

            <NavBarMobile
              SetToggle={setToggle}
              Toggle={toggle}
              Direction={direction}
            />
          </div>
        </div>
        {/* ------------------ */}
        {/* LOADER */}
        <div
          className={`fixed w-full h-[100vh] z-25 top-0 left-0 bg-bg1 flex justify-center items-center
           text-white  `}
          style={{ display: showLoader ? "" : "none" }}

        >
          <Loader
            SetShowLoader={setShowLoader}

          />

        </div>


        <div className="fixed z-20 top-0 left-0 h-[2px] bg-bg2 mix-blend-difference"
          style={{
            width: `${progress * 100}%`
          }}
        />

        <main key={location.pathname} className="app">
          <Routes>

            {/* <Route path="/">
              <Route index element={<Home />} />
              <Route path="about" element={<AboutPage />} />
              <Route path="people" element={<PeoplePage />} />
            </Route> */}

            {/* ------------------------------------------- */}

            {/* <Route path="/construction-services-saudi-arabia">
              <Route index element={<ConstructionPage />} />
              <Route path="fit-out-precision" element={<FitOutConstructionPage />} />
              <Route path="overhead-crane-installation" element={<OverheadCrameInstallationPage />} />
              <Route path="building-materials-supply" element={<BuildingMaterialsSupplyPage />} />
              <Route path="about" element={<AboutUsConstruction />} />
              <Route path="people" element={<PeopleConstruction />} />
            </Route> */}

            {/* ----------------------------- */}

            <Route path="/">
              <Route index element={<ITSolutionsMain />} />
              <Route path="about" element={<AboutPageITSolution />} />
              <Route path="people" element={<PeoplePageITSolution />} />
              <Route path="services" element={<Services />} />
              {
                SERVICES_DATA.map((item, i) => {
                  return (
                    <Route
                      key={i}
                      path={item.siteURL}
                      element={<Services Item={item} />}
                    />
                  )
                })
              }

            </Route>

            <Route path="*" element={<NotFound />} />

          </Routes>
        </main>

      </ReactLenis>

    </HelmetProvider>

  )
}

export default App
