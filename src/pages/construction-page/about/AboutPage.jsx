import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import {
    DeliverHighPerformance,
    WeServe,
    FeatureSection,
    DraggableSlider,
    BuildInfrastructure,
    Footer,

} from ".";
import { useScreen } from "../../../components/useScreen";

//imgs
import {
    BgGroup
} from '../../../assets/imgs/construction';


//imgs
import {
    IMG1,
    IMG2,
    IMG3,
    IMG4,
    IMG5,
} from "../../../assets/imgs/construction";

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

const AboutPage = () => {

    const [coords, setCoords] = useState({ x: 0, y: 0 });
    // screen breakpoints
    const screen = useScreen();
    const [value, setValue] = useState({
        y: 0,
        x: 0
    });


    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        const reset = () => {
            window.scrollTo(0, 0);
        };

        reset();

        setTimeout(reset, 50); // ensure after layout
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        let rafId;

        const handleMouseMove = (e) => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                setCoords({
                    x: e.clientX,
                    y: e.clientY,
                });
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(rafId);
        };
        // eslint-disable-next-line
    }, []);


    useEffect(() => {
        if (screen === "xl") {
            setValue({
                y: 160,
                x: 170
            })
        }
        else if (screen === "lg") {
            setValue({
                y: 125,
                x: 125
            })
        }
        else if (screen === "md") {
            setValue({
                y: 90,
                x: 90
            })
        }
    }, [screen])
    return (
        <div className="about-page-main bg-bg1">
            {/* <ReactLenis
                root
                options={{
                    lerp: 0.07,
                    smoothWheel: true,
                    syncTouch: true,
                    allowNestedScroll: true
                }}
            > */}

            <Helmet>
                <title>Veltrixair Construction | Engineering & Infrastructure in KSA</title>
                <meta name="description" content="Veltrixair: Advanced construction & IT intelligence in Saudi Arabia. From structural steel to smart site security." />

            </Helmet>

            <div className={`fixed z-0 w-full left-0 top-0 max-xs:h-[100vh] h-[500px] md:h-[500px] lg:h-[700px] xl:h-[920px] bg-no-repeat bg-[linear-gradient(90deg,rgba(30,29,29,0.1)0%,rgba(56,56,56,0.1)_71%)] 
                                overflow-hidden `}
            >
                <div
                    className='absolute z-4 
                                        bg-[linear-gradient(90deg,rgba(227,96,2,1)_45%,rgba(255,152,79,1)_51%)] 
                                        rounded-full blur-[70px] max-xs:hidden'
                    style={{
                        left: `${coords.x - value.x}px`,
                        top: `${((coords.y - value.y))}px`,
                        objectPosition: "center",
                        opacity: "0.7",
                        width: "16vw",
                        height: "16vw"

                    }}
                />
                <div
                    className='absolute w-full h-full z-0 bg-[linear-gradient(90deg,rgba(227,96,2,1)_45%,rgba(255,152,79,1)_51%)] rounded-full blur-[50px] max-xs:hidden'
                    style={{
                        left: `${coords.x - value.x}px`,
                        top: `${((coords.y - value.y))}px`,
                        objectPosition: "center",
                        opacity: "0.7",
                        width: "16vw",
                        height: "16vw",


                    }}
                />
                {/* <div
                        className='absolute w-full h-full z-1 
                    bg-[linear-gradient(90deg,rgba(30,29,29,0.1)0%,rgba(56,56,56,0.1)_71%)]
                    '

                        style={{
                            backdropFilter: "blur(46px)",

                        }}
                    /> */}
                <div
                    className="absolute top-0 left-0 w-full h-[105%] z-3 bg-black opacity-80"
                />

                <div
                    className='absolute w-full h-[105%] z-2'
                    style={{
                        backgroundImage: `url(${BgGroup})`,
                        objectFit: "cover",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        mixBlendMode: "soft-light",
                    }}
                />


                <div
                    className="absolute left-[20%] max-xxs:top-[-25%] top-[-35%] w-[60%] aspect-2/2 bg-[linear-gradient(90deg,rgba(227,96,2,1)_45%,rgba(255,152,79,1)_51%)] 
                                        rounded-full max-xs:blur-[60px] blur-[70px] z-3 duration-200 ease-in-out xs:hidden"

                />
            </div>


            <DeliverHighPerformance />
            <WeServe />
            <FeatureSection />
            <DraggableSlider DATA={DRAGGALE_DATA} />
            <BuildInfrastructure />
            <Footer />
            {/* </ReactLenis> */}

        </div>
    );
}

export default AboutPage;
