import { useRef, useEffect } from "react";

import { InfrastructureCard, ViewportReveal } from "../../../components";
import { Draggable } from "gsap/Draggable";

import gsap from "gsap";

gsap.registerPlugin(Draggable);

import {
    VeltrixairIcon

} from "../../../assets/imgs/home";

import {
    Infrastructure1,
    Infrastructure2,
    Infrastructure3,
    Infrastructure4,
    Infrastructure5,
    Infrastructure6,
} from "../../../assets/imgs/construction";


const INFRASTRUCTURE_CARD_DATA = [
    {
        heading: "Industrial manufacturing companies",
        subHeading: "Construction Solutions",
        concent: "Construction and installation services supporting production environments requiring precision execution, safety compliance, and uninterrupted operational readiness.",
        imgURL: Infrastructure1,
        bgColor: "E36002",
        linkTo: "/###"
    },
    {
        heading: "Infrastructure Large-Scale Projects",
        subHeading: "Construction Solutions",
        concent: "Execution support for infrastructure developments requiring coordination, structural installation, and consistent on-site project delivery.",
        imgURL: Infrastructure2,
        bgColor: "E36002",
        linkTo: "/###"
    },
    {
        heading: "Commercial Business Spaces",
        subHeading: "Construction Solutions",
        concent: "Fit-out construction services for commercial environments requiring functional layouts, quality finishes, and timely project completion.",
        imgURL: Infrastructure3,
        bgColor: "E36002",
        linkTo: "/###"
    },
    {
        heading: "Structural Steel Installations",
        subHeading: "Construction Solutions",
        concent: "Installation of steel structures and support systems ensuring durability, load-bearing integrity, and compliance with engineering specifications.",
        imgURL: Infrastructure4,
        bgColor: "E36002",
        linkTo: "/###"
    },
    {
        heading: "Equipment Crane Systems",
        subHeading: "Construction Solutions",
        concent: "Overhead crane installation supporting material handling operations with precision alignment, safety validation, and reliable system performance.",
        imgURL: Infrastructure5,
        bgColor: "E36002",
        linkTo: "/###"
    },
    {
        heading: "Supply Material Support",
        subHeading: "Construction Solutions",
        concent: "Sourcing and supply of construction materials ensuring consistent availability, quality standards, and uninterrupted project execution.",
        imgURL: Infrastructure6,
        bgColor: "E36002",
        linkTo: "/###"
    },
]

const WeServe = () => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const track = trackRef.current;

        if (!container || !track) return;

        const getBounds = () => ({
            minX: Math.min(container.offsetWidth - track.scrollWidth, 0),
            maxX: 0
        });

        const draggable = Draggable.create(track, {
            type: "x",
            inertia: true,
            bounds: getBounds(),
            cursor: "grab",
            activeCursor: "grabbing",
        })[0];

        const handleResize = () => draggable.applyBounds(getBounds());

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            draggable.kill();
        };

    }, []);
    return (
        <div
            className="relative w-full max-xs:h-screen max-xs:h-[80vh] h-[550px] md:h-[550px] lg:h-[750px] xl:h-[920px] flex flex-col items-center justify-between overflow-hidden bg-bg1"

        >
            <div className='w-full max-xxs:h-[40%] h-[32%] flex flex-col justify-start items-center'>
                <ViewportReveal>

                    <div
                        className="absolute max-xxs:top-[-6%] max-xs:top-[-15%] top-[-20%] rounded-[100%] max-xs:w-[45%] w-[28%] aspect-2/1 bg-bg2 z-3 blur-[60px] lg:blur-[80px] xl:blur-[100px] duration-200 ease-in-out"

                    />
                </ViewportReveal>
                <div className="relative w-full h-full flex flex-col max-xxxs:gap-[4%] max-xs:gap-[6%] justify-end items-center">
                    <img
                        className=" w-[110px] md:w-[110px] lg:w-[150px] xl:w-[180px]"
                        src={VeltrixairIcon}
                        alt=""
                        loading="lazy"
                        style={{
                            objectFit: "contain"
                        }}
                    />
                    <h3 className="text-text1 max-xxxs:text-[1.2rem] max-xxs:text-[1.4rem] text-[1.4rem] md:text-[1.5rem] lg:text-[2.2rem] xl:text-[2.8rem] capitalize font-medium">Who do we serve</h3>
                    <p className="text-text12 max-xxxs:text-[0.6rem] max-xxs:text-[0.7rem] text-[0.7rem] md:text-[0.7rem] lg:text-[1rem] xl:text-[1.2rem] max-xs:px-[8%] px-[20%] text-center max-xs:text-center">Supporting industrial facilities, infrastructure projects, and commercial developments with reliable construction execution, structural systems, and on-site operational performance.</p>
                </div>
            </div>
            <div
                ref={containerRef}

                className='w-full h-[65%] flex gap-[2.5%] justify-start items-center overscroll-contain scroll-smooth overflow-scroll'
            >
                <div
                    ref={trackRef}
                    className="grid grid-rows-1 max-xs:gap-x-[4vw] max-xs:gap-y-[4vw] gap-x-[3%] grid-flow-col ">

                    {
                        INFRASTRUCTURE_CARD_DATA.map((item, i) => {
                            return (
                                <InfrastructureCard
                                    key={i}
                                    Id={i}
                                    Heading={item.heading}
                                    SubHeading={item.subHeading}
                                    Concent={item.concent}
                                    ImgURL={item.imgURL}
                                    BGColor={item.bgColor}
                                    LinkTo={item.linkTo}
                                    showIcon={false}
                                    HoverEffect={false}
                                    TopBtn={false}
                                />

                            )
                        })
                    }


                </div>
            </div>


        </div>
    );
}

export default WeServe;


//  <div
//                 ref={containerRef}
//                 className='w-full h-[65%] flex gap-[2.5%] justify-start items-center overscroll-contain scroll-smooth overflow-scroll'
//             >
//                 <div
//                     ref={trackRef}
//                     className="grid grid-rows-1 max-xs:grid-rows-2 max-xs:gap-x-[4vw] max-xs:gap-y-[4vw] gap-x-[3%] grid-flow-col ">

//                     {
//                         INFRASTRUCTURE_CARD_DATA.map((item, i) => {
//                             return (
// <InfrastructureCard
//     key={i}
//     Id={i}
//     Heading={item.heading}
//     SubHeading={item.subHeading}
//     Concent={item.concent}
//     ImgURL={item.imgURL}
//     BGColor={item.bgColor}
//     LinkTo={item.linkTo}
//     showIcon={false}
//     HoverEffect={false}
// />

//                             )
//                         })
//                     }
//                 </div>
//             </div>