import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import { Stickyroll } from "@stickyroll/react";

// components
import {
    InfrastructureCard,
    ScaleShowcase,
    VideoComponent
} from "../../components/index";

// imags
import {
    IndustrialFitOuts,
    HeavyDutyPprations,
    IndustrialGradeComponents,
    Rectangle40373,
    Rectangle40376,
    Rectangle40377,
    EllipseOne,
    EllipseTwo,
    EllipseThree,
} from "../../assets/imgs/construction";

import {
    DigitalSystem
} from "../../assets/imgs/home";

import MissionVideoForMainhomepage from "../../assets/videos/construction/Mission-video-for-mainhomepage.mp4";
import VisionVideoForConstructionHomepage from "../../assets/videos/construction/vision-video-for-construction-homepage.mp4";


import VeltrixairIcon from "../../assets/imgs/footer/veltrixair-logo-type-two.png";


export const INFRASTRUCTURE_CARD_CONSTRUCTION = [
    {
        heading: "Enterprise-Grade Commercial & Industrial Fit-Outs, End to End.",
        subHeading: "Fit-Out Construction",
        concent: "Includes: Preliminaries, demolition, civil works, partitions, ceilings, flooring, joinery, metal/glass works, HVAC, electrical, plumbing, fire systems, ELV, finishes, FF&E, commissioning & handover.",
        imgURL: IndustrialFitOuts,
        bgColor: "E36002",
        linkTo: "construction-services-saudi-arabia/fit-out-precision"
    },
    {
        heading: "Engineering-Led Crane Systems for Heavy-Duty Operations.",
        subHeading: "Overhead Crane Installation",
        concent: " Engineered for compliance, performance and uncompromising safety in demanding industrial environments.",
        imgURL: HeavyDutyPprations,
        bgColor: "E36002",
        linkTo: "construction-services-saudi-arabia/overhead-crane-installation"
    },
    {
        heading: "Certified Construction Materials & Industrial-Grade Components.",
        subHeading: "Industrial Materials Supply",
        concent: " Supplying certified construction materials and industrial-grade components to support reliable, high-performance project delivery.",
        imgURL: IndustrialGradeComponents,
        bgColor: "E36002",
        linkTo: "construction-services-saudi-arabia/building-materials-supply"
    },
]


// ------CLAMP FUNCTION ---------------------------
const clamp = (min, max, val) => Math.max(min, Math.min(max, val));

// -------- Section One ----------
const getCardTranslate = (speed = 1, total) =>
    `translate3d(0, -${clamp(0, 50, (total - 1.4) * 100 * speed)}vh, 0)`;


