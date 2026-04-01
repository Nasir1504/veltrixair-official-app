import { SOWCard, ViewportReveal } from "../../../components";
import VideoFile from "../../../assets/videos/nature-background-videos.mp4";
import { DigitalSystem } from "../../../assets/imgs/home";

const CARD_DATA = [
    {
        heading: "Site inspection & structural assessment",
        subHeading: "Industrial clients trust us for engineering precision, disciplined execution, and uncompromising.",
        content: "Industrial clients rely on us for our unwavering commitment to engineering precision, disciplined execution, and uncompromising standards. Every project we undertake is guided by meticulous planning, deep technical expertise, and a strong focus on quality, ensuring that we consistently deliver reliable, efficient, and high-performance solutions.",
        videoURL: VideoFile,
        poster: DigitalSystem

    },
    {
        heading: "Load calculations & engineering validation",
        subHeading: "Industrial clients trust us for engineering precision, disciplined execution, and uncompromising.",
        content: "Industrial clients rely on us for our unwavering commitment to engineering precision, disciplined execution, and uncompromising standards. Every project we undertake is guided by meticulous planning, deep technical expertise, and a strong focus on quality, ensuring that we consistently deliver reliable, efficient, and high-performance solutions.",
        videoURL: VideoFile,
        poster: DigitalSystem
    },
    {
        heading: "Runway beam & rail installation",
        subHeading: "Industrial clients trust us for engineering precision, disciplined execution, and uncompromising.",
        content: "Industrial clients rely on us for our unwavering commitment to engineering precision, disciplined execution, and uncompromising standards. Every project we undertake is guided by meticulous planning, deep technical expertise, and a strong focus on quality, ensuring that we consistently deliver reliable, efficient, and high-performance solutions.",
        videoURL: VideoFile,
        poster: DigitalSystem
    },
    {
        heading: "Mechanical assembly of crane systems",
        subHeading: "Industrial clients trust us for engineering precision, disciplined execution, and uncompromising.",
        content: "Industrial clients rely on us for our unwavering commitment to engineering precision, disciplined execution, and uncompromising standards. Every project we undertake is guided by meticulous planning, deep technical expertise, and a strong focus on quality, ensuring that we consistently deliver reliable, efficient, and high-performance solutions.",
        videoURL: VideoFile,
        poster: DigitalSystem
    },
    {
        heading: "Hoist and trolley installation",
        subHeading: "Industrial clients trust us for engineering precision, disciplined execution, and uncompromising.",
        content: "Industrial clients rely on us for our unwavering commitment to engineering precision, disciplined execution, and uncompromising standards. Every project we undertake is guided by meticulous planning, deep technical expertise, and a strong focus on quality, ensuring that we consistently deliver reliable, efficient, and high-performance solutions.",
        videoURL: VideoFile,
        poster: DigitalSystem
    },
    {
        heading: "Safety systems & limit switches",
        subHeading: "Industrial clients trust us for engineering precision, disciplined execution, and uncompromising.",
        content: "Industrial clients rely on us for our unwavering commitment to engineering precision, disciplined execution, and uncompromising standards. Every project we undertake is guided by meticulous planning, deep technical expertise, and a strong focus on quality, ensuring that we consistently deliver reliable, efficient, and high-performance solutions.",
        videoURL: VideoFile,
        poster: DigitalSystem
    },
    {
        heading: "Automation & PLC integration (if required)",
        subHeading: "Industrial clients trust us for engineering precision, disciplined execution, and uncompromising.",
        content: "Industrial clients rely on us for our unwavering commitment to engineering precision, disciplined execution, and uncompromising standards. Every project we undertake is guided by meticulous planning, deep technical expertise, and a strong focus on quality, ensuring that we consistently deliver reliable, efficient, and high-performance solutions.",
        videoURL: VideoFile,
        poster: DigitalSystem
    },
    {
        heading: "Load testing & certification",
        subHeading: "Industrial clients trust us for engineering precision, disciplined execution, and uncompromising.",
        content: "Industrial clients rely on us for our unwavering commitment to engineering precision, disciplined execution, and uncompromising standards. Every project we undertake is guided by meticulous planning, deep technical expertise, and a strong focus on quality, ensuring that we consistently deliver reliable, efficient, and high-performance solutions.",
        videoURL: VideoFile,
        poster: DigitalSystem
    },
    {
        heading: "Operator training & documentation",
        subHeading: "Industrial clients trust us for engineering precision, disciplined execution, and uncompromising.",
        content: "Industrial clients rely on us for our unwavering commitment to engineering precision, disciplined execution, and uncompromising standards. Every project we undertake is guided by meticulous planning, deep technical expertise, and a strong focus on quality, ensuring that we consistently deliver reliable, efficient, and high-performance solutions.",
        videoURL: VideoFile,
        poster: DigitalSystem
    },
    {
        heading: "Retrofit & upgrade services",
        subHeading: "Industrial clients trust us for engineering precision, disciplined execution, and uncompromising.",
        content: "Industrial clients rely on us for our unwavering commitment to engineering precision, disciplined execution, and uncompromising standards. Every project we undertake is guided by meticulous planning, deep technical expertise, and a strong focus on quality, ensuring that we consistently deliver reliable, efficient, and high-performance solutions.",
        videoURL: VideoFile,
        poster: DigitalSystem
    },

]

