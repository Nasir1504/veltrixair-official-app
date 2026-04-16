import { useEffect, useRef, useState, useMemo } from "react";
import gsap from "gsap";
// import { Observer } from "gsap/observer";
import Observer from "gsap/Observer.js";
import { Stickyroll } from "@stickyroll/react";
// import ICCardSkeleton from "../../components/I

import { DigitalSystem } from "../../assets/imgs/home";
import { ICCard, DraggableSlider } from "../../components";

//videos
// import AuthorityCompliantDelivery from "../../assets/videos/construction/Authority-compliant-delivery.mov";
// import CertifiedTestingAndCommissioning from "../../assets/videos/construction/Certified-testing-and-commissioning.mov"
// import IndustrialGradeWorkmanship from "../../assets/videos/construction/Industrial-grade-workmanship.mp4"
// import SafetyFirstExecution from "../../assets/videos/construction/Safety-first-execution.mp4"

import {
    ItSolutions1,
    ItSolutions2,
    ItSolutions3,
    ItSolutions4,
    ItSolutions5,
    ItSolutions6,
    ItSolutions7,
    ItSolutions8,
} from "../../assets/imgs/it-solutions";

import {
    CloudAdoption,
    SecurityFocus,
    NetworkSystems,
    SmartSiteSecurity,
    DataStrategy,
} from "../../assets/imgs/it-solutions";

gsap.registerPlugin(Observer);


// ------CLAMP FUNCTION ---------------------------
const clamp = (min, max, val) => Math.max(min, Math.min(max, val));

function backgroundOpacity(total) {
    if (total < 1.8) {
        return clamp(0, 1, 1 - (total - 1) * 2);
    } else {
        return clamp(0, 1, ((total - 2.4) * 4));
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
        btnName: "IT Solutions",
        heading: "Structured IT Architecture",
        subHeading: "Well-defined IT infrastructure design aligned with enterprise performance and scalability requirements.",
        content: "Industrial clients rely on us for our unwavering commitment to engineering precision, disciplined execution, and uncompromising standards. Every project we undertake is guided by meticulous planning, deep technical expertise, and a strong focus on quality, ensuring that we consistently deliver reliable, efficient, and high-performance solutions.",
        videoURL: ItSolutions1,
        poster: DigitalSystem

    },
    {
        btnName: "IT Solutions",
        heading: "Secure System Design",
        subHeading: "Security-first approach across networks, cloud, and enterprise IT infrastructure systems.",
        content: "Industrial clients rely on us for our unwavering commitment to engineering precision, disciplined execution, and uncompromising standards. Every project we undertake is guided by meticulous planning, deep technical expertise, and a strong focus on quality, ensuring that we consistently deliver reliable, efficient, and high-performance solutions.",
        videoURL: ItSolutions2,
        poster: DigitalSystem
    },
    {
        btnName: "IT Solutions",
        heading: "Scalable Infrastructure",
        subHeading: "IT systems designed to scale with evolving business and operational requirements.",
        content: "Industrial clients rely on us for our unwavering commitment to engineering precision, disciplined execution, and uncompromising standards. Every project we undertake is guided by meticulous planning, deep technical expertise, and a strong focus on quality, ensuring that we consistently deliver reliable, efficient, and high-performance solutions.",
        videoURL: ItSolutions3,
        poster: DigitalSystem
    },
    {
        btnName: "IT Solutions",
        heading: "Reliable Execution",
        subHeading: "Consistent deployment and integration of IT infrastructure across enterprise environments.",
        content: "Industrial clients rely on us for our unwavering commitment to engineering precision, disciplined execution, and uncompromising standards. Every project we undertake is guided by meticulous planning, deep technical expertise, and a strong focus on quality, ensuring that we consistently deliver reliable, efficient, and high-performance solutions.",
        videoURL: ItSolutions4,
        poster: DigitalSystem
    },

    {
        btnName: "IT Solutions",
        heading: "High-Performance Systems",
        subHeading: "Optimised infrastructure ensuring uptime, speed, and efficient system performance.",
        content: "Industrial clients rely on us for our unwavering commitment to engineering precision, disciplined execution, and uncompromising standards. Every project we undertake is guided by meticulous planning, deep technical expertise, and a strong focus on quality, ensuring that we consistently deliver reliable, efficient, and high-performance solutions.",
        videoURL: ItSolutions5,
        poster: DigitalSystem
    },
    {
        btnName: "IT Solutions",
        heading: "Cloud & Network Integration",
        subHeading: "Continuous monitoring and system visibility to ensure stability and issue detection.",
        content: "Industrial clients rely on us for our unwavering commitment to engineering precision, disciplined execution, and uncompromising standards. Every project we undertake is guided by meticulous planning, deep technical expertise, and a strong focus on quality, ensuring that we consistently deliver reliable, efficient, and high-performance solutions.",
        videoURL: ItSolutions6,
        poster: DigitalSystem
    },
    {
        btnName: "IT Solutions",
        heading: "Proactive Monitoring",
        subHeading: "Continuous monitoring and system visibility to ensure stability and issue detection.",
        content: "Continuous monitoring provides real-time visibility into infrastructure performance, system health, and network activity. Early issue detection helps prevent downtime, improve response times, and maintain the reliability and stability of critical business operations.",
        videoURL: ItSolutions7,
        poster: DigitalSystem
    },
    {
        btnName: "IT Solutions",
        heading: "Managed IT Support",
        subHeading: "Ongoing support ensuring system reliability, maintenance, and operational continuity.",
        content: "Industrial clients rely on us for our unwavering commitment to engineering precision, disciplined execution, and uncompromising standards. Every project we undertake is guided by meticulous planning, deep technical expertise, and a strong focus on quality, ensuring that we consistently deliver reliable, efficient, and high-performance solutions.",
        videoURL: ItSolutions8,
        poster: DigitalSystem
    },

]


