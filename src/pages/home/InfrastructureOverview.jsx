import { Stickyroll } from "@stickyroll/react";
import { useState, useEffect, useMemo, useRef } from "react";
import InfrastructureCard from "../../components/InfrastructureCard";
import { CardCompOne, DraggableSlider } from "../../components";
import ConstructionHomepageCard from "../../assets/videos/home/construction-homepage-card.mp4";
import ConsultancyHomepageCard from "../../assets/videos/home/Consultancy-homepage-card.mp4";
import ITHomepageCard from "../../assets/videos/home/IT-homepage-card.mp4";

import {
  ArchitectureDesign,
  CursorGroup,
  CursorGroup1,
  SafetyHelmetCone,
  VeltrixairIcon,
  StarShape,
  SafetyProtection,
  CursorGroup2,
  CursorGroup3,
  SecurityAdvisoryAndConsulting,
  DigitalSystem,
  ConstructionSolutions,

  cardImg1,
  cardImg2,
  cardImg3,
  cardImg4,
  cardImg5,
  cardImg6,

} from "../../assets/imgs/home";


const INFRASTRUCTURE_CARD_DATA = [
  {
    heading: "Industrial Crane System & Engineering Execution",
    subHeading: "Construction Services",
    concent: " End-to-end industrial construction, structural works, and crane installation delivered with strict safety, quality and schedule control.",
    imgURL: ConstructionSolutions,
    bgColor: "E36002",
    linkTo: "/construction-services-saudi-arabia",
    videoLink: ConstructionHomepageCard
  },
  {
    heading: "Software, Integration & Cloud Services",
    subHeading: "IT Infrastructure Services",
    concent: "End-to-end IT infrastructure, cloud, cybersecurity, networking, enterprise software, and managed services — designed for performance, uptime, and scalability.",
    imgURL: SecurityAdvisoryAndConsulting,
    bgColor: "072765",
    linkTo: "/it-infrastructure-solutions",
    videoLink: ITHomepageCard
  },
  {
    heading: "Security & Compliance Consulting Services",
    subHeading: "Security Advisory Services",
    concent: "Security and compliance advisory with framework design to support risk management, regulatory alignment, and operational resilience.",
    imgURL: DigitalSystem,
    bgColor: "630071",
    linkTo: "/###",
    videoLink: ConsultancyHomepageCard
  },
]

const WHAT_SETS_US_APART_DATA = [
  { name: "Safety-first execution culture" },
  { name: "Regulatory-compliant delivery models" },
  { name: "Engineering-led site governance" },
  { name: "Zero-compromise testing and commissioning standards" },
  { name: "Long-term operational reliability focus" },
  { name: "Single-point accountability from design to handover" },

]

const DRAGGABLE_DATA = [
  {
    btn: "Construction",
    heading: "Green Technology",
    imgURL: cardImg1,
    subHeading: "Sustainable Construction Materials Are Reducing Carbon Footprint on Industrial Projects.",

  },
  {
    btn: "IT Technology",
    heading: "Green Technology Cloud Migration and Green IT",
    imgURL: cardImg2,
    subHeading: "How Virtualisation Is Cutting Energy Consumption in Enterprise Environments.",
  },
  {
    btn: "Construction",
    heading: "Steel Structure Installation",
    imgURL: cardImg3,
    subHeading: "Precision Execution and Compliance Standards on Large-Scale Infrastructure Projects.",
  },
  {
    btn: "IT Soltutions",
    heading: "Managed IT Services vs. In-House IT",
    imgURL: cardImg4,
    subHeading: "What Growing Enterprises in Saudi Arabia Need to Know.",
  },

  {
    btn: "Construction",
    heading: "Overhead Crane Installation",
    imgURL: cardImg5,
    subHeading: "Safety Validation, Load Testing, and Compliance on Industrial Facility Projects.",
  },
  {
    btn: "IT Solutions",
    heading: "IT Cybersecurity in Saudi Arabia",
    imgURL: cardImg6,
    subHeading: "What Enterprises Need to Know About NCA Compliance and Network Protection.",
  },
];


// ------CLAMP FUNCTION ---------------------------
const clamp = (min, max, val) => Math.max(min, Math.min(max, val));

// ---------- Mobile Card --------------------
const getMobileCardTransform = (total, index) => {
  if (index === 0) {
    if (total < 1.06) return "translateY(-10%) scale(1)";
    return "translateY(-110%) scale(0.8)";
  }

  if (index === 1) {
    if (total >= 1.06 && total < 1.24) return "translateY(-10%) scale(1)";
    if (total >= 1.24) return "translateY(-110%) scale(0.8)";
  }

  if (index === 2) {
    if (total >= 1.24) return "translateY(-10%) scale(1)";
  }

  return "translateY(90%) scale(0.8)";
};

