import { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
// import { Observer } from "gsap/observer";
import Observer from "gsap/Observer.js";
import { Stickyroll } from "@stickyroll/react";
// import ICCardSkeleton from "../../components/I

import { DigitalSystem } from "../../assets/imgs/home";
import { ICCard, DraggableSlider } from "../../components";

//videos
import AuthorityCompliantDelivery from "../../assets/videos/construction/Authority-compliant-delivery.mov";
import CertifiedTestingAndCommissioning from "../../assets/videos/construction/Certified-testing-and-commissioning.mov"
import IndustrialGradeWorkmanship from "../../assets/videos/construction/Industrial-grade-workmanship.mp4"
import SafetyFirstExecution from "../../assets/videos/construction/Safety-first-execution.mp4"



//imgs
import {
    IMG1,
    IMG2,
    IMG3,
    IMG4,
    IMG5,
} from "../../assets/imgs/construction";

gsap.registerPlugin(Observer);


// ------CLAMP FUNCTION ---------------------------
const clamp = (min, max, val) => Math.max(min, Math.min(max, val));

function backgroundOpacity(total) {
    if (total < 1.8) {
        return clamp(0, 1, (total - 1) * 2);
    } else {
        return clamp(0, 1, 1 - ((total - 2.4) * 4));
    }
}

function dataCardOpacity(total, byValue, multiplyBy) {

    if (byValue > 0) {
        return clamp(0, 1, byValue - ((total - 1) * multiplyBy))
    } else {
        return clamp(0, 1, ((total - 1) * multiplyBy))
    }
}

const mainSectionYTransform = (total) => {
    return `translateY(-${clamp(0, 300, (total - 1) * 100)}%)`
}
const bluredCircleTransform = (total) => {
    return `translateY(${clamp(0, 110, ((total - 2.6) * 400))}%)`;
}


const DATA_ONE = [
    { name: "Logistics & Distribution Centres" },
    { name: "Ports & Marine Terminals" },
    { name: "Steel & Metal Processing Plants" },
    { name: "Power Generation & Energy Plants" },
    { name: "Oil & Gas Facilities" },
    { name: "Mining & Engineering Facilities" },
    { name: "Waste Management & Recycling Plants" },


]
const DATA_TWO = [
    { name: "Logistics & Distribution Centres" },
    { name: "Ports & Marine Terminals" },
    { name: "Steel & Metal Processing Plants" },
    { name: "Power Generation & Energy Plants" },
    { name: "Oil & Gas Facilities" },
    { name: "Mining & Engineering Facilities" },
    { name: "Waste Management & Recycling Plants" },

]


const CARD_DATA = [
    {
        btn: "constrution",
        heading: "Safety-first execution",
        subHeading: "Structured safety protocols and on-site supervision minimise risk while ensuring disciplined execution across industrial construction and crane installations.",
        content: "Industrial clients rely on us for our unwavering commitment to engineering precision, disciplined execution, and uncompromising standards. Every project we undertake is guided by meticulous planning, deep technical expertise, and a strong focus on quality, ensuring that we consistently deliver reliable, efficient, and high-performance solutions.",
        videoURL: SafetyFirstExecution,
        poster: DigitalSystem

    },
    {
        btn: "constrution",
        heading: "Regulatory-Compliant Delivery",
        subHeading: "Projects executed in strict compliance with statutory regulations, safety codes, and industry standards to ensure approvals and operational reliability.",
        content: "Industrial clients rely on us for our unwavering commitment to engineering precision, disciplined execution, and uncompromising standards. Every project we undertake is guided by meticulous planning, deep technical expertise, and a strong focus on quality, ensuring that we consistently deliver reliable, efficient, and high-performance solutions.",
        videoURL: AuthorityCompliantDelivery
        ,
        poster: DigitalSystem
    },
    {
        btn: "constrution",
        heading: "Industrial-Grade Execution",
        subHeading: "Delivered by qualified engineers and technicians, ensuring structural integrity, precision installation, and durable performance in industrial environments.",
        content: "Industrial clients rely on us for our unwavering commitment to engineering precision, disciplined execution, and uncompromising standards. Every project we undertake is guided by meticulous planning, deep technical expertise, and a strong focus on quality, ensuring that we consistently deliver reliable, efficient, and high-performance solutions.",
        videoURL: IndustrialGradeWorkmanship,
        poster: DigitalSystem
    },
    {
        btn: "constrution",
        heading: "Certified testing & commissioning",
        subHeading: "Comprehensive load testing and certified commissioning ensure crane systems meet safety standards and perform reliably under demanding industrial conditions.",
        content: "Industrial clients rely on us for our unwavering commitment to engineering precision, disciplined execution, and uncompromising standards. Every project we undertake is guided by meticulous planning, deep technical expertise, and a strong focus on quality, ensuring that we consistently deliver reliable, efficient, and high-performance solutions.",
        videoURL: CertifiedTestingAndCommissioning,
        poster: DigitalSystem
    },

]


const DRAGGALE_DATA = [
    {
        btn: "Industry Insight",
        heading: "Crane Services in the GCC",
        subHeading: "Advanced listing solutions driving safer, faster construction projects.",
        content: "",
        videoURL: "",
        poster: "",
        imgURL: IMG1,
    },
    {
        btn: "Technical Insight",
        heading: "Regulatory Compliance",
        subHeading: "Overview of statutory safety standards, load testing requirements, certification processes, and compliance practices essential for safe industrial crane operations.",
        content: "",
        videoURL: "",
        poster: "",
        imgURL: IMG2,
    },
    {
        btn: "Eco-Materials",
        heading: "The Future of Low-Carbon Building",
        subHeading: "An overview of how Veltrixair integrates sustainable materials—like recycled steel and low-carbon concrete—to cut project emissions by 40% without compromising structural integrity.",
        content: "",
        videoURL: "",
        poster: "",
        imgURL: IMG3,
    },
    {
        btn: "Digital Twins",
        heading: "Enhancing Precision and Safety",
        subHeading: "Using 3D digital modeling and real-time data integration to simulate construction environments, predict structural challenges, and streamline project timelines before breaking ground.",
        content: "",
        videoURL: "",
        poster: "",
        imgURL: IMG4,
    },
    {
        btn: "Modular Construction",
        heading: "Faster, Smarter Building",
        subHeading: "How to use off-site prefabrication and BIM technology to reduce project timelines by 30%, minimize material waste, and ensure millimetric structural precision.",
        content: "",
        videoURL: "",
        poster: "",
        imgURL: IMG5,
    },

]

// =======================================================
const IndustriesWeServe = () => {
    const [progress, setProgress] = useState({
        Progress: 0,
        Page: 0
    });
    const wrapperRef1 = useRef(null);
    const wrapperRef2 = useRef(null);

    const tweenRef1 = useRef(null);
    const tweenRef2 = useRef(null);

    const total = progress.Progress + progress.Page;



    useEffect(() => {
        const ctx = gsap.context(() => {
            const track1 = wrapperRef1.current;
            const track2 = wrapperRef2.current;

            const width1 = track1.scrollWidth / 2;
            const width2 = track2.scrollWidth / 2;

            tweenRef1.current = gsap.to(track1, {
                x: `-=${width1}`,
                duration: 20,
                ease: "none",
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize((x) => {
                        return parseFloat(x) % width1;
                    }),
                },
            });

            tweenRef2.current = gsap.to(track2, {
                x: `+=${width2}`,
                duration: 20,
                ease: "none",
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize((x) => {
                        return parseFloat(x) % width2;
                    }),
                },
            });

            Observer.create({
                type: "wheel,touch",
                onChangeY: (self) => {
                    const direction = self.deltaY > 0 ? 1 : -1;
                    const speed = gsap.utils.clamp(
                        1,
                        6,
                        Math.abs(self.velocityY) / 200
                    );

                    [tweenRef1.current, tweenRef2.current].forEach((tween) => {
                        gsap.to(tween, {
                            timeScale: direction * speed,
                            duration: 0.2,
                            overwrite: true,
                        });

                        gsap.to(tween, {
                            timeScale: 1,
                            duration: 1.5,
                            delay: 0.3,
                            ease: "power2.out",
                        });
                    });
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <Stickyroll
            pages={2}
            factor={1}
            className="bg-bg1"
            onProgress={(prog, page) => {
                setProgress({
                    Progress: prog,
                    Page: page,
                });
            }}
        >
            {/* <p className="fixed bg-[#00000030] top-0 flex flex-col text-yellow-800 z-5">
                <span>{progress.Progress}</span>
                <span>PAGE: {progress.Page}</span>
                <span>Total: {total}</span>

            </p> */}
            <div className="relative top-0 w-full max-xs:h-[100vh] h-[620px] md:h-[620px] lg:h-[760px] xl:h-[920px] bg-bg1"
                style={{
                    opacity: backgroundOpacity(total)
                }}
            />
            <div
                className="absolute top-0 flex flex-col justify-start items-center w-full h-full"
                style={{
                    willChange: "transform",
                    backfaceVisibility: "hidden",

                }}
            >
                <div className="absolute flex flex-col justify-start items-center w-full h-full"
                    style={{
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                        transform: mainSectionYTransform(total)
                    }}
                >
                    <div className="w-full h-[50%] flex flex-col shrink-0 gap-[15%] justify-center items-center">
                        {/* Row 1 */}
                        <div className="overflow-hidden w-full flex justify-start">
                            <div ref={wrapperRef1} className="flex gap-6 w-max will-change-transform">
                                {[...DATA_ONE, ...DATA_ONE].map((item, index) => (
                                    <div
                                        key={index}
                                        className="relative card-item w-[240px] md:w-[240px] lg:w-[280px] xl:w-[320px] 
                                        aspect-4/1 flex items-center justify-start gap-[5%] rounded-lg p-[1em]  border border-bg3 overflow-hidden"
                                    >
                                        <div className="absolute w-full h-full bg-bg3 left-0 top-0 z-0"
                                            style={{
                                                opacity: dataCardOpacity(total, 1, 50)

                                            }}

                                        />
                                        <div
                                            className="relative shrink-0 z-1 inner-box w-[20%] bg-bg3 aspect-square"
                                        >
                                            <div className="absolute shrink-0 w-full h-full bg-bg4 left-0 top-0 z-0"
                                                style={{
                                                    opacity: dataCardOpacity(total, 1, 50)

                                                }}

                                            />

                                        </div>
                                        <p className="relative z-1 text-text9 
                                            max-xs:text-[0.7rem] text-[0.65rem] md:text-[0.65rem] lg:text-[0.85rem] xl:text-[1rem]"
                                        >{item.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className="overflow-hidden w-full flex justify-end">
                            <div ref={wrapperRef2} className="flex gap-6 w-max will-change-transform">
                                {[...DATA_TWO, ...DATA_TWO].map((item, index) => (
                                    <div
                                        key={index}
                                        className="relative shrink-0 card-item w-[240px] md:w-[240px] lg:w-[280px] xl:w-[320px]
                                            aspect-4/1 flex items-center justify-start gap-[5%] rounded-lg p-[1em] border border-bg3 overflow-hidden"

                                    >
                                        <div className="absolute shrink-0 w-full h-full bg-bg3 left-0 top-0 z-0"
                                            style={{
                                                opacity: dataCardOpacity(total, 1, 50)
                                            }}
                                        />

                                        <div
                                            className="relative shrink-0 z-1 inner-box w-[20%] aspect-square bg-bg3"
                                        >
                                            <div className="absolute w-full h-full bg-bg4 left-0 top-0 z-0"
                                                style={{
                                                    opacity: dataCardOpacity(total, 1, 10)
                                                }}

                                            />

                                        </div>
                                        <p className="relative z-1 text-text9 
                                             max-xs:text-[0.7rem] text-[0.65rem] md:text-[0.65rem] lg:text-[0.85rem] xl:text-[1rem]"
                                        >{item.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* ------------ Middle Section ------------- */}
                    <div className="w-full h-[50%] flex flex-col shrink-0 justify-center items-center gap-[5%]">
                        <div className="flex flex-col justify-center items-center font-mono
                                text-[1.4rem] md:text-[1.4rem] lg:text-[1.8rem] xl:text-[2rem]">

                            <p className=" text-text2 tracking-[-0.05em]">Why</p>
                            <h3
                                className="relative font-[Saved_By_Zero] text-text10 leading-[1em] flex"
                            >
                                <span className="relative text-text1" >industrial clients</span>
                                <span className="absolute"
                                    style={{
                                        opacity: dataCardOpacity(total, 1, 10)

                                    }}
                                >industrial clients</span>

                            </h3>
                            <p className=" text-text2 tracking-[-0.05em]">choose us</p>
                        </div>
                        <p
                            className="text-text2 text-center
                                text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem]"
                        >Industrial partners rely on our engineering precision,<br />disciplined execution and uncompromising safety at every stage of construction.</p>

                        {/* Schedule a call button */}
                        <div
                            className="relative bg-[linear-gradient(90deg,rgba(227,96,2,1)_10%,rgba(30,30,30,1)_120%)] text-text1 font-bold
                                text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1.2rem]
                                 md:w-[140px] lg:w-[180px] xl:w-[220px] aspect-6/2 rounded-sm md:rounded-sm lg:rounded-md xl:rounded-lg p-[1px] max-xs:hidden"
                        >
                            <div
                                className="relative w-full h-full flex justify-center items-center rounded-xs md:rounded-xs lg:rounded-sm xl:rounded-md
                                     overflow-hidden
                                    ">
                                <div className="absolute w-full h-full bg-bg5"
                                    style={{
                                        opacity: dataCardOpacity(total, 1, 2)

                                    }}
                                />
                                <div className="absolute w-full h-full bg-bg1"
                                    style={{
                                        opacity: dataCardOpacity(total, 0, 2)

                                    }}
                                />
                                <div
                                    className="absolute w-full h-full flex justify-center items-center transition-all duration-100 ease-in-out hover:bg-bg6 hover:text-text1 cursor-pointer"
                                >
                                    Schedule a Call
                                </div>
                            </div>
                            {/* <div className="absolute w-full h-full bg-bg5 rounded-xs md:rounded-xs lg:rounded-sm xl:rounded-md"/> */}
                        </div>
                    </div>
                    {/* ------------ Why Choose Us Section ------------- */}
                    <div className="relative w-full max-xs:min-h-screen min-h-auto flex justify-center items-center  pb-[4%]
                                    overflow-x-clip overscroll-contain">
                        {/* <div className="absolute w-full h-full z-1"
                            style={{
                                display: total > 1.95 && total < 2.4 ? "none" : ""
                            }}
                        /> */}
                        <div
                            // overflow-y-auto scroll-smooth
                            className="relative w-full h-full flex flex-col justify-start items-center gap-[5%] pt-[1%] pb-[4%]"
                        >
                            {
                                CARD_DATA.map((item, i) => {
                                    return (
                                        <ICCard
                                            key={i}
                                            Id={i}
                                            Heading={item.heading}
                                            Btn={item.btn}
                                            SubHeading={item.subHeading}
                                            Content={item.content}
                                            VideoFile={item.videoURL}
                                            Poster={item.poster}

                                        />

                                    )
                                })
                            }
                        </div>



                    </div>
                    {/* ----------- Bottom Section Latest Updates -------------- */}

                    <div className="relative max-xs:h-screen w-full min-h-full bg-bg1 flex flex-col gap-[5%] justify-center items-center overflow-hidden">
                        <DraggableSlider

                            Heading="Project Updates & Industry Insights From"
                            BG="#1e1e1e"
                            BlurBG="#ffffff"
                            BtnBG="#E36002"
                            Content="Explore recent project milestones, engineering insights, and updates across our industrial construction and crane infrastructure operations."
                            DATA={DRAGGALE_DATA}
                        />

                    </div>


                </div>


            </div>
        </Stickyroll>
    );
}

export default IndustriesWeServe;
