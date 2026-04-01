import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import {
    BulidingMaterialsQuality,
    FeatureSection,
    IndustriesWeServe
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
} from "../../../assets/imgs/construction";

const OUR_APPROACH_DATA = [
    {
        name: "Verified Supplier Network",
        imgURL: Approach1,

    },
    {
        name: "Certified Material Sourcing",
        imgURL: Approach2,

    },
    {
        name: "Inventory & Logistics Management",
        imgURL: Approach3,

    },
    {
        name: "Quality Control & Compliance",
        imgURL: Approach4,

    },
    {
        name: "Verified Supplier Network",
        imgURL: Approach5,

    },
]

const BuildingMaterialsSupplyPage = () => {

    return (
        <div>
            <Helmet>
                <title> Building Materials Supply in KSA | Veltrixair.</title>
                <meta name="description" content="Reliable building material supply services across Saudi Arabia, supporting industrial construction projects with timely sourcing and delivery." />
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

            <BulidingMaterialsQuality />
            {/* <FeatureSection /> */}
            <OurApproach
                DATA={OUR_APPROACH_DATA}

            />
            <IndustriesWeServe />
            <BuildInfrastructure />

            <Footer />

            {/* </ReactLenis> */}

        </div>
    );
}

export default BuildingMaterialsSupplyPage;