// ===========================================================================================
const InfrastructureOverview = () => {
  useEffect(() => { window.scrollTo(0, 0); }, [])
  const [progress, setProgress] = useState({
    Progress: 0,
    Page: 0,
  });

  useEffect(() => {
    setProgress({ Progress: 0, Page: 0 });
  }, []);

  // --------------- window resize ---------------
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth < 655); // md breakpoint
    };

    handleResize(); // run once
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // const totalProgress = progress.Progress + progress.Page;
  const total = progress.Progress + progress.Page;


  // main section transform (at the end)
  const mainTransform = useMemo(() => {
    const translate = Math.round(clamp(0, 100, (total - 2.35) * 400));
    // const scaleValue = clamp(0.75, 1, 1 - (total - 2.35));

    // return `translateY(-${translate}%) scale(${scaleValue})`;
    return `translateY(-${translate}%)`;

  }, [total]);


  // Precompute reusable values
  const translateSection = `translateY(-${clamp(0, 150, (total - 1.4) * 800)}vh)`;

  const shutterHeight = useMemo(() => {
    if (total >= 1.67 && total < 2.08)
      return `${clamp(25, 50, 50 - (total - 1.67) * 180)}%`;
    if (total >= 2.08)
      return `${clamp(25, 52, (total - 2.08) * 480)}%`;


    return "50%";
  }, [total]);

  const shutterHeightMobile = useMemo(() => {
    if (total >= 1.67 && total < 2.08)
      return `${clamp(30, 50, 50 - (total - 1.67) * 180)}%`;
    if (total >= 2.08)
      return `${clamp(30, 52, (total - 2.08) * 480)}%`;


    return "50%";
  }, [total]);

  const lineClip = useMemo(() => {
    if (total >= 1 && total < 1.67)
      return `rect(0px, 100vw, 2.5px, ${clamp(
        0,
        100,
        100 - (total - 1.35) * 500
      )}vw)`;

    if (total >= 2.1844)
      return `rect(0px, 100vw, 2.5px, ${clamp(
        0,
        100,
        0,
      )}vw)`;

    return "rect(0px, 100vw, 2.5px, 100vw)";
  }, [progress.Page, total]);

  const textClip = useMemo(() => {
    if (progress.Page < 1) return "rect(0px,100vw,0rem,0px)";
    return `rect(0px,100vw, ${(total - 1.57) * 8}em,0px)`;
  }, [progress.Page, total]);

  const textTranslate = useMemo(() => {
    if (total < 1.66)
      return `translateY(-${clamp(0, 3.2, ((total - 1.57) * 47))}vh)`

    if (total >= 1.66 && total < 2.14)
      return `translateY(-${clamp(0, 40, ((total - 1.65) * 280))}vh)`

    if (total >= 2.14)
      return `translateY(-${clamp(3, 40, (40 - (total - 2.14) * 500))}vh)`


    return "translateY(3%)";
  }, [progress.Page, total]);

  // Horizontal container movement
  const sectionTranslateX = `translateX(-${clamp(0, 200, (total - 1.87) * 900)}%)`;

  const transforms = useMemo(() => {
    return {
      0: `translateY(-${clamp(0, 240, (total - 1.04) * 800)}%) scale(1)`,

      1: `translateY(-${clamp(0, 216, (total - 1.08) * 800)}%) 
        scale(${clamp(0.8, 1, (total - 1.08) * 14)})`,

      2: `translateY(-${clamp(0, 90, (total - 1.24) * 800)}%) 
        scale(${clamp(0.8, 1, (total - 1.24) * 14)})`,
    };
  }, [total]);

  const stylesConfig = {
    0: { zIndex: 2 },
    1: { zIndex: 1 },
    2: { zIndex: 0 },
  };

  // ===== Section 1 =====
  //-------------- inner section ------------------
  const animations = useMemo(() => {

    const t1 = total - 1.67;
    const t2 = total - 2;

    return {
      sec1Image: total < 1.67
        ? "translate(-25%,40%)"
        : `translate(-${clamp(0, 25, 25 - t1 * 175)}%, ${clamp(0, 40, 40 - t1 * 280)}%)`,

      sec1Title: total < 1.67
        ? "translate(50%,100%)"
        : `translate(${clamp(0, 50, 50 - t1 * 300)}%, ${clamp(0, 100, 100 - t1 * 600)}%)`,

      // sec3
      safetyScale:
        `scale(${clamp(1, 2, 2 - t2 * 30)}) translateY(-${clamp(0, 50, 50 - t2 * 900)}%)`

    };

  }, [total]);


  // ----------------------------------------------------------------------------

  // ===== Section 2 =====
  const sec2TitleTransform = animations.sec1Title; // same logic reuse

  const sec2InnerTranslate = `translateX(${clamp(0, 10, (total - 1.95) * 400)}%)`;

  const engineeringTranslate = `translateY(-${clamp(0, 40, (total - 1.87) * 600)}%)`;

  const drivenTranslate = `translateX(-${clamp(0, 80, (total - 2) * 1700)}%)`;

  const starRotate = `rotate(${clamp(0, 80, 80 - (total - 1.87) * 700)}deg)`;

  const cursorTransform = useMemo(() => {
    if (total < 2) {
      return `translate(${clamp(0, 50, 50 - (total - 1.94) * 1800)}%, 
                      ${clamp(0, 120, 120 - (total - 1.94) * 4000)}%)`;
    }

    return `translate(-${clamp(0, 80, (total - 2) * 1700)}%, 
                     ${clamp(0, 100, (total - 2) * 2000)}%)`;
  }, [total]);

  const veltrixTransform = `scale(${clamp(1, 2.8, (total - 2) * 28)}) 
     translateX(-${clamp(0, 20, (total - 2) * 1700)}%)`;
  // ----------------------------------------------------------------------------

  // ===== Section 3 =====

  const starSmallRotate = `rotate(${clamp(0, 20, 20 - (total - 2.05) * 500)}deg)`;

  const cursor2Transform = `translate(${clamp(0, 80, 80 - (total - 2.06) * 2800)}%, 
               -${clamp(0, 80, 80 - (total - 2.06) * 2400)}%)`;

  // --------------Section 4---------------

  const sec4BaseTranslate = useMemo(() => {
    return Math.round(
      clamp(0, 100, 100 - (total - 2.2) * 860)
    );
  }, [total]);
  //  if transfrom is "-" it will true
  const getSec4Translate = (reverse = false) => {
    return `translateY(${reverse ? "-" : ""}${sec4BaseTranslate}%)`;
  };


  // --------Bottom Blur Transform----------------

  const bluredCircleTwoTransform = useMemo(() => {
    if (total < 2.2) {
      const translate = clamp(0, 100, (total - 1.67) * 1000);
      const scaleValue = clamp(0, 1, 1 - (total - 1.67) * 10);

      return `translateY(${translate}%) scale(${scaleValue})`;
    }

    if (total >= 2.2 && total < 2.35) {
      const translate = clamp(0, 30, (total - 2.2) * 1200);
      const scaleValue = clamp(0, 1, (total - 2.2) * 40);

      return `translateY(-${translate}%) scale(${scaleValue})`;
    }

    if (total >= 2.35) {
      const translate = clamp(0, 30, (total - 2.35) * 1000);
      const scaleValue = clamp(0, 1, 1 - (total - 2.35) * 20);

      return `translateY(${translate}%) scale(${scaleValue})`;
    }

    return "";
  }, [total]);

  // ---------------------Bottom Part---------------------
  const bottomSectionTransforms = useMemo(() => {
    const value1 = Math.round(
      clamp(0, 100, (total - 2.35) * 400)
    );

    // blured circle three transform
    const value2 = Math.round(
      clamp(0, 100, 100 - (total - 2.45) * 700)
    );

    return {
      first: `translateY(-${value1}%)`,
      second: `translateY(-${value2}%)`
    };
  }, [total]);


  return (
    <Stickyroll
      pages={1.6}
      factor={5}
      className="bg-bg1"
      onProgress={(prog, page, _) => {
        setProgress({
          Progress: prog,
          Page: page,
        });
      }}
    >
      <div className="infrastructure-overview-main relative w-full top-0">
        {/* <p className="fixed bg-[#00000030] top-0 flex flex-col text-yellow-800 z-5">
          <span>{progress.Progress}</span>
          <span>PAGE: {progress.Page}</span>
          <span>Total: {total}</span>
          <span>{clamp(0, 100, (100- (total * 100)))}</span>

        </p> */}

        {/* Main Section */}
        <div
          className="relative top-0 w-full h-[485px] lg:h-[700px] xl:h-[920px] 
             bg-bg1 z-1 flex flex-col justify-center items-center 
             overflow-hidden origin-top will-change-transform
             max-xs:h-screen"
          style={{
            transform: mainTransform,
          }}
        >
          {/* ----------------------------------------------------- */}

          <section
            className="
            absolute w-full h-full z-3 flex flex-col justify-end items-center gap-5 md:gap-5 lg:gap-10
            max-xs:justify-baseline"
            style={{
              transform: translateSection

            }}
          >

            <div className="flex flex-col justify-center items-center gap-1.5 md:gap-1.5 lg:gap-2">
              <h4
                className="font-['Saved_By_Zero'] text-text2 text-[1rem] md:text-[1rem] lg:text-[1.4rem] xl:text-[1.8rem]
                            max-xs:text-[3.4vw]"
              >
                ENGINEERING
              </h4>
              <h2 className="text-white text-center font-bold text-[1.4rem] md:text-[1.4rem] lg:text-[1.9rem] xl:text-[2.1rem] leading-tight [text-shadow:0.06em_0.06em_2px_rgba(0,0,0,08)]
                              max-xs:text-[5.2vw]"
              >
                <span>Digital Systems</span>
                <br />
                <span>Physical Infrastructure</span>
              </h2>
              <p className="text-text2 text-[0.7rem] md:text-[0.7rem] lg:text-[0.9rem] xl:text-[1rem] capitalize
                            max-xs:text-[2.4vw] max-xs:text-center px-[16%] text-center"
              >
                From enterprise IT infrastructure to industrial construction
                execution
              </p>
            </div>
            {/* ------------Cards Desktop------- */}
            <div className="flex justify-center items-center gap-[5%] max-xs:hidden"
            >
              {INFRASTRUCTURE_CARD_DATA.map((item, i) => {
                return <InfrastructureCard
                  key={i}
                  Id={i}
                  Heading={item.heading}
                  SubHeading={item.subHeading}
                  Concent={item.concent}
                  ImgURL={item.imgURL}
                  BGColor={item.bgColor}
                  LinkTo={item.linkTo}
                  VideoUrl={item.videoLink}
                />;
              })}
            </div>

            {/* ------------Cards mobile------- */}

            <div className="relative flex flex-col gap-[5%] justify-center items-center w-full h-[70%] sm:hidden overflow-hidden">
              {INFRASTRUCTURE_CARD_DATA.map((item, i) => {
                return (
                  <div key={i} className="card absolute cubic-bezier(.75,-0.01,.27,1) duration-1000"
                    style={{


                      // top: stylesConfig[i]?.top || "",
                      // transform: getTransform(total, i),
                      zIndex: stylesConfig[i]?.zIndex ?? "",

                      transform: getMobileCardTransform(total, i)

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
              {/* max-xxs:right-[3%] max-xs:right-[7.5%] */}
              {/* ---------- nav dots ------------- */}
              <div className="absolute left-[85%] top-[20%]
               w-[10%] h-[25%] flex flex-col justify-evenly items-center">
                {
                  INFRASTRUCTURE_CARD_DATA.map((_, i) => {
                    return (
                      <div
                        key={i}
                        className="max-xxs:w-[10px] max-xxs:h-[10px] max-xs:w-[15px] max-xs:h-[15px] bg-bg3 rounded-full"
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
          {/* ----------------------------------------------------- */}
          <section className="absolute flex flex-col w-full h-full">
            {/* Top shutter */}
            <div
              className={`relative top-0 w-full z-1 bg-bg1 flex justify-center`}
              style={{
                height: isDesktop ? shutterHeightMobile : shutterHeight
              }}
            >
              {/* blured circle one */}
              <div className="absolute rounded-[100%] w-[28%] max-xs:w-[60%] top-[-30%] aspect-3/1 bg-bg2 z-3 blur-[80px] lg:blur-[90px] xl:blur-[100px] duration-150 ease-in-out"

                style={{
                  transform: `translateY(-${clamp(0, 100, (100 - (total * 100)))}%)`
                }}
              />

              {/* sec 4 */}
              <div className="absolute bottom-[4%] left-0 w-full h-full flex justify-center items-center text-white"
                style={{
                  transform: getSec4Translate(true)
                }}
              >
                <img
                  className="w-[20%] max-xs:w-[45%] md:w-[20%] absolute"
                  src={VeltrixairIcon}
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            {/* ------------- */}
            {/* horizontal line */}
            <div
              className="absolute w-full h-[1.5px] bg-text2 z-2 top-[51%] lg:top-[50.7%] xl:top-[50%] right-0"
              style={{
                clip: lineClip
              }}
            />
            <div className="absolute w-full h-[24px] flex flex-col justify-center items-center top-[47%] md:top-[47%] lg:top-[48.7%] z-3 text-[2.5rem] md:text-[2.5rem] max-xs:text-[6vw] leading-6
                             max-xs:top-[49.5%]"
            >
              <p
                className="absolute font-['Saved_By_Zero'] text-text1 z-3 top-[1.6vh]"
                style={{
                  clip: textClip,
                  transform: textTranslate,
                }}
              >
                WHAT SETS US APART
              </p>
              {/* Mirrored */}

              <p
                className="absolute font-['Saved_By_Zero'] text-text1 z-3 opacity-[0.2] top-[47%] md:top-[47%] lg:top-[-1.6vh] transform -scale-y-100 blur-[1px]
                         max-xxs:top-[-80%] max-xs:top-[-49.5%]"
                style={{
                  clip: textClip,
                  transform: textTranslate,
                  opacity: `${clamp(0, 0.2, (0.2 - ((total - 2) * 5)))}`
                }}
              >
                WHAT SETS US APART
              </p>
            </div>

            {/* Bottom shutter */}
            <div
              className="absolute bottom-0 w-full bg-bg1 z-1 flex justify-center"
              style={{
                height: isDesktop ? shutterHeightMobile : shutterHeight

              }}
            >
              {/* blured circle two*/}
              <div
                className="absolute rounded-[100%] w-[28%] bottom-[-35%] max-xs:w-[60%] aspect-3/1 bg-bg2 z-3 blur-[80px] lg:blur-[90px] xl:blur-[100px]"

                style={{
                  transform: bluredCircleTwoTransform,
                }}
              />

              {/* sec 4 */}
              <div className="absolute top-[4%] left-0 w-full h-full grid grid-cols-3 max-xs:grid-cols-2 md:grid-cols-3 
              justify-items-center items-center z-5 text-white  px-28 py-6  
              max-xs:px-[1vw] max-xs:py-15 lg:px-38 lg:py-8 xl:px-45 xl:py-12"
                style={{
                  transform: getSec4Translate(false)
                }}
              >
                {WHAT_SETS_US_APART_DATA.map((item, i) => {
                  return <CardCompOne key={i} Name={item.name} />;
                })}

              </div>

            </div>
            {/* ------------- */}

          </section>

          {/* Inner section */}
          <section className="relative w-full h-full bg-bg2 flex justify-start items-center">
            <div className="absolute w-full h-full flex justify-start items-center"
              style={{
                transform: sectionTranslateX
              }}
            >
              {/* sec 1 */}
              <div className="relative min-w-full h-full flex justify-start items-center">
                <img src={ArchitectureDesign} alt="" loading="lazy"
                  className="absolute max-xs:w-[60vw] w-100 lg:w-130 xl:w-150 h-full left-[-12%] top-[12%] md:left-[-12%] md:top-[12%]
                              max-xs:left-[-24%] max-xs:top-[14%]  
                  "
                  style={{
                    objectFit: 'contain',
                    transform: animations.sec1Image
                  }}
                />
                <h3 className="absolute right-0 flex justify-end text-[5rem] md:text-[5rem] lg:text-[7.5rem] xl:text-[9rem] font-bold sm:w-[68%]
                                xs:w-[78%] max-xs:text-[9.5vw]
                "
                  style={{
                    transform: animations.sec1Title
                  }}
                >
                  <span
                    className="flex relative"
                  >
                    EXECUTION
                    <img
                      className="w-[30%] absolute left-[85%] bottom-[54%] rotate-19"
                      src={SafetyHelmetCone}
                      alt=""
                      loading="lazy"
                    />
                  </span>
                  <span className="flex">-LED.</span>

                </h3>
              </div>

              {/* sec 2 */}
              <div className="relative min-w-full h-full flex justify-start items-center">
                <h3
                  className="relative w-full h-full text-[5rem] md:text-[5rem] lg:text-[7.5rem] xl:text-[9rem] top-[40%] md:top-[40%] font-bold
                              max-xs:text-[11vw] max-xs:top-[46.5%]"
                  style={{
                    transform: sec2TitleTransform
                  }}
                >
                  <span className="w-full h-full absolute"
                    style={{
                      transform: sec2InnerTranslate
                    }}
                  >

                    <span
                      className="absolute bg-[linear-gradient(145deg,rgba(7,39,101,1)100%,rgba(30,30,30,1)100%)] text-text1 py-1 px-8 xl:py-2 xl:px-10 rounded-xl md:rounded-xl 
                                  max-xs:px-4 max-xs:rounded-sm"
                      style={{
                        transform: engineeringTranslate
                      }}
                    >ENGINEERING

                      <span
                        className="absolute top-[85%] left-[62%] xs:left-[62%] max-xs:left-[52%] font-normal text-text3"
                        style={{
                          transform: drivenTranslate
                        }}
                      >DRIVEN</span>
                    </span>
                  </span>
                  <img
                    className="w-[20%] md:w-[20%] absolute left-[-10%] top-[-35%] md:left-[-10%] md:top-[-35%]
                              max-xs:w-[30%] max-xs:left-[-10%] max-xs:top-[-20%]"
                    src={StarShape}
                    style={{
                      transform: starRotate
                    }}
                    alt=""
                    loading="lazy"
                  />
                  <img
                    className="w-[16%] absolute left-[66%] top-[0%] md:left-[66%] md:top-[0%] max-sm:hidden"
                    src={CursorGroup}
                    style={{
                      transform: cursorTransform
                    }}
                    alt=""
                    loading="lazy"
                  />
                  <img
                    className="w-[16%] absolute sm:hidden max-xs:left-[35%] max-xs:top-[9%]"
                    src={CursorGroup1}
                    style={{
                      transform: cursorTransform
                    }}
                    alt=""
                    loading="lazy"
                  />
                  <img
                    className="w-[18%] md:w-[18%] absolute left-[80%] top-[-5%] md:left-[80%] md:top-[-5%]
                              max-xs:left-[150%] max-xs:top-[-8%] max-xs:w-[10%]
                    "
                    src={VeltrixairIcon}
                    style={{
                      transform: veltrixTransform
                    }}
                    alt=""
                    loading="lazy"
                  />
                </h3>
              </div>

              {/* sec 3 */}
              <div className="relative min-w-full h-full flex justify-center items-center">
                <h3
                  className="absolute flex justify-center text-[5rem] md:text-[5rem] lg:text-[7.5rem] xl:text-[9rem] font-bold w-[76%] md:w-[76%]
                            max-xs:text-[9.2vw] max-xs:w-[90%]"
                >
                  <span className="flex w-screen">
                    OUTCOME-FOCUSED.
                    <img
                      className="w-[8.5%] absolute left-[-1%] top-[8%]"
                      src={SafetyProtection}
                      style={{
                        transform: animations.safetyScale
                      }}
                      alt=""
                      loading="lazy"
                    />
                  </span>
                  <img
                    className="w-[52%] absolute left-[84%] top-[70%] max-xs:left-[70%] max-xs:top- md:fullleft-[84%] md:top-[70%]"
                    src={StarShape}
                    style={{
                      transform: starSmallRotate
                    }}
                    alt=""
                    loading="lazy"
                  />
                  <img
                    className="w-[16%] absolute left-[78.5%] top-[-15%] max-sm:hidden"
                    src={CursorGroup2}
                    style={{
                      transform: cursor2Transform
                    }}
                    alt=""
                    loading="lazy"
                  />
                  <img
                    className="w-[26%] absolute left-[75%] top-[-38%] sm:hidden"
                    src={CursorGroup3}
                    style={{
                      transform: cursor2Transform
                    }}
                    alt=""
                    loading="lazy"
                  />
                </h3>
              </div>
            </div>
          </section>
          {/* ------------------------------------------------------ */}
        </div>

        {/* Bottom Section */}
        <section
          className="absolute w-full h-full bg-bg1 flex flex-col gap-[5%] justify-center items-center overflow-hidden"
          style={{
            transform: bottomSectionTransforms.first,
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transformStyle: "preserve-3d"

          }}
        >
          {/* blured circle three */}
          <div
            className="absolute rounded-[100%] w-[28%] top-[-25%] aspect-2/1 bg-bg2 z-3 blur-[60px] lg:blur-[80px] xl:blur-[100px]"
            style={{
              transform: bottomSectionTransforms.second
            }}

          />
          <DraggableSlider
            DATA={DRAGGABLE_DATA}
            Content="Recent work across IT infrastructure, industrial construction, crane installation, and security consulting, highlighting ongoing projects, execution progress, and industry developments."
          />


        </section>


      </div >
    </Stickyroll >
  );
};

export default InfrastructureOverview;
