
import { useState, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";
import {
    EngineeringSolutions,
    Services,
    IndustriesWeServe,
    BuildInfrastructure,

} from ".";

import {
    Footer
} from "../../components";



const ConstrutionPage = () => {

    return (
        <div className="constrution-page-main bg-bg2">
            <Helmet>
                <title>Industrial Construction Services in KSA | Veltrixair.</title>
                <meta name="description" content="Industrial construction,  crane installation, fit-out, and building material supply services across Saudi Arabia, supporting reliable project execution and site operations by Veltrixair." />

            </Helmet>
            {/* <ReactLenis
                root
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
                */}

            <Outlet />
            {/* ---------------------------------- */}
            <EngineeringSolutions />
            <Services />
            <div className="relative">
                <IndustriesWeServe />

            </div>
            <BuildInfrastructure
                PageName="constrution"
            />
            <Footer />
            {/* </ReactLenis> */}
        </div>
    );
}

export default ConstrutionPage;
