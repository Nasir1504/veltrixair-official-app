import { useRef, useEffect } from "react";
import { Draggable } from "gsap/Draggable";
import InfrastructureCardTwo from "./InfrastructureCardTwo";
import gsap from "gsap";
import ViewportReveal from "./ViewportReveal";

gsap.registerPlugin(Draggable);

const DraggableSlider = ({
    Heading = "Latest Updates From",
    Content = "Stay informed on our latest project milestones, industry insights and strategic developments across, IT infrastructure, industrial construction, and security advisory.",
    BG = "#1e1e1e",
    BlurBG = "#ffffff",
    DATA = [],
    BtnColor
}) => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);

    // ------------------ Draggable --------------------------------

    useEffect(() => {
        const container = containerRef.current;
        const track = trackRef.current;

        if (!container || !track) return;

        const getBounds = () => ({
            minX: Math.min(container.offsetWidth - track.scrollWidth, 0),
            maxX: 0
        });

        const draggable = Draggable.create(track, {
            type: "x",
            inertia: true,
            bounds: getBounds(),
            cursor: "grab",
            activeCursor: "grabbing",
        })[0];

        const handleResize = () => draggable.applyBounds(getBounds());

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            draggable.kill();
        };

    }, []);

    return (
        <div
            className="relative w-full max-xs:h-[100vh] h-[485px] md:h-[485px] mdlg:h-[660px] lg:h-[720px] xl:h-[920px] flex flex-col justify-center items-center overflow-hidden"
            style={{
                background: BG
            }}
        >
            <ViewportReveal>
                <div
                    className="absolute max-xxs:top-[-10%] max-xs:top-[-17%] top-[-24%] rounded-[100%] max-xs:w-[55%] w-[32%] aspect-2/1 z-3 blur-[60px] lg:blur-[80px] xl:blur-[120px] duration-200 ease-in-out"
                    style={{
                        background: BlurBG
                    }}
                />
            </ViewportReveal>
            <div className="relative flex flex-col w-full h-[35%] max-xs:h-[25%] pl-[10%] max-xs:pt-[4%] mdlg:pt-[5%] pt-[1.5%] max-xs:leading-[4.5vw]">
                <h3 className="text-[1.28rem] md:text-[1.06rem] mdlg:text-[1.2rem] lg:text-[1.36rem] xl:text-[1.8rem] text-text1
                              max-xs:text-[2.8vw] max-xxs:mt-[4vh]  max-xs:mt-[1.5vh] max-xs:w-[45%] w-[23%]
                            ">
                    {Heading}
                </h3>
                <h2
                    className="text-[1.94rem] md:text-[1.94rem] mdlg:text-[2.12rem] lg:text-[2.4rem] xl:text-[3.2rem] uppercase font-['Saved_By_Zero'] text-text1 opacity-80 tracking-widest
                                                max-xs:text-[5vw]
                                              "
                >Veltrixair</h2>
                <p className="font-[Roboto_Mono] text-text2 text-[0.8rem] md:text-[0.8rem] mdlg:text-[0.9rem] lg:text-[1rem] xl:text-[1.3rem] max-xs:w-[90%] w-[50%] sm:w-[50%]
                                max-xs:text-[2.5vw] max-xs:pr-[8%] max-xs:leading-[3.5vw] max-xs:mt-[2vw]">
                    {Content}

                </p>
            </div>
            <div className="relative flex h-[65%] max-xxxs:h-[85%] max-xs:h-[75%] w-full overflow-hidden transform-gpu">
                <div className="absolute transform-gpu max-xxs:h-[14vw] max-xs:w-[120%] max-xs:h-[16vw] w-[118%] h-[32%] md:w-[118%] md:h-[30%] xl:h-[32%] 
                                                max-xxs:top-[-4%] max-xs:top-[-4%] max-xs:left-[-10%] top-[-17%] left-[-9%] md:top-[-17%] md:left-[-9%] z-[2] rounded-[100%] overflow-hidden p-0.5
                                                bg-[linear-gradient(94deg,rgba(232,232,232,1)0%,rgba(30,30,30,1)100%)]
                                            "
                    style={{
                        backfaceVisibility: "hidden",
                        willChange: "transform"
                    }}
                >
                    <div className={`w-full h-full rounded-[100%]`}

                        style={{
                            background: BG
                        }}
                    />

                </div>

                <div
                    ref={containerRef}

                    className="relative flex flex-2.5 w-full items-center overflow-y-hidden z-[1]">
                    <div
                        ref={trackRef}
                        className="grid grid-rows-1 max-xs:grid-rows-2 max-xs:gap-x-[4vw] max-xs:gap-y-[4vw] gap-x-[3%] grid-flow-col ">

                        {DATA.map((item, i) => (
                            <InfrastructureCardTwo
                                key={i}
                                Item={item}
                                BtnColor={BtnColor}
                                ImgURL={item.imgURL}

                            />
                        ))}


                    </div>
                </div>
                <div
                    className="absolute max-xs:w-[120%] max-xxs:h-[13%] max-xs:h-[16vw] w-[114%] h-[34%] md:w-[114%] md:h-[30%]  xl:h-[34%] 
                                                max-xxxs:bottom-[-8.5%] max-xxs:bottom-[-5%] max-xs:bottom-[-4%] max-xs:left-[-10%] bottom-[-17%] left-[-7%] md:bottom-[-17%] md:left-[-7%] 
                                                bg-[linear-gradient(-94deg,rgba(232,232,232,1)0%,rgba(30,30,30,1)100%)] z-2 rounded-[100%] overflow-hidden p-0.5
                                                ">
                    <div className="w-full h-full rounded-[100%]"
                        style={{
                            background: BG
                        }}
                    />
                </div>

            </div>
        </div>
    );
}

export default DraggableSlider;
