import { useRef, useEffect } from "react";

import { InfrastructureCard, ViewportReveal } from "../../../components";
import { Draggable } from "gsap/Draggable";

import gsap from "gsap";

gsap.registerPlugin(Draggable);

import {
    SecurityAdvisoryAndConsulting,
    DigitalSystem,
    ConstructionSolutions,
    VeltrixairIcon

} from "../../../assets/imgs/home";

import {
    AboutCard1,
    AboutCard2,
    AboutCard3,
    AboutCard4,
    AboutCard5,
    AboutCard6,
} from "../../../assets/imgs/it-solutions";


const INFRASTRUCTURE_CARD_DATA = [
    {
        heading: "Enterprise Corporate Organisations",
        subHeading: "IT Solutions",
        concent: "IT infrastructure and digital systems supporting enterprise operations, internal networks, data management, and secure business applications.",
        imgURL: AboutCard1,
        bgColor: "072765",
        linkTo: "/###"
    },
    {
        heading: "Industrial Manufacturing Facilities",
        subHeading: "IT Solutions",
        concent: "Robust IT systems for production environments that require reliable connectivity, system integration, and uninterrupted operational performance.",
        imgURL: AboutCard2,
        bgColor: "072765",
        linkTo: "/###"
    },
    {
        heading: "Infrastructure Data Centre Environments",
        subHeading: "IT Solutions",
        concent: "Scalable infrastructure for high-availability environments requiring monitoring, secure data handling, and optimised system performance.",
        imgURL: AboutCard3,
        bgColor: "072765",
        linkTo: "/###"
    },
    {
        heading: "Distributed Remote Operations",
        subHeading: "IT Solutions",
        concent: "Secure connectivity and infrastructure for geographically distributed teams, branch offices, and remote operational environments.",
        imgURL: AboutCard4,
        bgColor: "072765",
        linkTo: "/###"
    },
    {
        heading: "Commercial Business Workspaces",
        subHeading: "IT Solutions",
        concent: "Integrated IT systems supporting communication, collaboration, and secure access across modern commercial office environments.",
        imgURL: AboutCard5,
        bgColor: "072765",
        linkTo: "/###"
    },

    {
        heading: "Logistics Supply Chain Systems",
        subHeading: "IT Solutions",
        concent: "Network and system infrastructure supporting logistics operations, real-time tracking, and seamless coordination across supply chain environments.",
        imgURL: AboutCard6,
        bgColor: "072765",
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
            className="relative w-full max-xs:h-screen h-[500px] md:h-[500px] mdlg:h-[650px] lg:h-[700px] xl:h-[920px] flex flex-col items-center justify-between overflow-hidden bg-bg8"

        >
            <div className='w-full h-[30%] max-xs:h-[50%] flex flex-col justify-start items-center'>
                <ViewportReveal>

                    <div
                        className="absolute max-xxs:top-[-6%] max-xs:top-[-15%] top-[-20%] rounded-[100%] max-xs:w-[45%] w-[28%] aspect-2/1 bg-bg9 z-3 blur-[60px] lg:blur-[80px] xl:blur-[100px] duration-200 ease-in-out"

                    />
                </ViewportReveal>
                <div className="relative w-full h-full flex flex-col justify-end items-center">
                    <img
                        className="max-xs:w-[80px] w-[110px] md:w-[110px] lg:w-[150px] xl:w-[180px]"
                        src={VeltrixairIcon}
                        alt=""
                        // loading="lazy"
                        style={{
                            objectFit: "contain"
                        }}
                    />
                    <h3 className="text-text1 text-[1.5rem] md:text-[1.5rem] mdlg:text-[1.8rem] lg:text-[2.2rem] xl:text-[2.8rem]">
                        Who We Serve
                    </h3>
                    <p className="text-text12 max-xxxs:text-[0.65rem] max-xxs:text-[0.75rem] text-[0.8rem] md:text-[0.8rem] mdlg:text-[0.9rem] lg:text-[1rem] xl:text-[1.2rem] capitalize max-xs:text-center max-xxs:w-[80%] max-xs:w-[75%] w-[60%] text-center
                    ">Supporting enterprises, industrial operations and distributed business environments with secure, scalable IT infrastructure, cloud systems and network solutions.

                    </p>
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