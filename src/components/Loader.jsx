
import LogoIcon from "../assets/imgs/logo/Veltrixair-icon.png";
import LogoText from "../assets/imgs/logo/bottom-text.png";
import { useLenis } from "lenis/react";

import {
    Img1,
    Img2,
    Img3,
    Img4,
    Img5
} from "../assets/imgs/it-solutions";

const DATA = [
    { imgURL: Img1 },
    { imgURL: Img2 },
    { imgURL: Img3 },
    { imgURL: Img4 },
    { imgURL: Img5 },

]
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = ({
    SetShowLoader

}) => {
    const [cardNum, setCardNum] = useState(0);
    const cardsRef = useRef([]);
    const [progress, setProgress] = useState(0);

     const ref = useRef(null);
    const lenis = useLenis();

    useEffect(() => {
        const handler = setInterval(() => {
            setCardNum((p) => (p + 1) % DATA.length);
        }, 800);

        return () => clearInterval(handler);
    }, []);

    // GSAP animation
    useEffect(() => {
        let ctx = gsap.context(() => {
            cardsRef.current.forEach((card, i) => {
                if (!card) return;
                gsap.to(card, {
                    opacity: cardNum === i ? 1 : 0,
                    y: cardNum === i ? 0 : 20,
                    duration: 0.6,
                    ease: "power2.out",
                });
            });
        });
        return () => ctx.revert();
    }, [cardNum]);

    useEffect(() => {
        const obj = { value: 0 };
        let ctx = gsap.context(() => {
            gsap.to(obj, {
                value: 100,
                duration: 3,
                ease: "sine.out",
                onUpdate: () => {
                    setProgress(Math.floor(obj.value));
                },
            });
        });
        return () => ctx.revert();
    }, []);

    // loader
    useEffect(() => {
        let timer
        if (progress === 100) {
            timer = setTimeout(() => {
                SetShowLoader(false)
            }, 500);
        }

        return () => clearTimeout(timer);
    }, [progress])


    // load only first time
    // useEffect(() => {
    //   const seen = sessionStorage.getItem("loaderShown");

    //   if (seen) {
    //     setShowLoader(false);
    //   } else {
    //     sessionStorage.setItem("loaderShown", "true");
    //     setTimeout(() => setShowLoader(false), 3000);
    //   }

    // -----------------------------------------------

    // useEffect(() => {
    //     const duration = 3000; // 3 seconds
    //     const intervalTime = 30; // update every 30ms

    //     const totalSteps = duration / intervalTime;
    //     const increment = 100 / totalSteps;

    //     let current = 0;

    //     const timer = setInterval(() => {
    //         current += increment;

    //         if (current >= 100) {
    //             current = 100;
    //             clearInterval(timer);
    //         }

    //         setProgress(Math.floor(current));
    //     }, intervalTime);

    //     return () => clearInterval(timer);
    // }, []);

    // useEffect(() => {
    //     cardsRef.current.forEach((card, i) => {
    //         if (i === cardNum) {
    //             // reveal current card
    //             gsap.fromTo(
    //                 card,
    //                 {
    //                     clipPath: "inset(100% 0% 0% 0%)", // hidden from bottom
    //                 },
    //                 {
    //                     clipPath: "inset(0% 0% 0% 0%)", // fully visible
    //                     duration: 0.8,
    //                     ease: "power2.out",
    //                 }
    //             );
    //         } else {
    //             // reset others
    //             gsap.set(card, {
    //                 clipPath: "inset(100% 0% 0% 0%)",
    //             });
    //         }
    //     });
    // }, [cardNum]);

    useEffect(() => {
        if (!ref.current || !lenis) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    lenis.stop(); //stop scrolling
                } else {
                    lenis.start(); //resume scrolling
                }
            },
            {
                threshold: 0.6, // 60% visible
            }
        );

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
            lenis.start(); // safety: always re-enable scroll
        };
    }, [lenis]);

    return (
        <div
            ref={ref}
        
         className="relative max-xs:w-[50%] xs:w-[20%] aspect-square flex flex-col justify-center items-center">

            <div
                className="ml-[8%] w-[100%] h-[60%] relative overflow-hidden"
                style={{
                    maskImage: `url(${LogoIcon})`,
                    WebkitMaskImage: `url(${LogoIcon})`,
                    maskRepeat: "no-repeat",
                    WebkitMaskRepeat: "no-repeat",
                    maskSize: "contain",
                    WebkitMaskSize: "contain"
                }}
            >
                {DATA.map((item, i) => (
                    <div
                        key={i}
                        ref={(el) => (cardsRef.current[i] = el)}
                        className="absolute w-full h-full"
                        style={{
                            backgroundImage: `url(${item.imgURL})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            zIndex: DATA.length - i,
                        }}
                    />
                ))}
            </div>

            <div className="w-[80%] h-[40%] flex flex-col justify-start items-center gap-[5%]">
                <div
                    className="w-full h-[80%]"
                    style={{
                        backgroundImage: `url(${LogoText})`,
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"

                    }}
                />


                <div className="relative w-full h-[4px] rounded-2xl bg-[#1C1C1C]"
                >
                    <div className="relative w-full h-[4px] rounded-2xl bg-[linear-gradient(89deg,rgba(7,39,101,1)_21%,rgba(255,255,255,1)_100%)]"
                        style={{ width: `${progress}%` }}
                    >
                        <p className="absolute font-[saved_by_zero] text-text1 right-0 top-[50%]
                                        text-[0.9rem]
                        ">{progress}%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Loader;