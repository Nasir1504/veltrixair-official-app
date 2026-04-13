import { useState, useMemo, useRef, useEffect } from "react";
import { useScreen } from "../../components/useScreen";
import { InfrastructureCard } from "../../components";
import { Stickyroll } from "@stickyroll/react";
// components
import {
    ScaleShowcase,
    VideoComponent
} from "../../components/index";

// imags
import {
    IndustrialFitOuts,
    EllipseOne,
    EllipseTwo,
    EllipseThree,

} from "../../assets/imgs/construction";

import {
    Frame1,
    Frame2,
    Frame3,
    Frame4,
    Frame5,
    Frame6
} from "../../assets/imgs/it-solutions";

import {
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    Img15,

} from "../../assets/imgs/it-solutions";

import {
    DigitalSystem
} from "../../assets/imgs/home";

import MissionVideoForMainhomepage from "../../assets/videos/construction/Mission-video-for-mainhomepage.mp4";
import { VisionVideo } from "../../assets/imgs/it-solutions";


import VeltrixairIcon from "../../assets/imgs/footer/veltrixair-logo-type-one.png";

// ------------------ DATA ---------------

export const INFRASTRUCTURE_CARD_ITSOLUTIONS = [
    {
        heading: "Enterprise-grade web, mobile and business applications built using secure, scalable and modern development frameworks.",
        subHeading: "Custom Software Development",
        concent: "Scope:",
        subContent: ".NET, PHP, Python, JavaScript, Android/iOS, React, Angular, Salesforce, UX design",
        imgURL: Img1,
        bgColor: "072765",
        linkTo: "/construction-services-saudi-arabia",
        // videoLink: ConstructionHomepageCard
    },
    {
        heading: "Design, deployment, and management of secure, scalable enterprise network infrastructure and connectivity systems.",
        subHeading: "Network Infrastructure Services",
        concent: "Scope:",
        subContent: "LAN, WAN, Wi-Fi, routers, firewalls, VPN, SD-WAN, bandwidth optimisation",
        imgURL: Img2,
        bgColor: "072765",
        linkTo: "",
        // videoLink: ITHomepageCard
    },
    {
        heading: "Integrated surveillance, structured cabling and network systems for secure monitoring and infrastructure connectivity.",
        subHeading: "Network & CCTV Systems",
        concent: "Scope:",
        subContent: "CCTV design, fibre cabling, structured networks, troubleshooting, maintenance",
        imgURL: Img3,
        bgColor: "072765",
        linkTo: "",
        // videoLink: ConsultancyHomepageCard
    },

    {
        heading: "High-speed, reliable internet connectivity solutions for enterprise operations and remote or critical environments.",
        subHeading: "Internet Connectivity Services",
        concent: "Scope:",
        subContent: "Dedicated Internet Access (DIA), point-to-point links, satellite internet",
        imgURL: Img4,
        bgColor: "072765",
        linkTo: "",
        // videoLink: ConsultancyHomepageCard
    },
    {
        heading: "Planning and design of scalable, secure IT infrastructure aligned with enterprise and operational requirements.",
        subHeading: "IT Infrastructure Design Services",
        concent: "Scope:",
        subContent: "Data centres, cloud architecture, disaster recovery planning, high-availability systems",
        imgURL: Img5,
        bgColor: "072765",
        linkTo: "",
        // videoLink: ConsultancyHomepageCard
    },
    {
        heading: "Design, setup, and management of enterprise data centre environments for reliable and high-performance operations.",
        subHeading: "Data Centre Infrastructure",
        concent: "Scope:",
        subContent: "Server rooms, cooling systems, power management, rack systems, monitoring",
        imgURL: Img6,
        bgColor: "072765",
        linkTo: "",
        // videoLink: ConsultancyHomepageCard
    },

    {
        heading: "Provisioning and management of enterprise server environments for efficient processing, storage, and system performance.",
        subHeading: "Server Infrastructure Services",
        concent: "Scope:",
        subContent: "Physical and virtual servers, VMware, Hyper-V, patching, DNS, DHCP Reply",
        imgURL: Img7,
        bgColor: "072765",
        linkTo: "",
        // videoLink: ConsultancyHomepageCard
    },
    {
        heading: "High-performance, scalable storage systems integrated with cloud and backup solutions for efficient data management.",
        subHeading: "Cloud Storage Services",
        concent: "Scope:",
        subContent: "SAN, NAS, DAS, cloud storage, backup systems, storage virtualisation",
        imgURL: Img8,
        bgColor: "072765",
        linkTo: "",
        // videoLink: ConsultancyHomepageCard
    },
    {
        heading: "Cloud infrastructure services covering adoption, migration, optimisation, and scalable deployment across enterprise environments.",
        subHeading: "Cloud Migration Services",
        concent: "Scope:",
        subContent: "AWS, Azure, GCP, hybrid cloud, CI/CD pipelines, cost optimisation",
        imgURL: Img9,
        bgColor: "072765",
        linkTo: "",
        // videoLink: ConsultancyHomepageCard
    },

    {
        heading: "Security infrastructure and protection systems designed to safeguard enterprise networks, systems, and data.",
        subHeading: "Cybersecurity Services",
        concent: "Scope:",
        subContent: "Firewalls, EDR, SIEM, email security, web security, IPS, IDS",
        imgURL: Img10,
        bgColor: "072765",
        linkTo: "",
        // videoLink: ConsultancyHomepageCard
    },
    {
        heading: "Data protection and recovery systems ensuring business continuity and rapid restoration from failures or disruptions.",
        subHeading: "Backup & Disaster Recovery",
        concent: "Scope:",
        subContent: "Disaster recovery planning, automated backups, failover testing, offsite recovery",
        imgURL: Img11,
        bgColor: "072765",
        linkTo: "",
        // videoLink: ConsultancyHomepageCard
    },
    {
        heading: "Enterprise resource planning systems enabling integrated business processes, automation, and operational efficiency.",
        subHeading: "ERP Services",
        concent: "Scope:",
        subContent: "HRMS, payroll, finance, procurement, inventory, asset management",
        imgURL: Img12,
        bgColor: "072765",
        linkTo: "",
        // videoLink: ConsultancyHomepageCard
    },

    {
        heading: "24/7 IT support and managed services ensuring system stability, performance, and continuous issue resolution.",
        subHeading: "Managed IT Support Services",
        concent: "Scope:",
        subContent: "L1, L2, L3 support, remote helpdesk, onsite support, SLA-based services",
        imgURL: Img13,
        bgColor: "072765",
        linkTo: "",
        // videoLink: ConsultancyHomepageCard
    },
    {
        heading: "Secure email and domain infrastructure supporting professional communication and enterprise identity management.",
        subHeading: "Business Email & Domain Services",
        concent: "Scope:",
        subContent: "Microsoft 365, Google Workspace, domain registration, migrations",
        imgURL: Img14,
        bgColor: "072765",
        linkTo: "",
        // videoLink: ConsultancyHomepageCard
    },
    {
        heading: "Digital marketing services focused on visibility, engagement, and measurable business growth across online channels.",
        subHeading: "Digital Marketing Services",
        concent: "Scope:",
        subContent: "SEO, SEM, social media marketing, content marketing, CRM, email campaigns",
        imgURL: Img15,
        bgColor: "072765",
        linkTo: "",
        // videoLink: ConsultancyHomepageCard
    },
]


