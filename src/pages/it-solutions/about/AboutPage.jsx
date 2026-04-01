import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

import {
    DeliverHighPerformance,
    WeServe,
    FeatureSection,
    DraggableSlider,
    Footer,

} from ".";

import BuildInfrastructure from "../BuildInfrastructure";
import { useScreen } from "../../../components/useScreen";

//imgs
import {
    BgGroup
} from '../../../assets/imgs/construction';

import {
    CloudAdoption,
    SecurityFocus,
    NetworkSystems,
    SmartSiteSecurity,
    DataStrategy,
} from "../../../assets/imgs/it-solutions";


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
        <div className="about-page-main bg-bg8">
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
                <title>About Veltrixair IT | Global Infrastructure & Technology Expertise.</title>
                <meta name="description" content="Veltrixair delivers global integrated IT services, infrastructure solutions through industry expertise, strategic partnerships, modern tools and scalable delivery frameworks." />

            </Helmet>
            <div className={`fixed z-0 w-full left-0 top-0 h-full bg-no-repeat bg-[linear-gradient(90deg,rgba(30,29,29,0.1)0%,rgba(56,56,56,0.1)_71%)] 
                                overflow-hidden`}
            >
                <div
                    className='absolute z-4 
                                        bg-[linear-gradient(90deg,rgba(55,92,165,1)_45%,rgba(112,152,232,1)_51%)] 
                                        rounded-full blur-[80px] '
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
                    className='absolute w-full h-full z-0 bg-[linear-gradient(90deg,rgba(55,92,165,1)_45%,rgba(112,152,232,1)_51%)] rounded-full blur-[50px]'
                    style={{
                        left: `${coords.x - value.x}px`,
                        top: `${((coords.y - value.y))}px`,
                        objectPosition: "center",
                        opacity: "0.7",
                        width: "16vw",
                        height: "16vw",


                    }}
                />

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
                    className="absolute max-xs:left-[22%] left-[28%] max-xxs:top-[-24%] max-xs:top-[-28%] top-[-18%] max-xs:w-[56%] w-[46%] aspect-2/2 bg-[linear-gradient(90deg,rgba(55,92,165,1)_45%,rgba(112,152,232,1)_51%)] 
                                        rounded-full max-xs:blur-[60px] blur-[70px] z-3 duration-200 ease-in-out xs:hidden"

                />
            </div>


            <DeliverHighPerformance />
            <WeServe />
            <FeatureSection />
            <DraggableSlider
                DATA={DRAGGABLE_DATA}
                BG="#000310"
            />
            <BuildInfrastructure />
            <Footer />
            {/* </ReactLenis> */}

        </div>
    );
}

export default AboutPage;
