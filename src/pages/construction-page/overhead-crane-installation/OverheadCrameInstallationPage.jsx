import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import {
    HeavyDutyCraneSystems,
    FeatureSection,
    IndustriesWeServe,
    OverheadCranesWeDeliver
} from ".";
import { ReactLenis } from "lenis/react";
import { BuildInfrastructure } from "../../home";
import {
    ScrollTracker,
    Footer,
    OurApproach,
    ScrollMotionCarousel
} from "../../../components";

import {
    Approach1,
    Approach2,
    Approach3,
    Approach4,
    Approach5,
} from "../../../assets/imgs/construction/fit-out-precision";


const OUR_APPROACH_DATA = [
    {
        name: "Engineering-led planning and methodical project preparation",
        imgURL: Approach1,
    },
    {
        name: "Detailed review of structural drawings and load parameters",
        imgURL: Approach2,
    },
    {
        name: "Strict adherence to international safety and installation standard",
        imgURL: Approach3,
    },
    {
        name: "Precision structural alignment for stable crane runway performance",
        imgURL: Approach4,
    },
    {
        name: "Installation procedures aligned with OEM technical specifications",
        imgURL: Approach5,
    },
]

const OverheadCrameInstallationPage = () => {

    return (
        <div>
            <Helmet>
                <title>Overhead Crane & Steel Structure Installation KSA | Veltrixair.</title>
                <meta name="description" content="Overhead crane and steel structure installation services in Saudi Arabia, including structural alignment, lifting systems and commissioning. Built for safety and operational reliability." />
                <link rel="canonical" href="https://www.tacobell.com/" />

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

            <HeavyDutyCraneSystems />
            {/* <ScrollMotionCarousel /> */}
            <OverheadCranesWeDeliver />
            <FeatureSection />
            <OurApproach
                DATA={OUR_APPROACH_DATA}

            />
            <IndustriesWeServe />
            <BuildInfrastructure
                PageName="overhead-crane-installation"

            />
            <Footer />
            {/* </ReactLenis> */}

        </div>
    );
}

export default OverheadCrameInstallationPage;
