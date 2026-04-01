import { useState, useEffect } from 'react';
import { useScreen } from '../../../components/useScreen';
import { CranesCard } from '../../../components';
import { ViewportReveal } from '../../../components';
// Images
import {
    BgGroup

} from '../../../assets/imgs/construction';

const OverheadCranesWeDeliver = () => {
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);
    const [value, setValue] = useState({
        y: 0,
        x: 0
    });

    // screen breakpoints
    const screen = useScreen();
    const [cardID, setCardID] = useState(null)
    const [cardDelay, setCardDelay] = useState(false)
    const [isHover, setIsHover] = useState(false)

    useEffect(() => {
        const handleWindowMouseMove = event => {
            setCoords({
                x: event.clientX,
                y: event.clientY,
            });
        };
        window.addEventListener('mousemove', handleWindowMouseMove);

        return () => {
            window.removeEventListener(
                'mousemove',
                handleWindowMouseMove,
            );
        };
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        if (screen === "xl") {
            setValue({
                y: 1060,
                x: 170
            })
        }
        else if (screen === "lg") {
            setValue({
                y: 840,
                x: 140
            })
        }
        else if (screen === "md") {
            setValue({
                y: 600,
                x: 80
            })
        }
    }, [screen])



    return (
        <div
            className="relative w-full max-xs:h-[100vh] h-[500px] md:h-[500px] lg:h-[700px] xl:h-[920px] flex items-center justify-between overflow-hidden br-bg1"
        >

            <div className={`relative w-full h-full mask-section bg-no-repeat bg-[linear-gradient(90deg,rgba(30,29,29,0.1)0%,rgba(56,56,56,0.1)_71%)] 
                            `}
            >
                <div
                    className='absolute z-4 
                    bg-[linear-gradient(90deg,rgba(227,96,2,1)_45%,rgba(255,152,79,1)_51%)] 
                    rounded-full blur-[70px] '
                    style={{
                        left: `${coords.x - value.x}px`,
                        top: `${((coords.y - value.y) + scrollY)}px`,
                        objectPosition: "center",
                        opacity: "0.7",
                        width: "16vw",
                        height: "16vw"

                    }}
                />
                <div
                    className='absolute w-full h-full z-0 bg-[linear-gradient(90deg,rgba(227,96,2,1)_45%,rgba(255,152,79,1)_51%)] 
                    rounded-full rounded-full blur-[50px]'
                    style={{
                        left: `${coords.x - value.x}px`,
                        top: `${((coords.y - value.y) + scrollY)}px`,
                        objectPosition: "center",
                        opacity: "0.7",
                        width: "16vw",
                        height: "16vw",


                    }}
                />

                <div
                    className='absolute w-full h-full z-1 
                    bg-[linear-gradient(90deg,rgba(30,29,29,0.1)0%,rgba(56,56,56,0.1)_71%)]
                    '

                    style={{
                        backdropFilter: "blur(46px)",

                    }}
                />
                {/* <div
                    className="absolute top-0 left-0 w-full h-[105%] z-3 bg-black opacity-80"
                /> */}

                <div
                    className='relative w-full h-[105%] mt-[-1%] z-2'
                    style={{
                        backgroundImage: `url(${BgGroup})`,
                        objectFit: "cover",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        mixBlendMode: "soft-light",
                    }}
                />
            </div>
            <ViewportReveal>
                {/* <div
                    className="absolute top-[1%] left-0 rounded-[100%] w-[48%] aspect-2/1 bg-bg2 z-3 blur-[60px] duration-200 ease-in-out"

                /> */}
                
            </ViewportReveal>

            <div className='z-10 absolute w-full h-full flex flex-col justify-between items-center top-0 left-0'>
                <div
                    className="w-full h-[30%] max-xxs:h-[40%] text-text1 flex flex-col justify-end items-center gap-[8%]
                                "
                >
                    <h3 className='flex flex-col justify-center items-center leading-[1.2em]
                                    max-xxs:text-[1.2rem] max-xxs:w-[70%] max-xxxs:w-[75%] max-xxs:text-center max-xs:text-[1.4rem] text-[1.25rem] md:text-[1.4rem] lg:text-[2rem] xl:text-[2.4rem] font-bold
                                    '>
                        {/* <span className="font-[Saved_By_Zero]">Type of </span> */}
                        <span className='uppercase'>Overhead Crane Systems We Install</span>
                    </h3>
                    <p className='w-[45%] max-xs:w-[80%] text-center max-xs:text-[0.8rem] text-[0.7rem] md:text-[0.7rem] lg:text-[0.95rem] xl:text-[1rem]'>
                        Veltrixair installs industrial overhead cranes for safe and efficient material handling. Our engineering-led approach ensures precision and full safety compliance.
                    </p>

                </div>
                <div className="w-full h-[65%] max-xxs:h-[55%] flex flex-wrap gap-[5%]">

                    <div className='w-full h-full flex justify-start items-center gap-[2%]'
                        style={{
                            animation: "cardSlideKF 30s ease-in-out infinite alternate",
                            animationPlayState: isHover && 'paused',
                            WebkitAnimationPlayState: isHover && 'paused'
                        }}
                    >
                        {
                            [...Array(4), ...Array(4)].map((item, i) => {
                                return (
                                    <div
                                        // className=''
                                        key={i}
                                        onMouseOver={() => {
                                            setCardID(i)
                                            setCardDelay(true)
                                            setIsHover(true)
                                        }}
                                        onMouseOut={() => {
                                            setCardID(null)
                                            setIsHover(false)
                                        }}
                                        style={{
                                            // transform: i % 2 === 0 && cardID !== i ? `rotate(15deg)` :
                                            //     i % 2 !== 0 && cardID !== i && `rotate(-15deg)`,
                                            transition: "0.4s cubic-bezier(0, .02, 0, .99)",
                                            zIndex: cardID === i ? "1" : "0"

                                        }}
                                    >
                                        <CranesCard

                                            IsHover={isHover}
                                            CardID={cardID}
                                            Id={i}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>

                </div>


            </div>
        </div >
    );
}

export default OverheadCranesWeDeliver;



//  <div className="relative w-full h-full flex justify-center items-center gap-1"
//                         style={{
//                             animation: "cardSlideKF 40s ease-in-out infinite alternate",
//                             // animationPlayState: isHover && 'paused',
//                             // WebkitAnimationPlayState: isHover && 'paused'

//                         }}
//                     >
//                         <div className='absolute w-[200px] h-[200px] bg-amber-500'></div>
//                         <div className='absolute w-[200px] h-[200px] bg-amber-500'></div>
//                         <div className='absolute w-[200px] h-[200px] bg-amber-500'></div>
//                         <div className='absolute w-[200px] h-[200px] bg-amber-500'></div>
//                         <div className='absolute w-[200px] h-[200px] bg-amber-500'></div>
//                         <div className='absolute w-[200px] h-[200px] bg-amber-500'></div>
//                         <div className='absolute w-[200px] h-[200px] bg-amber-500'></div>

//                     </div>