const FeatureSection = () => {

    return (
        <div
            className="relative top-0 w-full h-auto
                            bg-bg1 z-1 flex flex-col justify-start items-center 
                            overflow-hidden origin-top will-change-transform
                            "
        >
            <ViewportReveal>
                <div
                    className="absolute max-xxs:top-[-6%] max-xs:top-[-10%] top-[-15%] rounded-[100%] max-xs:w-[45%] w-[28%] aspect-2/1 bg-bg2 z-3 blur-[60px] lg:blur-[80px] xl:blur-[100px] duration-200 ease-in-out"

                />
            </ViewportReveal>
            <div className="w-full max-xs:h-[290px] md:h-[280px] lg:h-[380px] h-[480px] flex flex-col shrink-0 justify-center items-center gap-[5%]">
                <div className="flex flex-col justify-center items-center font-mono
                                text-[1.4rem] max-xs:text-[4.5vw] md:text-[1.4rem] lg:text-[1.8rem] xl:text-[2rem]">

                    <h3
                        className="relative text-text1 leading-[1.2em] text-center capitalize"
                    >
                        Engineering Lifting Solutions<br />
                        for Industrial Scale

                    </h3>
                </div>
                <p
                    className="text-text2 text-center w-[38%] max-xs:w-[80%] max-xs:text-[2.5vw]
                                text-[0.8rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem]"
                >
                    Overhead crane systems demand precision engineering and strict compliance. Our team delivers complete installation solutions — from structural verification to final commissioning — ensuring seamless integration with your facility operations.
                </p>


            </div>
            <div className="relative w-full max-xs:min-h-screen h-[485px] md:h-[485px] lg:h-[700px] xl:h-[920px] flex justify-center items-center 
                                    overflow-x-clip overscroll-contain"
            >
                <div className="absolute max-xs:w-[28%] w-[16%] h-[4%] top-[-4%] rounded-tl-[1.4em] rounded-tr-[1.4em] font-medium bg-bg6 text-text1 flex justify-center items-center
                                text-[1rem] max-xxs:text-[0.6rem] max-xs:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem]"
                >Scope Of Work</div>
               <div
                    data-lenis-prevent
                    className="relative w-full h-full flex flex-col justify-start items-center gap-[5%] overflow-y-auto scroll-smooth pt-[1%] pb-[4%] cursor-pointer z-1"
                >
                    {
                        CARD_DATA.map((item, i) => {
                            return (
                                <SOWCard
                                    key={i}
                                    Id={i}
                                    Heading={item.heading}
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
        </div>
    );
}

export default FeatureSection;