const Services = () => {

    const frame = useRef(null);

    const [progress, setProgress] = useState({
        Progress: 0,
        Page: 0
    });
    useEffect(() => {
        setProgress({ Progress: 0, Page: 0 });
    }, []);

    const [toggle, setToggle] = useState(true);



    const total = useMemo(
        () => progress.Progress + progress.Page,
        [progress]
    );




    const transforms = useMemo(() => ({
        // -------- Section One ----------
        sectionTranslate: `translate3d(0,-${clamp(0, 150, (total - 1.4) * 800)}vh,0)`,
        logoTranslate: `translate3d(0,${clamp(0, 100, 100 - (total - 1.4) * 1000)}%,0)`,

        // -------- Section Two ----------

        circleScale: `scale(${clamp(1, 5, (total - 1.65) * 35)})`,
        ellipseScale: `scale(${clamp(0.6, 1, (total - 1.4) * 8)})`,
    }), [total]);



    // -------- Section Two ----------


    const sectionTwoTranslate =
        `translateY(-${clamp(0, 100, (total - 1.4) * 800)}vh)`;

    const getRotate = (dir = "-") => {
        if (total <= 1.6) return "rotate(0deg)";
        return `rotate(${dir}${clamp(0, 320, Math.abs((total - 1.7) * 300))}deg)`;
    };



    const ellipseScaleSmall =
        `scale(${clamp(0.4, 1, (total - 1.4) * 8)})`;

    const fadeOpacity1 =
        clamp(0, 1, 1 - (total - 1.65) * 14);


    // --------- Section Three -------------------

    const scaleBackground = `scale(${clamp(0.1, 1, (total - 1.7) * 10)})`
    const indexUpdate = total > 1.8 ? 1 : 0;
    const fadeOpacity2 =
        clamp(0, 1, (total - 1.74) * 15);



    return (
        <Stickyroll
            pages={1}
            factor={5}
            // className="bg-yellow-200"
            className="bg-bg2"
            onProgress={(prog, page) => {
                cancelAnimationFrame(frame.current);
                frame.current = requestAnimationFrame(() => {
                    setProgress({
                        Progress: prog,
                        Page: page,
                    });
                });
            }}
        >
            <div className="service-main relative w-full top-0"
                style={{
                    isolation: "isolate",
                    contain: "layout paint",
                }}
            >
                {/* <p className="fixed bg-[#00000030] top-0 flex flex-col text-yellow-800 z-5">
                    <span>{progress.Progress}</span>
                    <span>PAGE: {progress.Page}</span>
                    <span>Total: {total}</span>
                    <span>{clamp(0, 100, Math.abs((total - 1.7) * 200))}</span>

                </p> */}

                <div
                    className="relative top-0 w-full h-[485px] md:h-[485px] lg:h-[700px] xl:h-[920px] 
                            bg-bg2 z-1 flex flex-col justify-center items-center 
                            overflow-hidden origin-top will-change-transform
                            max-xs:h-screen"
                    style={{
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                    }}
                >
                    {/* --------------------- Section One -------------------------- */}
                    <section
                        className="
                            absolute w-full h-full z-3 flex flex-col justify-end items-center gap-5 md:gap-5 lg:gap-10
                            max-xs:justify-baseline"
                        style={{
                            transform: transforms.sectionTranslate,
                            willChange: "transform",
                            backfaceVisibility: "hidden",
                            transformStyle: "preserve-3d",

                        }}
                    >

                        <div className="flex flex-col justify-center items-center gap-1.5 md:gap-1.5 lg:gap-2">
                            <h4
                                className="font-['Saved_By_Zero'] text-text5 text-[1rem] md:text-[1rem] lg:text-[1.4rem] xl:text-[1.8rem]
                                            max-xs:text-[3.4vw]"
                            >
                                SERVICES
                            </h4>
                            <h2 className="text-text4 text-center font-bold text-[1.4rem] md:text-[1.4rem] lg:text-[1.9rem] xl:text-[2.1rem] leading-tight
                                              max-xs:text-[5.2vw]"
                            >
                                <span>Our Core Strength.</span>
                                <br />
                                <span>Your Trusted Foundation.</span>
                            </h2>
                            {/* <p className="text-text2 text-[0.7rem] md:text-[0.7rem] lg:text-[0.9rem] xl:text-[1rem] capitalize
                                            max-xs:text-[2.4vw] max-xs:text-center"
                            >
                                From enterprise IT infrastructure to industrial construction
                                execution
                            </p> */}
                        </div>
                        {/* ------------Cards Desktop------- */}
                        <div className="flex justify-center items-center gap-[5%] max-xs:hidden">
                            {INFRASTRUCTURE_CARD_CONSTRUCTION.map((item, i) => {

                                const speed = i === 1 ? 0.2 : 1;

                                return (
                                    <div
                                        key={i}
                                        style={{
                                            transform: getCardTranslate(speed, total),
                                            willChange: "transform",
                                            backfaceVisibility: "hidden",

                                        }}
                                    >
                                        <InfrastructureCard
                                            Id={i}
                                            Heading={item.heading}
                                            SubHeading={item.subHeading}
                                            Concent={item.concent}
                                            ImgURL={item.imgURL}
                                            BGColor={item.bgColor}
                                            LinkTo={`${item.linkTo}`}
                                            showIcon={false}
                                            HoverEffect={false}
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        {/* ------------Cards mobile------- */}
                        <div className="relative flex flex-col gap-[5%] justify-center items-center w-full h-[70%] sm:hidden overflow-hidden">
                            {INFRASTRUCTURE_CARD_CONSTRUCTION.map((item, i) => {
                                const stylesConfig = {
                                    0: { zIndex: 2 },
                                    1: { zIndex: 1 },
                                    2: { zIndex: 0 },
                                };
                                return (
                                    <div key={i} className="card absolute cubic-bezier(.75,-0.01,.27,1) duration-1000"
                                        style={{

                                            zIndex: stylesConfig[i]?.zIndex ?? "",

                                            transform: total < 1.06 && i === 0 ? `translateY(-10%) scale(1)` :
                                                total >= 1.06 && i === 0 ? `translateY(-110%) scale(0.8)` :
                                                    total >= 1.06 && total < 1.24 && i === 1 ? `translateY(-10%) scale(1)` :
                                                        total >= 1.24 && i === 1 ? `translateY(-110%) scale(0.8)` :
                                                            total >= 1.24 && i === 2 ? `translateY(-10%) scale(1)` : `translateY(90%) scale(0.8)`

                                        }}
                                    // style={mobileCardStyles[i]}
                                    >
                                        <InfrastructureCard
                                            key={i}
                                            Id={i}
                                            Heading={item.heading}
                                            SubHeading={item.subHeading}
                                            Concent={item.concent}
                                            ImgURL={item.imgURL}
                                            BGColor={item.bgColor}
                                            hoverEffect={true}
                                            LinkTo={item.linkTo}

                                        />
                                    </div>
                                )
                            })}
                            {/* ---------- nav dots ------------- */}
                            <div className="absolute left-[85%] top-[20%]
                                       w-[10%] h-[25%] flex flex-col justify-evenly items-center">
                                {
                                    INFRASTRUCTURE_CARD_CONSTRUCTION.map((_, i) => {
                                        return (
                                            <div
                                                key={i}
                                                className="max-xxs:w-[10px] max-xxs:h-[10px] max-xs:w-[15px] max-xs:h-[15px] bg-bg6 rounded-full"
                                                style={{
                                                    opacity: total < 1.06 && i === 0 ? '100' :
                                                        total >= 1.06 && total < 1.24 && i === 1 ? '100' :
                                                            total >= 1.24 && i === 2 ? '100' : '0.22'
                                                }}
                                            />
                                        )
                                    })
                                }


                            </div>
                        </div>

                    </section>

                    {/* --------------------- Section Two-------------------------- */}
                    <section className="absolute flex justify-center items-center w-full h-full top-full overflow-hidden
                                        z-1"
                        style={{
                            transform: sectionTwoTranslate
                        }}
                    >

                        <div
                            className="relative max-xs:w-[280px] w-[360px] md:w-[360px] lg:w-[520px] xl:w-[620px] flex justify-center items-center aspect-square border border-[#AFAFAF] rounded-full"
                            style={{
                                transform: transforms.circleScale,
                                display: total > 1.8 && "none"

                            }}
                        >
                            <div className="w-[45%] h-[45%] flex flex-col justify-center items-center"
                                style={{
                                    opacity: fadeOpacity1,
                                }}
                            >
                                <div className="relative min-w-[100%] min-h-[100%] overflow-hidden">
                                    <img
                                        className="absolute w-full h-full"
                                        src={VeltrixairIcon}
                                        alt=""
                                        style={{
                                            objectFit: "contain",
                                            transform: transforms.logoTranslate,
                                            willChange: "transform",
                                            backfaceVisibility: "hidden",
                                        }}
                                        loading="lazy"
                                    />
                                </div>
                                {/* <p
                                    className="text-center text-text4 font-bold leading-[1.2em]
                                                max-xs:text-[2.5vw] text-[0.83rem] md:text-[0.83rem] lg:text-[1.2rem] xl:text-[1.4rem] 
                                                "
                                >Building <br /> More Than Structures</p> */}
                            </div>
                            {/* --------- Ellipse ----------- */}
                            <img
                                className="absolute w-[80%]"
                                src={EllipseOne}
                                style={{
                                    objectFit: "contain",
                                    transform: getRotate("+"),
                                    willChange: "transform",
                                    backfaceVisibility: "hidden",
                                }}
                                alt=""
                                loading="lazy"
                            />

                            <img
                                className="absolute min-w-[130%]"
                                src={EllipseTwo}
                                style={{
                                    objectFit: "contain",
                                    transform: `${transforms.ellipseScale} ${getRotate("-")}`,
                                    willChange: "transform",
                                    backfaceVisibility: "hidden",
                                }}
                                alt=""
                                loading="lazy"
                            />

                            <img
                                className="absolute min-w-[200%]"
                                src={EllipseThree}
                                style={{
                                    objectFit: "contain",
                                    transform: `${ellipseScaleSmall} ${getRotate("+")}`,
                                    willChange: "transform",
                                    backfaceVisibility: "hidden",

                                }}
                                alt=""
                                loading="lazy"
                            />
                            {/* ------------------------- */}

                            {/* left showcase */}
                            <div className="absolute w-[125%] aspect-4/2 right-[88%] max-xs:hidden">
                                <ScaleShowcase
                                    Direction="left"
                                    Total={total}
                                    Clamp={clamp}
                                    imgURL1={IndustrialFitOuts}
                                    imgURL2={Rectangle40376}
                                    imgURL3={IndustrialGradeComponents}

                                />
                            </div>

                            {/* right showcase */}
                            <div className="absolute w-[125%] aspect-4/2 left-[88%] max-xs:hidden">
                                <ScaleShowcase
                                    Direction="right"
                                    Total={total}
                                    Clamp={clamp}
                                    imgURL1={Rectangle40373}
                                    imgURL2={HeavyDutyPprations}
                                    imgURL3={Rectangle40377}
                                />
                            </div>

                            {/* -------------- Mobile ShowCase ----------- */}
                            <div className="absolute w-full h-full z-[-1] rounded-full flex justify-center items-center bg-bg2"

                                style={{
                                    opacity: fadeOpacity1,
                                    display: total > 1.7 && "none",

                                }}
                            />

                            <div className="absolute w-full h-full z-[-2] rounded-full flex justify-center items-center xs:hidden"
                                style={{
                                    transform: total < 1.6 ? `scale(${clamp(0.4, 1, (total - 1.4) * 8)})` : `${getRotate("+")}`,
                                    opacity: `${clamp(0, 1, (total - 1.4) * 8)}`,
                                    willChange: "transform",
                                    backfaceVisibility: "hidden",
                                }}
                            >
                                {
                                    [...Array(8)].map((_, i) => {
                                        return <div
                                            key={i}
                                            className="absolute w-[30%] aspect-5/7 rounded-md overflow-hidden flex justify-center"
                                            style={{
                                                transform:
                                                    i === 0 ? `translate(-60%, -180%) rotate(-13deg)` :
                                                        i === 1 ? `translate(115%, -165%) rotate(27deg)` :
                                                            i === 2 ? `translate(240%, -60%) rotate(-110deg)` :
                                                                i === 3 ? `translate(220%, 100%) rotate(120deg)` :
                                                                    i === 4 ? `translate(60%, 180%) rotate(-13deg)` :
                                                                        i === 5 ? `translate(-220%, -100%) rotate(120deg)` :
                                                                            i === 6 ? `translate(-240%, 60%) rotate(-110deg)` :
                                                                                i === 7 ? `translate(-115%, 165%) rotate(27deg)` : ""

                                            }}
                                        >
                                            <img
                                                className="w-full h-full"
                                                style={{
                                                    objectFit: "cover"
                                                }}
                                                src={IndustrialFitOuts}
                                                alt=""
                                                loading="lazy"
                                            />
                                        </div>
                                    })
                                }
                            </div>
                        </div>

                        <div className="absolute w-full bottom-[10%] flex justify-between items-center text-text2 px-[5%]
                                        max-xs:text-[3vw] text-[0.73rem] md:text-[0.73rem] lg:text-[1rem] xl:text-[1.2rem]
                                        max-xs:bottom-[2%]"
                            style={{
                                opacity: fadeOpacity1,
                                display: total > 1.7 && "none"

                            }}
                        >
                            {/* <p className="w-[26%] capitalize max-xs:hidden">
                                From enterprise IT infrastructure to industrial construction execution
                            </p>
                            <p className="max-xs:w-full xs:w-[26%] capitalize max-xs:text-center max-xs:px-[10vw] max-xs:tracking-[-0.8px]">
                                From enterprise IT infrastructure to industrial construction execution
                            </p> */}
                        </div>
                    </section>

                    {/* --------------------- Section Three-------------------------- */}
                    <section className="absolute flex flex-col justify-center items-center w-full h-full overflow-hidden
                                        z-0"
                        style={{
                            willChange: "transform",
                            zIndex: indexUpdate,
                            opacity: fadeOpacity2,
                            transform: scaleBackground,

                        }}
                    >
                        <div className="w-full h-[40%] flex flex-col justify-center items-center">
                            <div
                                className="font-['Saved_By_Zero'] flex gap-[0.4em] max-xs:gap-[0.2em]
                                             max-xs:text-[9vw] text-[2.9rem] md:text-[2.9rem] lg:text-[3.5rem] xl:text-[4rem]"
                            >
                                <button
                                    onClick={() => { setToggle(true) }}
                                    className="cursor-pointer duration-500 ease-in-out"
                                    style={{
                                        color: toggle ? "#072765" : "#D7D7D7",
                                        transform: toggle ? "scale(1)" : "scale(0.85)"
                                    }}
                                >mission</button>
                                <button
                                    onClick={() => { setToggle(false) }}
                                    className="cursor-pointer duration-500 ease-in-out"
                                    style={{
                                        color: !toggle ? "#E36002" : "#D7D7D7",
                                        transform: toggle ? "scale(0.85)" : "scale(1)"
                                    }}
                                >vision</button>

                            </div>
                            <p
                                className="text-text6 text-center capitalize font-medium
                                           max-xs:text-[2.5vw] text-[0.8rem] md:text-[0.8rem] lg:text-[1rem] xl:text-[1.12rem]"
                            > {toggle ?
                                <span>To engineer and deliver infrastructure<br />that meets uncompromising standards of safety,<br />quality, and performance.</span> :
                                <span> To shape the future of infrastructure<br /> through engineering excellence and<br />performance-driven execution.</span>

                                }
                            </p>
                        </div>
                        <div className="w-full max-xs:h-[85%] h-[60%] flex justify-center items-center overflow-hidden">
                            <div className="max-xs:w-[85%] w-[80%] h-full rounded-xl overflow-hidden ">
                                <VideoComponent
                                    src={toggle ? MissionVideoForMainhomepage : VisionVideoForConstructionHomepage}
                                    poster={toggle ? DigitalSystem : DigitalSystem}
                                    className="h-full"
                                    isMuteIcon={false}
                                />

                            </div>
                        </div>


                    </section>


                </div >

            </div >
        </Stickyroll >
    );
}

export default Services;


