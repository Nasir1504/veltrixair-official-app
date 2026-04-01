import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

import {
    PrecisionFitOut,
    FeatureSection,
    IndustriesWeServe,
} from ".";
import { ReactLenis } from "lenis/react";
import { BuildInfrastructure } from "../../home";
import {
    ScrollTracker,
    Footer,
    OurApproach
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
        name: "Engineering-first planning",
        imgURL: Approach1,
    },
    {
        name: "Compliance with safety standards",
        imgURL: Approach2,
    },
    {
        name: "Precision installation & alignment",
        imgURL: Approach3,
    },
    {
        name: "Thorough testing & certification",
        imgURL: Approach4,
    },
    {
        name: "Long-term reliability focus",
        imgURL: Approach5,
    },
    
]

const FitOutPrecisionPage = () => {

    return (
        <div>
            <Helmet>
                <title>Industrial & Interior Fit-Out Services in KSA | Veltrixair.</title>
                <meta name="description" content="Industrial and commercial fit-out services in Saudi Arabia, covering interior execution, structural finishing, site-ready infrastructure development, structural modifications, and efficient space planning for commercial and industrial facilities." />
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
            > */}


            {/* -------------- */}
            <PrecisionFitOut />


            <FeatureSection />
            <OurApproach
                DATA={OUR_APPROACH_DATA}
            />
            <IndustriesWeServe />
            <BuildInfrastructure
                PageName="fit-out precision"
                MainHeading1="Complete fit-out execution"
                MainHeading2="for modern spaces in Saudi Arabia"
            />
            <Footer />
            {/* </ReactLenis> */}

        </div>
    );
}

export default FitOutPrecisionPage;
