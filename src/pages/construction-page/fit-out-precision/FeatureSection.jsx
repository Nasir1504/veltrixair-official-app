import { SOWCard, ViewportReveal } from "../../../components";
import VideoFile from "../../../assets/videos/nature-background-videos.mp4";
import { DigitalSystem } from "../../../assets/imgs/home";
import {
    V1,
    V2,
    V3,
    V4,
    V5,
    V6,
    V7,
    V8,
    V9,
    V10,
    V11,
    V12,
} from "../../../assets/imgs/construction/fit-out-precision";

const CARD_DATA = [
    {
        heading: "Site mobilization & planning",
        subHeading: "Structured mobilisation, site preparation, and detailed planning to ensure fit-out projects start safely, efficiently, and on schedule.",
        content: "Before construction begins, we establish a clear operational framework for the project. Site mobilisation includes safety setup, logistics coordination, workforce planning, and equipment deployment. Detailed project planning aligns timelines, material schedules, and compliance requirements to minimise disruption and ensure smooth execution. This structured approach allows interior fit-out work to progress efficiently, safely, and with predictable outcomes.",
        videoURL: V1,
        poster: DigitalSystem

    },
    {
        heading: "Demolition & Interior Strip-Out Works",
        subHeading: "Controlled demolition and strip-out works remove existing interiors safely, preparing spaces for efficient and compliant interior fit-out construction.",
        content: "Our demolition and strip-out works carefully remove non-structural elements such as partitions, ceilings, flooring, and fixtures. The process is planned to protect structural integrity, maintain safety standards and minimise disruption to surrounding operations. By clearing and preparing the space methodically, we create the ideal foundation for efficient interior fit-out installation and construction activities.",
        videoURL: V2,
        poster: DigitalSystem
    },
    {
        heading: "Civil & structural modifications",
        subHeading: "Targeted civil and structural modifications adapt existing spaces to support new layouts, infrastructure systems, and interior fit-out requirements.",
        content: "Civil and structural modifications ensure the facility can support new layouts, equipment installations, and operational requirements. This may include reinforcement works, floor preparation, partition construction, and structural adjustments aligned with engineering specifications. Every modification is executed with precision to maintain safety, structural stability, and compatibility with the planned interior fit-out design.",
        videoURL: V3,
        poster: DigitalSystem
    },
    {
        heading: "Partitions & Drywall Systems",
        subHeading: "Engineered partition systems create defined layouts with acoustic performance, fire resistance, and spatial flexibility.",
        content: "Partition systems are installed to define spaces while meeting performance and compliance standards. This includes gypsum partitions, fire-rated and acoustic walls, shaft walls, and glass systems. Each installation is aligned with design intent and coordinated with building services to ensure durability, functionality, and efficient space utilisation.",
        videoURL: V4,
        poster: DigitalSystem
    },

    {
        heading: "Ceiling Systems & Installation",
        subHeading: "Integrated ceiling systems enhance acoustics, service coordination, and visual consistency across interior environments.",
        content: "Ceiling works include gypsum installations, suspended grid systems, acoustic solutions, and feature elements. Access provisions are incorporated for maintenance and service integration. Each system is carefully coordinated with lighting, HVAC, and safety infrastructure to ensure seamless functionality and a refined finish.",
        videoURL: V5,
        poster: DigitalSystem
    },
    {
        heading: "Flooring Systems & Surface Finishes",
        subHeading: "High-performance flooring solutions are installed to meet durability, safety, and design requirements.",
        content: "A wide range of flooring systems is delivered, including tile, vinyl, carpet, timber, raised access flooring, and resin finishes. Each solution is selected based on operational demands and installed with proper surface preparation and levelling. The result is a durable, safe, and visually consistent foundation.",
        videoURL: V6,
        poster: DigitalSystem
    },
    {
        heading: "Joinery, Carpentry & Built-In Works",
        subHeading: "Custom joinery and carpentry deliver precise, functional built-in elements aligned with design and usage requirements.",
        content: "Joinery works include cabinetry, doors, wall panelling, counters, and integrated furniture. Each component is fabricated and installed to exact specifications, ensuring quality, durability, and alignment with the overall design scheme. These elements enhance usability while maintaining a cohesive interior finish.",
        videoURL: V7,
        poster: DigitalSystem
    },
    {
        heading: "MEP Systems Installation (Mechanical, Electrical & Plumbing)",
        subHeading: "Coordinated MEP installations provide reliable mechanical, electrical, and plumbing infrastructure.",
        content: "MEP systems are implemented to support operational performance and compliance. This includes HVAC, electrical distribution, lighting, plumbing, and drainage systems. All services are integrated with spatial layouts and other construction elements to ensure efficiency, reliability, and long-term functionality.",
        videoURL: V8,
        poster: DigitalSystem
    },
    {
        heading: "Fire & Life Safety Systems",
        subHeading: "Compliant fire and life safety systems ensure protection of occupants, assets, and operations.",
        content: "Fire safety installations include alarm systems, firefighting networks, fire stopping, and emergency signage. Each component is integrated within the broader building systems to meet regulatory standards and ensure dependable performance. These measures establish a secure and compliant operational environment.",
        videoURL: V9,
        poster: DigitalSystem
    },
    {
        heading: "ELV & Smart Systems Integration",
        subHeading: "Advanced low-current systems enable secure, connected, and technology-driven environments.",
        content: "ELV systems include data and voice cabling, surveillance, access control, public address, and AV installations. These systems are designed and implemented to support communication, monitoring, and operational efficiency. Proper integration ensures scalability and consistent performance.",
        videoURL: V10,
        poster: DigitalSystem
    },
    {
        heading: "Finishes & Decorative Works",
        subHeading: "High-quality finishes and surface treatments enhance durability, aesthetics, and spatial identity.",
        content: "Finishing works include painting, coatings, wall coverings, and specialised decorative applications. Each surface is executed with precision to ensure consistency, longevity, and alignment with design intent. These treatments define the final visual character of the space.",
        videoURL: V11,
        poster: DigitalSystem
    },
    {
        heading: "Fixtures, Furniture & Equipment (FF&E)",
        subHeading: "Fixtures, furniture, and equipment installations complete spaces for immediate operational use.",
        content: "FF&E installation includes loose furniture, workstations, lighting elements, and equipment. Each item is placed and integrated according to layout plans and functional requirements. This stage ensures the space is fully equipped, organised, and ready for occupancy.",
        videoURL: V12,
        poster: DigitalSystem
    },
    //  {
    //     heading: "Testing, Commissioning & Handover",
    //     subHeading: "Comprehensive testing and commissioning ensure all systems perform as intended prior to project handover.",
    //     content: "All installed systems undergo detailed testing and commissioning to verify functionality and compliance. Snagging and rectification are completed, followed by documentation including as-built drawings and operational manuals. The handover process ensures a fully functional, verified, and ready-to-use.",
    //     videoURL: VideoFile,
    //     poster: DigitalSystem
    // },

]

