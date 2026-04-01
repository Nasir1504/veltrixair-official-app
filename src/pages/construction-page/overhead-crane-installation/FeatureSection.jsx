import { SOWCard, ViewportReveal } from "../../../components";
import { DigitalSystem } from "../../../assets/imgs/home";

import {
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
    video9,
    video10,
} from "../../../assets/imgs/construction/overhead-crane-installation";

const CARD_DATA = [
    {
        heading: "Site inspection & structural assessment",
        subHeading: "Comprehensive site inspection and structural readiness evaluation to confirm installation feasibility, access conditions, and crane support requirements.",
        content: "We conduct a pre-mobilization site assessment to verify installation readiness. We review foundations, structural supports, and clearances against project drawings while evaluating access routes for safe execution. Identifying constraints early minimizes risks and ensures seamless crane integration with your facility's infrastructure.",
        videoURL: video1,
        poster: DigitalSystem

    },
    {
        heading: "Engineering Review & Load Validation",
        subHeading: "Technical evaluation of crane system drawings, structural loads, and installation parameters to ensure safe integration with facility infrastructure.",
        content: "We review engineering documentation to ensure crane compatibility with your structure. By validating load data, anchoring, and clearances against design specifications, we prevent structural overstress and installation conflicts. This technical audit ensures your lifting system operates safely within all approved parameters.",
        videoURL: video2,
        poster: DigitalSystem
    },
    {
        heading: "Runway beam & rail installation",
        subHeading: "Installation and precision alignment of crane runway beams, rails, brackets, anchors, and end stops to support safe crane travel and load distribution.",
        content: "We install runway systems by precisely aligning beams, rails, and anchors to engineering specs. Using calibrated tools, we verify tolerances to ensure smooth movement, minimal wear, and load stability. This rigorous process guarantees long-term structural reliability and peak crane performance.",
        videoURL: video3,
        poster: DigitalSystem
    },
    {
        heading: "Structural Steel Erection",
        subHeading: "Assembly and installation of supporting steel structures, including columns, beams and crane runway frames, required for overhead lifting systems.",
        content: "We install columns, crossbeams, and brackets to safely transfer crane loads to the building framework. Following strict welding and bolting standards, we ensure accurate structural integration. This stage establishes the essential capacity for stable, reliable, and safe lifting operations.",
        videoURL: video4,
        poster: DigitalSystem
    },
    {
        heading: "Mechanical Crane Assembly",
        subHeading: "Installation of bridge girders, end carriages, hoists, trolleys, gear systems and mechanical components for complete crane functionality.",
        content: "We assemble bridge girders, hoists, and drive mechanisms according to manufacturer specifications. By inspecting critical elements like wire ropes and gearboxes, we ensure smooth travel and stable handling. Precise mechanical alignment guarantees operational efficiency and a long system service life.",
        videoURL: video5,
        poster: DigitalSystem
    },
    {
        heading: "Electrical Installation & Integration",
        subHeading: "Installation of power systems, including conductor bars, festoon systems, control panels, wiring, grounding and limit switches.",
        content: "Our team installs power distribution and control systems, including conductor bars and safety wiring. We configure all components to meet equipment specifications and safety standards. Rigorous circuit verification ensures precise operational control and consistent power delivery for all crane functions.",
        videoURL: video6,
        poster: DigitalSystem
    },
    // 7
    {
        heading: "Safety Systems Integration",
        subHeading: "Implementation of safety mechanisms such as overload protection, anti-collision systems, emergency stop circuits and operational warning devices.",
        content: "We integrate advanced safety mechanisms, including overload protection, emergency stops, and anti-collision technology. These systems monitor operational parameters to prevent accidents and equipment damage. Reliable safety controls ensure full compliance with industrial standards and enhance overall onsite security.",
        videoURL: video7,
        poster: DigitalSystem
    },
    {
        heading: "Load Testing & Operational Calibration",
        subHeading: "Execution of no-load, rated load and overload testing procedures to verify crane performance, travel alignment and system functionality.",
        content: "Post-installation, we test all hoisting and travel motions to confirm coordinated system response. We evaluate braking and control interfaces under real-world conditions to ensure vibration-free movement. This validation phase confirms the crane functions reliably before proceeding to final load testing.",
        videoURL: video8,
        poster: DigitalSystem
    },
    {
        heading: "Testing, Certification & Commissioning",
        subHeading: "Final inspection, third-party certification, and commissioning of the crane system to ensure operational readiness and compliance with regulatory standards.",
        content: "We conduct rated-load and overload tests to verify lifting capacity and structural stability. These procedures evaluate hoisting and braking performance against regulatory requirements. Successful testing confirms the system is safe, compliant, and ready for high-intensity industrial use..",
        videoURL: video9,
        poster: DigitalSystem
    },
    {
        heading: "Documentation & Project Handover",
        subHeading: "Delivery of installation documentation, including as-built drawings, calibration records, safety reports and operational documentation.",
        content: "We provide a comprehensive project file, including as-built drawings, test certificates, and compliance records. This technical reference supports future maintenance and regulatory audits. Final handover signifies the crane system is fully installed, tested, and approved for immediate operational use.",
        videoURL: video10,
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
                                 max-xxs:text-[1.2rem] text-[1.6rem] max-xs:text-[1.8rem] md:text-[1.6rem] lg:text-[2rem] xl:text-[2.2rem]">

                    <h3
                        className="relative text-text1 leading-[1.2em] text-center capitalize font-bold"
                    >
                        Precision Installation<br />
                        for Industrial Lifting Systems

                    </h3>
                </div>
                <p
                    className="text-text2 text-center w-[38%] max-xs:w-[80%] max-xs:text-[0.8rem] max-xxs:text-[0.6rem]
                                text-[0.8rem] md:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem]"
                >
                    Overhead crane systems demand precision engineering and strict compliance. Our team delivers complete installation solutions — from structural verification to final commissioning — ensuring seamless integration with your facility operations.
                </p>


            </div>
            <div className="relative w-full max-xs:min-h-screen h-auto flex justify-center items-center 
                                    overflow-x-clip overscroll-contain"
            >
                <div className="absolute max-xs:w-[28%] w-[16%] h-[2.5%] top-[-1.5%] rounded-tl-[1.4em] rounded-tr-[1.4em] font-medium bg-bg6 text-text1 flex justify-center items-center
                                text-[1rem] max-xxs:text-[0.6rem] max-xs:text-[0.8rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.4rem]"
                >Scope Of Work</div>
                <div
                    // data-lenis-prevent
                    className="relative w-full h-full flex flex-col justify-start items-center gap-[25px] pt-[1%] pb-[4%] cursor-pointer z-1"
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