// ------CLAMP FUNCTION ---------------------------
const clamp = (min, max, val) => Math.max(min, Math.min(max, val));


const MobileShowCase = [
    { imgURL: Frame1 },
    { imgURL: Frame2 },
    { imgURL: Frame3 },
    { imgURL: Frame4 },

    { imgURL: Frame1 },
    { imgURL: Frame2 },
    { imgURL: Frame6 },
    { imgURL: Frame5 },

]

// -------- Section One ----------


const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        setProgress({ Progress: 0, Page: 0 });
    }, [])
    const frame = useRef(null);
    const [size, setSize] = useState({
        scrollVal: 212,
        scrollFactor: 280
    });

    const [progress, setProgress] = useState({
        Progress: 0,
        Page: 0
    });
    useEffect(() => {
        setProgress({ Progress: 0, Page: 0 });
    }, []);

    const [toggle, setToggle] = useState(true);



    const total = progress.Progress + progress.Page;


    const screen = useScreen();

    useEffect(() => {
        if (screen === "xl") {
            setSize({
                scrollVal: 212,
                scrollFactor: 280
            })
        }
        else if (screen === "lg") {
            setSize({
                scrollVal: 244,
                scrollFactor: 300
            })

        }
        else if (screen === "mdlg") {
            setSize({
                scrollVal: 238,
                scrollFactor: 320
            })

        }
        else if (screen === "md") {
            setSize({
                scrollVal: 220,
                scrollFactor: 325
            })

        }
        else if (screen === "xs") {
            setSize({
                scrollVal: 481,
                scrollFactor: 600
            })

        }
        else if (screen === "xxs") {
            setSize({
                scrollVal: 806,
                scrollFactor: 1000
            })

        }
        else if (screen === "xxxs") {
            setSize({
                scrollVal: 930,
                scrollFactor: 1100
            })

        }
    }, [screen])




    // -------- Section Two ----------

    const sectionTwoTranslate =
        `translateY(-${clamp(0, 100, (total - 1.95) * 800)}vh)`;

    const transforms = useMemo(() => ({
        circleScale: `scale(${clamp(1, 5, (total - 2.12) * 35)})`,
        ellipseScale: `scale(${clamp(0.6, 1, (total - 2) * 10)})`,
    }), [total]);



    // -------- Section Two ----------

    const getRotate = (dir = "-") => {
        if (total <= 2) {
            return "rotate(0deg)"
        }
        return `rotate(${dir}${clamp(0, 320, Math.abs((total - 2.2) * 300))}deg)`;

    };



    const ellipseScaleSmall =
        `scale(${clamp(0.4, 1, (total - 2) * 10)})`;

    const fadeOpacity1 =
        clamp(0, 1, 1 - (total - 2.18) * 14);


    // --------- Section Three -------------------

    const scaleBackground = `scale(${clamp(0.1, 1, (total - 2.2) * 10)})`
    const indexUpdate = total > 2.3 ? 1 : 0;
    const fadeOpacity2 =
        clamp(0, 1, (total - 2.26) * 15);



    return (
        <Stickyroll
            pages={1.4}
            factor={5}
            // className="bg-yellow-200"
            className="bg-bg8"
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
                    <span>{clamp(0, 100, (total - 1.95) * 800)}</span>
                    <span>{screen}</span>
                </p> */}

                <div
                    className="relative top-0 w-full h-screen 
                            bg-bg8 z-1 flex flex-col justify-center items-center 
                            overflow-hidden origin-top will-change-transform
                            max-xs:h-screen"
                    style={{
                        willChange: "transform",
                        backfaceVisibility: "hidden",
                    }}
                >
                    <section className="absolute top-0 flex flex-col justify-center items-center w-full h-full overflow-hidden
                                        z-1"
                        style={{
                            transform: sectionTwoTranslate
                        }}
                    >
                        <div
                            className="absolute max-xxs:top-[-6%] max-xs:top-[-15%] top-[-20%] rounded-[100%] max-xs:w-[45%] w-[28%] aspect-2/1 bg-bg9 z-3 blur-[60px] lg:blur-[80px] xl:blur-[100px] duration-200 ease-in-out"
                            style={{
                                opacity: `${clamp(0, 1, ((total - 1) * 40))}`

                            }}

                        />
                        <div className="flex h-[32%] flex-col justify-center items-center gap-1.5 md:gap-1.5 lg:gap-2 max-xs:pb-[14%] pb-[2%]">
                            <h4
                                className="font-['Saved_By_Zero'] text-text2 text-[1rem] md:text-[1rem] mdlg:text-[1.2rem] lg:text-[1.4rem] xl:text-[1.8rem]
                                            max-xs:text-[1rem] max-xxs:text-[0.55rem]"
                            >
                                What We Do
                            </h4>
                            <h2 className="text-white text-center font-bold text-[1.4rem] md:text-[1.4rem] mdlg:text-[1.6rem] lg:text-[1.9rem] xl:text-[2.1rem] leading-tight [text-shadow:0.06em_0.06em_2px_rgba(0,0,0,08)]
                              max-xs:text-[1.5rem] max-xxs:text-[0.9rem]"
                            >
                                <span>We deliver full-stack IT </span>
                                <br />
                                <span>infrastructure and digital systems</span>
                            </h2>
                            <p className="text-text2 text-[0.7rem] md:text-[0.7rem] mdlg:text-[0.8rem] lg:text-[0.9rem] xl:text-[1rem] capitalize
                            max-xs:text-[1rem] max-xs:text-center max-xxs:text-[0.6rem] max-xs:px-[10%] max-xs:mt-[2%] px-[20%] text-center"
                            >
                                covering strategy, deployment, operations, and long-term support — across cloud, networks, data centers, cybersecurity, and enterprise platforms.
                            </p>
                        </div>
                        <div className="relative w-full">
                            <div className="flex gap-[2%]"
                                style={{
                                    // transform: `translateX(-${clamp(0, 262, ((total - 1.1) * 360))}%)`
                                    transform: `translateX(-${clamp(0, size.scrollVal, ((total - 1.1) * size.scrollFactor))}%)`

                                }}
                            >

                                {INFRASTRUCTURE_CARD_ITSOLUTIONS.map((item, i) => (
                                    <div
                                        key={i}
                                        className="shrink-0 text-text1"
                                    >
                                        <InfrastructureCard
                                            key={i}
                                            Id={i}
                                            Heading={item.heading}
                                            SubHeading={item.subHeading}
                                            Concent={item.concent}
                                            SubContent={item.subContent}
                                            ImgURL={item.imgURL}
                                            BGColor={item.bgColor}
                                            LinkTo={item.linkTo}
                                            // VideoUrl={item.videoLink}
                                            showIcon={false}
                                            HoverEffect={false}
                                        />
                                    </div>
                                ))}
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
                                display: total > 2.27 && "none"

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
                                    Byactor={2}
                                    Clamp={clamp}
                                    imgURL1={Frame3}
                                    imgURL2={Frame2}
                                    imgURL3={Frame1}

                                />
                            </div>

                            {/* right showcase */}
                            <div className="absolute w-[125%] aspect-4/2 left-[88%] max-xs:hidden">
                                <ScaleShowcase
                                    Direction="right"
                                    Total={total}
                                    Byactor={2}
                                    Clamp={clamp}
                                    imgURL1={Frame4}
                                    imgURL2={Frame5}
                                    imgURL3={Frame6}
                                />
                            </div>

                            {/* -------------- Mobile ShowCase ----------- */}
                            <div className="absolute w-full h-full z-[-1] rounded-full flex justify-center items-center bg-bg8"

                                style={{
                                    opacity: fadeOpacity1,
                                    display: total > 2.7 && "none",

                                }}
                            />

                            <div className="absolute w-full h-full z-[-2] rounded-full flex justify-center items-center xs:hidden"
                                style={{
                                    transform: total < 2.127 ? `scale(${clamp(0.4, 1, (total - 2) * 8)})` : `rotate(-${clamp(0, 320, Math.abs((total - 2.127) * 300))}deg)`,
                                    opacity: `${clamp(0, 1, (total - 2) * 8)}`,
                                    willChange: "transform",
                                    backfaceVisibility: "hidden",
                                }}
                            >
                                {
                                    MobileShowCase.map((item, i) => {
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
                                                src={item.imgURL}
                                                alt=""
                                                loading="lazy"
                                            />
                                        </div>
                                    })
                                }
                            </div>
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
                                             max-xs:text-[9vw] text-[2.9rem] md:text-[2.9rem] mdlg:text-[3.2rem] lg:text-[3.5rem] xl:text-[4rem]"
                            >
                                <button
                                    onClick={() => { setToggle(true) }}
                                    className="cursor-pointer duration-500 ease-in-out"
                                    style={{
                                        color: !toggle ? "#99999960" : "#fff",
                                        transform: toggle ? "scale(1)" : "scale(0.75)",
                                        // textDecoration: toggle ? "underline" : "none"
                                    }}
                                >mission</button>
                                <button
                                    onClick={() => { setToggle(false) }}
                                    className="cursor-pointer duration-500 ease-in-out"
                                    style={{
                                        color: !toggle ? "#fff" : "#99999960",
                                        transform: toggle ? "scale(0.75)" : "scale(1)",
                                        // textDecoration: toggle ? "none" : "underline"
                                    }}
                                >vision</button>

                            </div>
                            <p
                                className="text-text6 text-center capitalize font-medium
                                           max-xs:text-[2.5vw] text-[0.8rem] md:text-[0.8rem] mdlg:text-[0.9rem] lg:text-[1rem] xl:text-[1.12rem]"
                            > {toggle ?
                                <span>To deliver secure, scalable IT infrastructure<br />and digital systems supporting reliable and<br />high-performance enterprise operations.</span> :
                                <span>To build integrated digital infrastructure<br />that enables resilient, secure, and future-<br />ready enterprise environments.</span>

                                }
                            </p>
                        </div>
                        <div className="w-full max-xs:h-[85%] h-[60%] flex justify-center items-center overflow-hidden">
                            <div className="max-xs:w-[85%] w-[80%] h-full rounded-xl overflow-hidden ">
                                <VideoComponent
                                    src={toggle ? MissionVideoForMainhomepage : VisionVideo}
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


