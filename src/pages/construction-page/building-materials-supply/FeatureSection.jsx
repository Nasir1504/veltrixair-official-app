import { SOWCard, ViewportReveal } from "../../../components";
import VideoFile from "../../../assets/videos/nature-background-videos.mp4";
import { DigitalSystem } from "../../../assets/imgs/home";

const CARD_DATA = [
    {
        heading: "Structural steel & metal components",
        subHeading: "Certified steel sections, plates, fasteners and metal components for industrial structures and fabrication requirements.",
        content: "Structural steel and metal components are supplied to meet fabrication and load-bearing requirements across construction projects. This includes steel sections, plates, fasteners, and custom metal elements aligned with engineering specifications. All materials are sourced with certification and quality verification to ensure strength, durability, and compliance with structural standards.",
        videoURL: VideoFile,
        poster: DigitalSystem

    },
    {
        // • 
        heading: "Cement & concrete materials",
        subHeading: "Cement & Concrete Materials Certified quality cement, ready-mix inputs, aggregates, and concrete materials for structural and civil construction needs.",
        content: "High-quality cement, aggregates, and ready-mix inputs tailored for structural and civil works. We ensure consistent material performance and controlled sourcing to maintain the structural integrity and long-term reliability of every pour.",
        videoURL: VideoFile,
        poster: DigitalSystem
    },
    {
        heading: "Pipes & fittings",
        subHeading: "Industrial-grade pipes, valves, fittings, and accessories for MEP, utility, and infrastructure applications.",
        content: "Industrial-grade pipes, valves, and accessories for MEP and infrastructure systems. Selected for durability and regulatory compliance, our components ensure seamless integration across water supply, drainage, and utility networks in any construction environment.",
        videoURL: VideoFile,
        poster: DigitalSystem
    },
    {
        heading: "Electrical & Cabling Materials",
        subHeading: "Reliable electrical cables, conduits, panels, and accessories for power distribution and building electrical systems.",
        content: "Reliable cables, conduits, and panels designed for efficient power distribution. All materials are sourced to meet specific load requirements and safety standards, ensuring long-term operational performance and streamlined installation for building electrical systems.",
        videoURL: VideoFile,
        poster: DigitalSystem
    },
    {
        heading: "Electrical & MEP components",
        subHeading: "Industrial clients trust us for engineering precision, disciplined execution, and uncompromising.",
        content: "Industrial clients rely on us for our unwavering commitment to engineering precision, disciplined execution, and uncompromising standards. Every project we undertake is guided by meticulous planning, deep technical expertise, and a strong focus on quality, ensuring that we consistently deliver reliable, efficient, and high-performance solutions.",
        videoURL: VideoFile,
        poster: DigitalSystem
    },
    {
        heading: "HVAC & Mechanical Components",
        subHeading: "Ducting materials, insulation, grilles, and mechanical components supporting heating, ventilation, and air conditioning systems.",
        content: "Premium ducting, insulation, and grilles designed for optimized climate control. Our components integrate seamlessly with mechanical systems to enhance energy efficiency, ensure durability, and meet the specific ventilation requirements of modern industrial and commercial builds.",
        videoURL: VideoFile,
        poster: DigitalSystem
    },
    {
        heading: "Finishing & Surface Materials",
        subHeading: "Tiles, stone, wood, laminates, and surface finishes for durable and aesthetically refined interior and exterior applications.",
        content: "Durable tiles, stone, wood, and laminates for refined interior and exterior finishes. We provide high-performance materials aligned with your design vision, ensuring consistent quality and an aesthetically superior result for every surface application.",
        videoURL: VideoFile,
        poster: DigitalSystem
    },
     {
        heading: "Construction Chemicals & Waterproofing Solutions",
        subHeading: "Admixtures, sealants, grouts, and waterproofing systems that enhance durability, strength, and protection of structures.",
        content: "Advanced admixtures, sealants, and waterproofing systems that fortify structural resilience. These solutions enhance load strength and provide essential protection against environmental conditions, ensuring the long-term integrity and moisture resistance of the building.",
        videoURL: VideoFile,
        poster: DigitalSystem
    },
     {
        heading: "General Building & Site Materials",
        subHeading: "Bricks, blocks, sand, and essential site materials supporting day-to-day construction and infrastructure works.",
        content: "Essential bricks, blocks, sand, and site consumables required for daily civil works. We manage reliable supply chains to match project demand, ensuring site continuity and consistent quality across all fundamental construction activities.",
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
                        className="relative text-text1 leading-[1.2em] text-center capitalize font-bold"
                    >
                        Supplying the Materials<br />
                        Behind Every Build

                    </h3>
                </div>
                <p
                    className="text-text2 text-center w-[38%] max-xs:w-[80%] max-xs:text-[2.5vw]
                                text-[0.8rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem]"
                >
                    Overhead crane systems demand precision engineering and strict compliance. Our team delivers complete installation solutions — from structural verification to final commissioning — ensuring seamless integration with your facility operations.
                </p>


            </div>
            <div 
            className="relative w-full h-auto flex justify-center items-center
                                    "
            >
                <div className="absolute max-xs:w-[28%] w-[16%] h-[3%] top-[-1.5%] rounded-tl-[1.4em] rounded-tr-[1.4em] font-medium bg-bg6 text-text1 flex justify-center items-center
                                text-[1rem] max-xxs:text-[0.6rem] max-xs:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem]"
                >Scope Of Work</div>
                <div
                    className="relative w-full h-full flex flex-col justify-start items-center gap-[25px] overflow-y-scroll overscroll-contain scroll-smooth pt-[1%] pb-[4%] cursor-pointer z-1"
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
