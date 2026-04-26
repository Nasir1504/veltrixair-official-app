
import { useState, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { Outlet, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
    SplineScene,
    Services,
    IndustriesWeServe,
    BuildInfrastructure,
    ITSolutionSMCarousel,
    SmarterDigitalSystems
} from ".";

import { Footer } from "../../components";
import { ScrollTracker } from "../../components";

const ITSolutionsMain = ({
    IsMobile
}) => {
    const location = useLocation();

    return (
        <div className="it-solution-main" key={location.pathname}>
            <Helmet>
                <title>IT Infrastructure Services & Cloud Solutions | Veltrixair.</title>
                <meta name="description" content="IT infrastructure, cloud, networking, cybersecurity, and managed services for scalable, secure, and high-performance enterprise operations globally." />

            </Helmet>

            <Outlet />
            <SmarterDigitalSystems />
            {/* <div className="overflow-hidden relative z-1 max-xs:hidden h-[500px] lg:h-[500px] lg:h-[780px] xl:h-[920px]">
                <SplineScene />
            </div> */}
            {/* <ITSolutionSMCarousel /> */}
            <Services IsMobile={IsMobile} />
            <IndustriesWeServe />
            <BuildInfrastructure />
            <Footer />
        </div>
    );
}

export default ITSolutionsMain;