const DRAGGABLE_DATA = [
    {
        btn: "Cloud Trends",
        heading: "Cloud Adoption",
        imgURL: CloudAdoption,
        subHeading: "Enterprises are accelerating cloud adoption to improve scalability, reduce infrastructure costs, and support flexible, high-performance IT environments across distributed operations.",
    },
    {
        btn: "Security Focus",
        heading: "Cyber Resilience",
        imgURL: SecurityFocus,
        subHeading: "Modern cybersecurity frameworks focus on proactive threat detection, zero-trust architecture, and continuous monitoring to protect enterprise systems, networks, and sensitive data.",
    },
    {
        btn: "Network Systems",
        heading: "Infrastructure Uptime",
        imgURL: NetworkSystems,
        subHeading: "Reliable network infrastructure ensures minimal downtime, stable connectivity, and consistent performance across enterprise operations, especially in distributed and high-demand environments.",
    },
    {
        btn: "Smart Site Security",
        heading: "AI-Driven Protection Description",
        imgURL: SmartSiteSecurity,
        subHeading: "Integrated AI surveillance, thermal imaging, and automated access control to safeguard high-value assets and personnel in real-time.",
    },
    {
        btn: "Data Strategy",
        heading: "Data Protection",
        imgURL: DataStrategy,
        subHeading: "Robust backup and disaster recovery strategies enable business continuity, ensuring critical data is protected, recoverable, and accessible during system failures or disruptions.",
    },

    {
        btn: "Cloud Trends",
        heading: "Cloud Adoption",
        imgURL: CloudAdoption,
        subHeading: "Enterprises are accelerating cloud adoption to improve scalability, reduce infrastructure costs, and support flexible, high-performance IT environments across distributed operations.",
    },
];
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
            // className="bg-yellow-200"
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
            <div className="relative top-0 w-full max-xs:h-[100vh] h-[520px] md:h-[520px] mdlg:h-[620px] lg:h-[780px] xl:h-[920px] bg-bg2"
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
                    <div className="w-full h-[60%] sm:h-[50%] flex flex-col shrink-0 gap-[15%] justify-center items-center">
                        {/* Row 1 */}
                        <div className="overflow-hidden w-full flex justify-start">
                            <div ref={wrapperRef1} className="flex gap-6 w-max will-change-transform">
                                {[...DATA_TWO, ...DATA_TWO].map((item, index) => (
                                    <div
                                        key={index}
                                        className="relative shrink-0 card-item w-[240px] md:w-[240px] mdlg:w-[260px] lg:w-[280px] xl:w-[320px]
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
                                             max-xs:text-[0.7rem] text-[0.65rem] md:text-[0.65rem] mdlg:text-[0.8rem] lg:text-[0.85rem] xl:text-[1rem]"
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
                                        className="relative shrink-0 card-item w-[240px] md:w-[240px] mdlg:w-[260px] lg:w-[280px] xl:w-[320px]
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
                                             max-xs:text-[0.7rem] text-[0.65rem] md:text-[0.65rem] mdlg:text-[0.8rem] lg:text-[0.85rem] xl:text-[1rem]"
                                        >{item.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* ------------ Middle Section ------------- */}
                    <div className="w-full h-[40%] sm:h-[50%] flex flex-col shrink-0 justify-center items-center gap-[5%]">
                        <div className="flex flex-col justify-center items-center
                                max-xs:text-[1.8rem] text-[1.4rem] md:text-[1.4rem] mdlg:text-[1.6rem] lg:text-[1.8rem] xl:text-[2.2rem]">

                            <p className=" text-text2 tracking-[-0.05em]">Why</p>
                            <h3
                                className="relative text-text10 leading-[1.2em] flex uppercase font-semibold"
                            >
                                <span className="relative text-text1" >Industrial clients</span>
                                <span className="absolute"
                                    style={{
                                        opacity: dataCardOpacity(total, 1, 10)

                                    }}
                                >industrial clients</span>

                            </h3>
                            <p className=" text-text2 tracking-[-0.05em]">choose us</p>
                        </div>
                        <p
                            className="text-text2 text-center max-xs:hidden font-[Roboto_Mono]
                                text-[0.8rem] md:text-[0.8rem] mdlg:text-[0.9rem] lg:text-[1rem] xl:text-[1.2rem]"
                        >Trusted for secure IT infrastructure, structured system design<br />and reliable execution across cloud, networks, and enterprise platforms.</p>

                        <p
                            className="text-text2 text-center xs:hidden w-[85%]
                                max-xxs:text-[0.85rem] max-xs:text-[0.9rem] "
                        >Trusted for secure IT infrastructure, structured system design and reliable execution across cloud, networks, and enterprise platforms.</p>

                        {/* Schedule a call button */}
                        <div
                            className="relative bg-[linear-gradient(90deg,rgba(7,39,101,1)_10%,rgba(30,30,30,1)_120%)] text-text1 font-bold mt-[1em]
                                text-[0.8rem] md:text-[0.8rem]  mdlg:text-[0.9rem] lg:text-[1rem] xl:text-[1.2rem]
                                 w-[180px] md:w-[180px] mdlg:w-[200px] lg:w-[240px] xl:w-[280px] aspect-7/2 rounded-sm md:rounded-sm lg:rounded-md xl:rounded-lg p-0.5"
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
                                    className="absolute w-full h-full flex justify-center items-center transition-all duration-100 ease-in-out hover:bg-bg8 hover:text-text1 cursor-pointer"
                                >
                                    Speak with an Expert
                                </div>
                            </div>
                            {/* <div className="absolute w-full h-full bg-bg5 rounded-xs md:rounded-xs lg:rounded-sm xl:rounded-md"/> */}
                        </div>
                    </div>
                    {/* ------------ Why Choose Us Section ------------- */}
                    <div className="relative w-full max-xs:min-h-screen min-h-full flex justify-center items-center 
                                    overflow-x-clip overscroll-contain">
                        <div className="absolute w-full h-full z-1"
                            style={{
                                display: total > 1.95 && total < 2.4 ? "none" : ""
                            }}
                        />
                        <div
                            // data-lenis-prevent-wheel
                            //  data-lenis-prevent
                            className="relative w-full h-full flex flex-col justify-start items-center gap-[5%] overflow-y-auto overscroll-y-auto pt-[1%] pb-[4%] cursor-pointer z-1"
                        >
                            {
                                CARD_DATA.map((item, i) => {
                                    return (
                                        <ICCard
                                            key={i}
                                            Id={i}
                                            Heading={item.heading}
                                            BtnColor="#072765"
                                            SubHeading={item.subHeading}
                                            Content={item.content}
                                            VideoFile={item.videoURL}
                                            Poster={item.poster}
                                            Btn={item.btnName}

                                        />

                                    )
                                })
                            }
                        </div>



                    </div>
                    {/* ----------- Bottom Section Latest Updates -------------- */}

                    <div className="relative max-xs:h-screen w-full min-h-full bg-bg8 flex flex-col gap-[5%] justify-center items-center overflow-hidden">
                        {/* blured circle three */}

                        <DraggableSlider

                            Heading="Industry Insights from"
                            BG="#000310"
                            DATA={DRAGGABLE_DATA}
                            Content="Insights, technical perspectives, and developments across IT infrastructure, cloud systems, and enterprise technology environments."
                            BtnColor="#000310"

                        />

                    </div>


                </div>


            </div>
        </Stickyroll>
    );
}

export default IndustriesWeServe;
