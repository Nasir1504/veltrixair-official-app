import { useState, useMemo, useRef, useEffect } from "react";
// import { useScreen } from "../../components/useScreen";
import {
    InfrastructureCard,
    MainServiceCard
} from "../../components";
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
    Frame6,


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
    Img16,
    Img17,
    Img18,


    Shutter

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
        heading: "Automate workflows with custom apps",
        btnName: "Custom Software & Applications",
        serviceDetails: ".NET, PHP, Python, JavaScript, Android/iOS, React, Angular, Salesforce, UX design",
        imgURL: Img1,
        linkTo: "it-infrastructure-solutions/software-and-application-development",
        // videoLink: ConstructionHomepageCard
    },

    {
        heading: "IT infrastructure & network solution",
        btnName: "IT Infrastructure Design Services",
        serviceDetails: "Data centres, cloud architecture, disaster recovery planning, high-availability systems",
        imgURL: Img6,
        linkTo: "it-infrastructure-solutions/it-infrastructure-and-network-services",
        // videoLink: ConsultancyHomepageCard
    },

    {
        heading: "Secure cloud storage & backup",
        btnName: "Cloud Storage Services",
        serviceDetails: "SAN, NAS, DAS, cloud storage, backup systems, storage virtualisation",
        imgURL: Img9,
        linkTo: "it-infrastructure-solutions/cloud-and-data-services",
        // videoLink: ConsultancyHomepageCard
    },

    {
        heading: "Protect data from cyber attacks",
        btnName: "Cybersecurity Services",
        serviceDetails: "Firewalls, EDR, SIEM, email security, web security, IPS, IDS",
        imgURL: Img10,
        linkTo: "it-infrastructure-solutions/cybersecurity-and-compliance",
        // videoLink: ConsultancyHomepageCard
    },

    {
        heading: "Managed IT & business services",
        btnName: "IT Support Services",
        serviceDetails: "L1, L2, L3 support, remote helpdesk, onsite support, SLA-based services",
        imgURL: Img13,
        linkTo: "it-infrastructure-solutions/managed-it-and-business-services",
        // videoLink: ConsultancyHomepageCard
    },

    {
        heading: "DevOps automation & faster deployment",
        btnName: "DevOps & Automation Services",
        concent: "Scope:",
        serviceDetails: "CI/CD pipelines, Terraform, Jenkins, GitOps, infrastructure automation",
        imgURL: Img16,
        linkTo: "it-infrastructure-solutions/devops-and-automation-services",
        // videoLink: ConsultancyHomepageCard
    },

    {
        heading: "SEO & digital marketing for leads",
        btnName: "Digital Marketing Services",
        serviceDetails: "SEO, SEM, social media marketing, content marketing, CRM, email campaigns",
        imgURL: Img15,
        linkTo: "it-infrastructure-solutions/digital-and-growth-services",
        // videoLink: ConsultancyHomepageCard
    },

    {
        heading: "ERP software to streamline ops",
        btnName: "ERP Services",
        serviceDetails: "HRMS, payroll, finance, procurement, inventory, asset management",
        imgURL: Img12,
        linkTo: "it-infrastructure-solutions/erp-services",
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



const Services = ({
    IsMobile
}) => {
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


    // -------- Section One ----------



    // -------- Section Two ----------

    const sectionTwoTranslate =
        `translateY(-${clamp(0, 100, (total - 1.95) * 150)}vh)`;

    const transforms = useMemo(() => ({
        circleScale: `scale(${clamp(1, 55, (total - 2.65) * 10)})`,
        ellipseScale: `scale(${clamp(0.6, 1, (total - 2.3) * 3)})`,
        ellipseScaleMob: `scale(${clamp(0.6, 1.2, (total - 2.3) * 3.2)})`,

    }), [total]);



    // -------- Section Two ----------

    const getRotate = (dir = "-") => {
        if (total <= 2.65) {
            return "rotate(0deg)"
        }
        return `rotate(${dir}${clamp(0, 320, Math.abs((total - 2.2) * 150))}deg)`;

    };



    const ellipseScaleSmall =
        `scale(${clamp(0.4, 1, (total - 2.3) * 3.5)})`;

    const ellipseScaleSmallMob =
        `scale(${clamp(0.4, 1.3, (total - 2.3) * 3.8)})`;

    const fadeOpacity1 =
        clamp(0, 1, 1 - (total - 2.78) * 10);


    // --------- Section Three -------------------

    const scaleBackground = `scale(${clamp(0.1, 1, (total - 2.85) * 3.5)})`
    const scaleBackgroundMob = `scale(${clamp(0.1, 1, (total - 2.85) * 2.2)})`

    const indexUpdate = total > 2.8 ? 1 : 0;
    const fadeOpacity2 =
        clamp(0, 1, (total - 2.88) * 10);



    return (
        <Stickyroll
            pages={2.4}
            factor={2}
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
                    <span>{Math.max(0.8, Math.min(1, ((total-1.1) *5)))}</span>
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
                    <div className="relative w-full h-full flex justify-between items-center"
                        style={{
                            opacity: `${clamp(0, 1, (1 - ((total - 1.8) * 10)))}`
                        }}
                    >
                        <div
                            className="absolute bg-bg2 w-full h-full z-0"
                        />

                        <div
                            className=" z-1 w-[50%] top-0 left-0 h-full opacity-20"
                            style={{
                                background: `url(${Shutter})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover"
                            }}
                        />
                        <div
                            className=" z-1 w-[50%] top-0 right-0 h-full scale-x-[-1] opacity-20"
                            style={{
                                background: `url(${Shutter})`,
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "cover"
                            }}
                        />

                    </div>
                    <div />
                    <section className="absolute top-0 flex flex-col justify-center items-center w-full max-xs:h-[120vh] h-full overflow-hidden
                                        z-1"
                        style={{
                            transform: sectionTwoTranslate
                        }}
                    >
                        <div className="relative flex h-[32%] flex-col justify-center items-center gap-1.5 md:gap-1.5 lg:gap-2 max-xs:pb-[14%] pb-[2%] will-change-transform"
                            style={{

                                transform:
                                    !IsMobile ? (
                                        total >= 1.1 && total < 1.5 ? `translateY(-${clamp(0, 95, ((total - 1.1) * 300))}%)` :
                                            total >= 1.1 ? `scale(${clamp(0.8, 1, (1 - ((total - 1.5) * 2)))}) translateY(-95%)` : "translateY(0%)"
                                    ) : (
                                        total >= 1.1 && total < 1.5 ? `translateY(-${clamp(15, 40, ((total - 1.1) * 140))}vh)` :
                                            total >= 1.1 ? `scale(${clamp(0.8, 1, (1 - ((total - 1.5) * 2)))}) translateY(-95%)` : "translateY(-15vh)"
                                    ),


                                opacity: `${clamp(0, 1, (1 - ((total - 1.5) * 10)))}`

                            }}
                        >

                            <h2 className="text-text4 font-medium text-center text-[1.2rem] md:text-[1.2rem] mdlg:text-[1.4rem] lg:text-[1.6rem] xl:text-[2.1rem] leading-tight
                              max-xs:text-[1.6rem] max-xxs:text-[1.2rem] max-xxxs:text-[1.05rem] capitalize"
                            >
                                <em className="text-text3">We deliver</em> <span>Full-Stack IT </span>
                                <br />
                                <span>infrastructure & digital systems</span>
                            </h2>
                            <p className="font-[Roboto_Mono] text-text3 font-medium text-[0.6rem] md:text-[0.6rem] mdlg:text-[0.7rem] lg:text-[0.8rem] xl:text-[1rem] capitalize
                            max-xs:text-[0.8rem] max-xxs:text-[0.6rem] max-xxxs:text-[0.54rem] max-xs:text-center max-xxs:px-[12%] max-xs:px-[18%] max-xs:mt-[2%] px-[20%] text-center"
                            >
                                covering strategy, deployment, operations, and long-term support — across cloud, networks, data centers, cybersecurity, and enterprise platforms.
                            </p>
                        </div>


                        <div className="absolute w-full max-xxxs:px-[4%] max-xxs:px-[6%] max-xs:px-[10%] px-[10%] xl:px-[12%] will-change-transform
                                        grid grid-cols-4 grid-rows-2 gap-y-[8%] justify-items-center items-center
                                        max-xs:grid-cols-2 max-xs:grid-rows-4"
                            style={{
                                top: total < 1.5 ? `${clamp(35, 80, (80 - ((total - 1.1) * 150)))}%` :
                                    `${clamp(-25, 35, (35 - ((total - 1.5) * 150)))}%`,
                                perspective: "1000px"
                            }}
                        >

                            {!IsMobile ?
                                //------ Desktop ---------

                                INFRASTRUCTURE_CARD_ITSOLUTIONS.map((item, i) => {
                                    return (
                                        <div
                                            className="will-change-transform"
                                            key={i}

                                            style={{
                                                transform: i === 0 ? `rotate(-${clamp(0, 26, (26 - ((total - 1.1) * 100)))}deg) translate(-${clamp(0, 10, (10 - ((total - 1.1) * 120)))}%, -${clamp(0, 30, (30 - ((total - 1.1) * 120)))}%)` :
                                                    i === 1 ? `rotate(-${clamp(0, 19, (19 - ((total - 1.1) * 70)))}deg) translate3d(0 ,-${clamp(0, 25, (25 - ((total - 1.1) * 100)))}%, -${clamp(0, 80, (80 - ((total - 1.1) * 360)))}px)` :

                                                        i === 2 ? `rotate(${clamp(0, 19, (19 - ((total - 1.1) * 70)))}deg) translate3d(0 ,-${clamp(0, 25, (25 - ((total - 1.1) * 100)))}%, -${clamp(0, 80, (80 - ((total - 1.1) * 360)))}px)` :
                                                            i === 3 && `rotate(${clamp(0, 26, (26 - ((total - 1.1) * 100)))}deg) translate(${clamp(0, 10, (10 - ((total - 1.1) * 120)))}%, -${clamp(0, 30, (30 - ((total - 1.1) * 120)))}%)`
                                            }}
                                        >
                                            <MainServiceCard
                                                Id={i}
                                                Heading={item.heading}
                                                BtnName={item.btnName}
                                                ServiceDetails={item.serviceDetails}
                                                ImgURL={item.imgURL}
                                                LinkTo={item.linkTo}

                                            />
                                        </div>
                                    )
                                })
                                :
                                //------ Mobile ---------

                                INFRASTRUCTURE_CARD_ITSOLUTIONS.map((item, i) => {
                                    return (
                                        <div
                                            className="will-change-transform"
                                            key={i}

                                            style={{
                                                transform:
                                                    i === 0 ? `rotate(-${clamp(0, 18, (18 - ((total - 1.1) * 60)))}deg) translate3d(${clamp(0, 15, (15 - ((total - 1.1) * 100)))}vw, -${clamp(0, 120, (120 - ((total - 1.1) * 400)))}vh,-${clamp(0, 45, (45 - ((total - 1.1) * 155)))}rem)` :
                                                        i === 1 ? `rotate(${clamp(0, 20, (20 - ((total - 1.1) * 70)))}deg) translate3d(-${clamp(0, 70, (70 - ((total - 1.1) * 260)))}vw, -${clamp(0, 195, (195 - ((total - 1.1) * 650)))}vh,-${clamp(0, 45, (45 - ((total - 1.1) * 150)))}rem)` :
                                                            i === 2 ? `rotate(-${clamp(0, 18, (18 - ((total - 1.1) * 60)))}deg) translate3d(0vw,-${clamp(0, 92, (92 - ((total - 1.1) * 310)))}vh,-${clamp(0, 45, (45 - ((total - 1.1) * 150)))}rem)` :
                                                                i === 3 && `rotate(${clamp(0, 20, (20 - ((total - 1.1) * 66)))}deg) translate3d(-${clamp(0, 35, (35 - ((total - 1.1) * 145)))}vw,-${clamp(0, 160, (160 - ((total - 1.1) * 542)))}vh,-${clamp(0, 65, (65 - ((total - 1.1) * 215)))}rem)`

                                            }}

                                        >
                                            <MainServiceCard
                                                Id={i}
                                                IsMobile={IsMobile}
                                                Heading={item.heading}
                                                BtnName={item.btnName}
                                                ServiceDetails={item.serviceDetails}
                                                ImgURL={item.imgURL}
                                                LinkTo={item.linkTo}

                                            />
                                        </div>
                                    )
                                })
                            }
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
                                display: total > 3.2 && "none"

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
                                className="absolute min-w-[130%] max-xs:hidden"
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

                            {/* mobile */}
                            <img
                                className="absolute min-w-[130%] xs:hidden"
                                src={EllipseTwo}
                                style={{
                                    objectFit: "contain",
                                    transform: `${transforms.ellipseScaleMob} ${getRotate("-")}`,
                                    willChange: "transform",
                                    backfaceVisibility: "hidden",
                                }}
                                alt=""
                                loading="lazy"
                            />

                            <img
                                className="absolute min-w-[200%] max-xs:hidden"
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
                            {/* mob */}
                            <img
                                className="absolute min-w-[200%] xs:hidden"
                                src={EllipseThree}
                                style={{
                                    objectFit: "contain",
                                    transform: `${ellipseScaleSmallMob} ${getRotate("+")}`,
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
                                    ByFactor={2.35}
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
                                    ByFactor={2.35}
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
                                    transform:
                                        total < 2.64 ? `scale(${clamp(0.4, 1, (total - 2.33) * 3.8)}) rotate(0deg)` :
                                            total >= 2.64 ? `scale(1) rotate(-${clamp(0, 320, Math.abs((total - 2.65) * 300))}deg)` : "scale(1) rotate(0deg)",
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
                            transform: !IsMobile ? scaleBackground : scaleBackgroundMob,

                        }}
                    >
                        <div className="w-full h-[40%] flex flex-col justify-center items-center">
                            <div
                                className="font-['Saved_By_Zero'] flex gap-[0.4em] max-xs:gap-[0.2em]
                                             max-xs:text-[9vw] text-[2.9rem] md:text-[2.9rem] mdlg:text-[3.2rem] lg:text-[3.5rem] xl:text-[4rem]"
                            >
                                <button
                                    onClick={() => { setToggle(true) }}
                                    className="font-[Poppins] font-semibold cursor-pointer duration-500 ease-in-out"
                                    style={{
                                        color: !toggle ? "#99999960" : "#fff",
                                        transform: toggle ? "scale(1)" : "scale(0.75)",
                                        // textDecoration: toggle ? "underline" : "none"
                                    }}
                                >MISSION</button>
                                <button
                                    onClick={() => { setToggle(false) }}
                                    className="font-[Poppins] font-semibold cursor-pointer duration-500 ease-in-out"
                                    style={{
                                        color: !toggle ? "#fff" : "#99999960",
                                        transform: toggle ? "scale(0.75)" : "scale(1)",
                                        // textDecoration: toggle ? "none" : "underline"
                                    }}
                                >VISION</button>

                            </div>
                            <p
                                className="text-text6 text-center capitalize font-medium font-[Roboto_Mono]
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





// transform: i === 0 ? `rotate(-${clamp(0, 26, (26 - ((total - 1.1) * 100)))}deg) translate(-${clamp(0, 10, (10 - ((total - 1.1) * 120)))}%, -${clamp(0, 30, (30 - ((total - 1.1) * 120)))}%)` :
//     i === 1 ? `rotate(-${clamp(0, 19, (19 - ((total - 1.1) * 70)))}deg) translate3d(0 ,-${clamp(0, 25, (25 - ((total - 1.1) * 100)))}%, -${clamp(0, 80, (80 - ((total - 1.1) * 360)))}px)` :

//         i === 2 ? `rotate(${clamp(0, 19, (19 - ((total - 1.1) * 70)))}deg) translate3d(0 ,-${clamp(0, 25, (25 - ((total - 1.1) * 100)))}%, -${clamp(0, 80, (80 - ((total - 1.1) * 360)))}px)` :
//             i === 3 && `rotate(${clamp(0, 26, (26 - ((total - 1.1) * 100)))}deg) translate(${clamp(0, 10, (10 - ((total - 1.1) * 120)))}%, -${clamp(0, 30, (30 - ((total - 1.1) * 120)))}%)`


// transform:
//     i === 0 ? `rotate(${clamp(0, 20, (20 - ((total - 1.1) * 65)))}deg) translate3d(-${clamp(0, 16, (16 - ((total - 1.1) * 51)))}vw,-${clamp(0, 200, (200 - ((total - 1.1) * 650)))}vh,-${clamp(0, 45, (45 - ((total - 1.1) * 150)))}rem)` :
//         i === 1 ? `rotate(-${clamp(0, 18, (18 - ((total - 1.1) * 60)))}deg) translate3d(-${clamp(0, 40, (40 - ((total - 1.1) * 129)))}vw,-${clamp(0, 110, (110 - ((total - 1.1) * 358)))}vh,-${clamp(0, 35, (35 - ((total - 1.1) * 150)))}rem)` :

//             i === 2 ? `rotate(${clamp(0, 18, (18 - ((total - 1.1) * 60)))}deg) translate3d(${clamp(0, 30, (30 - ((total - 1.1) * 120)))}vw, -${clamp(0, 140, (140 - ((total - 1.1) * 455)))}vh, -${clamp(0, 50, (50 - ((total - 1.1) * 170)))}rem)` :
//                 // i === 3 && `rotate(-18deg) translate3d(-45vw,-95vh,-35rem)`
//                 i === 3 && `rotate(-${clamp(0, 18, (18 - ((total - 1.1) * 60)))}deg) translate3d(-${clamp(0, 45, (45 - ((total - 1.1) * 145)))}vw,-${clamp(0, 95, (95 - ((total - 1.1) * 310)))}vh,-${clamp(0, 35, (35 - ((total - 1.1) * 150)))}rem)`
