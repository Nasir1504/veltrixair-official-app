import { useEffect, useRef } from 'react';
import gsap from "gsap";
import Observer from "gsap/Observer.js";

gsap.registerPlugin(Observer);


const ScrollMotionMarquee = ({
    DATA_ONE,
    DATA_TWO
}) => {

    const wrapperRef1 = useRef(null);
    const wrapperRef2 = useRef(null);

    const tweenRef1 = useRef(null);
    const tweenRef2 = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const track1 = wrapperRef1.current;
            const track2 = wrapperRef2.current;
            
            if (!track1 || !track2) return;
            const width1 = track1.scrollWidth / 2;
            const width2 = track2.scrollWidth / 2;

            tweenRef1.current = gsap.to(track1, {
                x: `-=${width1}`,
                duration: 20,
                ease: "none",
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize((x) => {
                        return parseFloat(x) % width1;
                    }),
                },
            });

            tweenRef2.current = gsap.to(track2, {
                x: `+=${width2}`,
                duration: 20,
                ease: "none",
                repeat: -1,
                modifiers: {
                    x: gsap.utils.unitize((x) => {
                        return parseFloat(x) % width2;
                    }),
                },
            });

            Observer.create({
                type: "wheel,touch",
                onChangeY: (self) => {
                    const direction = self.deltaY > 0 ? 1 : -1;
                    const speed = gsap.utils.clamp(
                        1,
                        6,
                        Math.abs(self.velocityY) / 200
                    );

                    [tweenRef1.current, tweenRef2.current].forEach((tween) => {
                        gsap.to(tween, {
                            timeScale: direction * speed,
                            duration: 0.2,
                            overwrite: true,
                        });

                        gsap.to(tween, {
                            timeScale: 1,
                            duration: 1.5,
                            delay: 0.3,
                            ease: "power2.out",
                        });
                    });
                },
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div
            className="relative flex flex-col justify-center items-center w-full max-xs:h-[190px] md:h-[260px] lg:h-[360px] xl:h-[360px]"

        >
            <div className="absolute flex flex-col justify-center items-center w-full h-full"
            >
                <div className="w-full h-[70%] flex flex-col shrink-0 justify-between items-center">
                    {/* Row 1 */}
                    <div className="overflow-hidden w-full flex justify-start">
                        <div ref={wrapperRef1} className="flex gap-6 w-max will-change-transform">
                            {[...DATA_ONE, ...DATA_ONE].map((item, index) => (
                                <div
                                    key={index}
                                    className="relative card-item w-[240px] md:w-[240px] lg:w-[280px] xl:w-[320px] 
                                        aspect-4/1 flex items-center justify-start gap-[5%] rounded-lg p-[1em]  border border-bg3 overflow-hidden"
                                >
                                    <div className="absolute w-full h-full bg-bg1 left-0 top-0 z-0"


                                    />
                                    <div
                                        className="relative shrink-0 z-1 inner-box w-[20%] bg-bg1 aspect-square"
                                    >
                                        <div className="absolute shrink-0 w-full h-full bg-bg2 left-0 top-0 z-0"
                                        />

                                    </div>
                                    <p className="relative z-1 text-text9 
                                            max-xs:text-[0.7rem] text-[0.65rem] md:text-[0.65rem] lg:text-[0.85rem] xl:text-[1rem]"
                                    >{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="overflow-hidden w-full flex justify-end">
                        <div ref={wrapperRef2} className="flex gap-6 w-max will-change-transform">
                            {[...DATA_TWO, ...DATA_TWO].map((item, index) => (
                                <div
                                    key={index}
                                    className="relative card-item w-[240px] md:w-[240px] lg:w-[280px] xl:w-[320px] 
                                        aspect-4/1 flex items-center justify-start gap-[5%] rounded-lg p-[1em]  border border-bg3 overflow-hidden"
                                >
                                    <div className="absolute w-full h-full bg-bg1 left-0 top-0 z-0"


                                    />
                                    <div
                                        className="relative shrink-0 z-1 inner-box w-[20%] bg-bg1 aspect-square"
                                    >
                                        <div className="absolute shrink-0 w-full h-full bg-bg2 left-0 top-0 z-0"
                                        />

                                    </div>
                                    <p className="relative z-1 text-text9 
                                            max-xs:text-[0.7rem] text-[0.65rem] md:text-[0.65rem] lg:text-[0.85rem] xl:text-[1rem]"
                                    >{item.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default ScrollMotionMarquee;
