import { useRef, useEffect } from "react";

import { InfrastructureCard, ViewportReveal } from "../../../components";
import { Draggable } from "gsap/Draggable";

import gsap from "gsap";

gsap.registerPlugin(Draggable);

import {
    SecurityAdvisoryAndConsulting,
    DigitalSystem,
    ConstructionSolutions,
    VeltrixairIcon,

    AboutCard1,
    AboutCard2,
    AboutCard3,
    AboutCard4,
    AboutCard5,
    AboutCard6,
    AboutCard7,
    AboutCard8,

} from "../../../assets/imgs/home";


const INFRASTRUCTURE_CARD_DATA = [
    {
        heading: "Industrial & Manufacturing",
        subHeading: "VeltrixAir",
        concent: "Construction and IT solutions for production environments — from facility installation and safety compliance to system integration, reliable connectivity, and uninterrupted operational performance..",
        imgURL: AboutCard1,
        bgColor: "072765",
        linkTo: "/###"
    },
    {
        heading: "Infrastructure & Large-Scale Projects ",
        subHeading: "VeltrixAir",
        concent: "Structural installation and scalable IT for major infrastructure developments — coordinating on-site execution with data centre-grade systems, monitoring, and high-availability performance.",
        imgURL: AboutCard2,
        bgColor: "072765",
        linkTo: "/###"
    },
    {
        heading: "Commercial & Business Spaces",
        subHeading: "VeltrixAir",
        concent: "Fit-out construction and integrated IT for modern commercial environments — functional layouts, quality finishes, secure networks, and seamless collaboration systems.",
        imgURL: AboutCard3,
        bgColor: "072765",
        linkTo: "/###"
    },
    {
        heading: "Structural Steel & Support Systems",
        subHeading: "VeltrixAir",
        concent: "Installation of steel structures and support frameworks ensuring load-bearing integrity, durability, and compliance with engineering and safety specifications.",
        imgURL: AboutCard4,
        bgColor: "072765",
        linkTo: "/###"
    },
    {
        heading: "Enterprise & Corporate Organisations",
        subHeading: "VeltrixAir",
        concent: "IT infrastructure and digital systems supporting enterprise operations — internal networks, data management, secure applications, and business continuity.",
        imgURL: AboutCard5,
        bgColor: "072765",
        linkTo: "/###"
    },

    {
        heading: "Distributed & Remote Operations",
        subHeading: "VeltrixAir",
        concent: "Secure connectivity and infrastructure for geographically distributed teams, branch offices, and remote operational environments requiring consistent system performance.",
        imgURL: AboutCard6,
        bgColor: "072765",
        linkTo: "/###"
    },

    {
        heading: "Crane & Material Handling Systems",
        subHeading: "VeltrixAir",
        concent: "Overhead crane installation with precision alignment, safety validation, and reliable performance for industrial material handling operations.",
        imgURL: AboutCard7,
        bgColor: "072765",
        linkTo: "/###"
    },

    {
        heading: "Supply Chain & Logistics Support",
        subHeading: "VeltrixAir",
        concent: "Construction material sourcing and logistics IT infrastructure — ensuring consistent availability, real-time tracking, and seamless coordination across supply chain environments.",
        imgURL: AboutCard8,
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
            className="relative w-full max-xs:h-screen h-[500px] md:h-[500px] lg:h-[700px] xl:h-[920px] flex flex-col items-center justify-between overflow-hidden bg-bg1"

        >
            <div className='w-full h-[30%] max-xs:h-[50%] flex flex-col justify-start items-center'>
                <ViewportReveal>

                    <div
                        className="absolute max-xxs:top-[-6%] max-xs:top-[-15%] top-[-20%] rounded-[100%] max-xs:w-[45%] w-[28%] aspect-2/1 bg-bg2 z-3 blur-[60px] lg:blur-[80px] xl:blur-[100px] duration-200 ease-in-out"

                    />
                </ViewportReveal>
                <div className="relative w-full h-full flex flex-col max-xs:gap-[4%] justify-end items-center">
                    <img
                        className=" w-[110px] md:w-[110px] lg:w-[150px] xl:w-[180px]"
                        src={VeltrixairIcon}
                        alt=""
                        loading="lazy"
                        style={{
                            objectFit: "contain"
                        }}
                    />
                    <h3 className="text-text1 text-[1.5rem] md:text-[1.5rem] lg:text-[2.2rem] xl:text-[2.8rem]">
                        Who Do We Serve
                    </h3>
                    <p className="text-text12 max-xxxs:text-[0.65rem] max-xxs:text-[0.75rem] max-xs:text-[1rem] text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem] capitalize max-xs:text-center max-xxs:w-[90%] max-xs:w-[75%] w-[60%] text-center">
                        Enterprises, industrial facilities and commercial developments that need reliable construction execution, scalable IT infrastructure and a single team accountable for both.
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
                                    showIcon={true}
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