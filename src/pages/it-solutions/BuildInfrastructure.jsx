import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BuildInfrastructure = ({
    PageName
}) => {
    const exmRef = useRef(null);

    const textRef = useRef(null);

    useEffect(() => {
        const el = exmRef.current;
        const text = textRef.current;

        const ctx = gsap.context(() => {

            // Bottom Border Radius Animation
            gsap.fromTo(
                el,
                {
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "0px",
                },
                {
                    borderBottomLeftRadius: "15vw",
                    borderBottomRightRadius: "15vw",
                    ease: "none",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 50%",
                        end: "top 10%",
                        scrub: true,
                        // markers: true,

                    },
                }
            );

            // Infinite Marquee Scroll Animation
            gsap.to(text, {
                xPercent: -81, // move left
                ease: "none",
                scrollTrigger: {
                    trigger: text,
                    start: "top 90%",
                    end: "bottom 10%",
                    scrub: true,
                },
            });



        });

        return () => ctx.revert();
    }, []);

    return (
        <div
            className="relative w-full max-xs:h-[75vh] h-[600px] lg:h-[750px] xl:h-[900px] bg-bg2 flex flex-col items-start justify-between overflow-hidden"
        >
            <div
                ref={exmRef}
                className="relative w-full h-[65%] bg-bg8 max-xs:px-[6%] px-[8%] md:px-[8%] flex flex-col justify-start gap-[10%]"
            >
                <div className="max-xs:h-[2vh] sm:h-[5%]" />
                <div className="max-xs:h-[18%] sm:h-[28%]">
                    <h2
                        className="text-text1 max-xs:text-[4vw] text-[1.7rem] md:text-[1.7rem] mdlg:text-[1.8rem] lg:text-[2.1rem] xl:text-[2.5rem]"
                    >Complete It Solutions</h2>
                    <h2
                        className="text-text1 max-xs:text-[4vw] text-[1.7rem] md:text-[1.7rem] mdlg:text-[1.8rem] lg:text-[2.1rem] xl:text-[2.5rem] font-bold"
                    >You can trust</h2>
                </div>



                {
                    PageName === "home" ?
                        <div className="relative w-full max-xs:h-[22vh] h-[28%] md:h-[28%] bg-bg2 rounded-md flex max-xs:flex-col justify-around items-center max-xs:gap-[6%] sm:gap-[2%] p-[2%] text-text1 max-xs:text-[2.2vw] text-[0.8rem] md:text-[0.8rem] lg:text-[1.05rem] xl:text-[1.2rem]">
                            <p className="absolute left-0 max-xs:bottom-[105%] sm:bottom-[120%] text-text1 max-xs:text-[2.5vw] text-[0.8rem] md:text-[0.8rem] mdlg:text-[0.9rem] lg:text-[1rem] xl:text-[1.2rem] opacity-90
                    "
                            >[Talk To Our Project Engineers]</p>
                            <button
                                className="max-xs:w-[60%] sm:w-[45%] h-full max-xs:rounded-sm ms:rounded-md bg-btn1 drop-shadow-[4px_10px_2px_rgba(0,0,0,0.4)]"
                            >Connect For IT Solutions</button>
                            <button
                                className="max-xs:w-[60%] sm:w-[50%] h-full max-xs:rounded-sm ms:rounded-md bg-btn1 drop-shadow-[4px_10px_2px_rgba(0,0,0,0.4)]"
                            >Connect For Construction Solutions</button>
                            <button
                                className="max-xs:w-[60%] sm:w-[45%] h-full max-xs:rounded-sm ms:rounded-md bg-btn1 drop-shadow-[4px_10px_2px_rgba(0,0,0,0.4)]"
                            >Connect For IT Solutions</button>

                        </div>
                        :
                        <div className="relative w-full max-xs:mt-[8vh] max-xs:h-[8vh] h-[28%] md:h-[28%] bg-bg2 rounded-md flex max-xs:flex-col justify-around items-center max-xs:gap-[6%] sm:gap-[2%] p-[2%] text-text1 max-xs:text-[2.2vw] text-[0.8rem] md:text-[0.8rem] lg:text-[1.05rem] xl:text-[1.2rem]">
                            <p className="absolute left-0 max-xs:bottom-[105%] sm:bottom-[120%] text-text1 max-xs:text-[2.5vw] text-[0.8rem] md:text-[0.8rem]  mdlg:text-[0.9rem]lg:text-[1rem] xl:text-[1.2rem] opacity-90
                    "
                            >Select your next step with our team</p>
                            <button
                                className="w-[98%] font-medium h-full max-xs:rounded-sm ms:rounded-md bg-btn3 drop-shadow-[4px_10px_2px_rgba(0,0,0,0.2)] max-xs:drop-shadow-[2px_5px_2px_rgba(0,0,0,0.4)]
                                            max-xs:text-[2.5vw] text-[0.8rem] md:text-[1.8rem] lg:text-[2rem] xl:text-[2.5rem]"
                            >Get in Touch</button>
                        </div>
                }



            </div>

            <div ref={textRef} className="flex max-xs:gap-2 gap-10 md:gap-10 h-[35%] items-center max-xs:text-[8vw] text-[6rem] md:text-[6rem] mdlg:text-[7rem] lg:text-[7.5rem] xl:text-[8rem] max-xs:font-bold md:font-medium">

                <em className="whitespace-nowrap">
                    WHERE INFRASTRUCTURE MEETS INTELLIGENCE.
                </em>
                <em className="whitespace-nowrap">
                    WHERE INFRASTRUCTURE MEETS INTELLIGENCE.

                </em>
            </div>

        </div>
    );
};

export default BuildInfrastructure;