const FeatureSection = () => {

    return (
        <div
            className="feature-section relative top-0 w-full h-auto
                            bg-bg1 z-1 flex flex-col justify-start items-center 
                            overflow-hidden origin-top will-change-transform
                            "
        >
            <ViewportReveal>
                <div
                    className="absolute max-xxs:top-[-6%] max-xs:top-[-10%] top-[-15%] z-2 rounded-[100%] max-xs:w-[45%] w-[28%] aspect-2/1 bg-bg2 z-3 blur-[60px] lg:blur-[80px] xl:blur-[100px] duration-200 ease-in-out"

                />
            </ViewportReveal>
            <div className="relative w-full max-xs:h-[320px] md:h-[280px] lg:h-[380px] h-[480px] flex flex-col shrink-0 justify-center items-center gap-[5%]">
                <div className="flex flex-col justify-center items-center font-mono
                                text-[1.4rem] max-xs:text-[4.5vw] md:text-[1.4rem] lg:text-[1.8rem] xl:text-[2rem]">

                    <h3
                        className="relative text-text1 leading-[1.2em] text-center"
                    >
                        Engineered Interiors<br />
                        Interior fit-outs built to impress.

                    </h3>
                </div>
                <p
                    className="text-text2 text-center w-[38%] max-xs:w-[80%] max-xs:text-[2.5vw]
                                text-[0.8rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem]"
                >Delivering high-performance interior fit-out solutions engineered for operational efficiency and durability which seamless integrates with modern industrial and commercial environments.</p>

            </div>
            <div className="relative w-full h-auto flex justify-center items-center 
                                    overflow-x-clip overscroll-contain"
            >
                <div className="absolute max-xs:w-[28%] w-[16%] h-[2.5%] top-[-1.5%] rounded-tl-[1.4em] rounded-tr-[1.4em] font-medium bg-bg6 text-text1 flex justify-center items-center
                                text-[1rem] max-xxs:text-[0.6rem] max-xs:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem]"
                >Scope Of Work</div>

                <div
                    // data-lenis-prevent
                    className="relative w-full h-full flex flex-col justify-start items-center gap-[25px] overflow-y-auto scroll-smooth pt-[1%] pb-[4%] cursor-pointer z-1"
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
