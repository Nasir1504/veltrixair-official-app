import { useState, useMemo } from "react";
import { Shutter } from "../../../assets/imgs/it-solutions";

const ShutterContent = ({
    Trigger,
    Heading1,
    Heading2,
    SubHeading
}) => {

    const [hideShutter, setHideShutter] = useState(false)
    useMemo(() => {
        let handler;
        if (Trigger) {
            handler = setTimeout(() => {
                setHideShutter(true);
            }, 1000);
        }

        return () => clearTimeout(handler);
    }, [Trigger])


    return (
        <div
            className="relative w-full h-screen flex items-center justify-between overflow-hidden"
        >

            <div className='text-text1 flex flex-col justify-center items-center font-bold text-center max-xs:px-[0%] px-[28%] lg:px-[28%] xl:px-[28%] gap-[2rem]
                              delay-300 duration-500 ease-in-out'
                style={{
                    transform: Trigger ? "scale(1)" : "scale(0.8)"
                }}
            >
                <h3 className='
                                max-xxs:text-[1.6rem] max-xs:text-[2.2rem] text-[2.5rem] md:text-[2.5rem] mdlg:text-[3rem] lg:text-[3.4rem] xl:text-[3.8rem] tracking-tight 
                                xl:leading-[4.2rem] lg:leading-[4rem] mdlg:leading-[3.4rem] md:leading-[3rem] leading-[3rem] max-xs:leading-[3rem] max-xxs:leading-[2.5rem]
                '>
                    <span className="font-[Poppins] font-medium">{Heading1}</span><br />
                    <span
                        className='uppercase font-light max-xs:text-[3rem] max-xxs:text-[2.5rem]'
                    >{Heading2}</span>
                </h3>

                <p className='text-center text-text2 font-medium max-xs:px-[8%] font-[Roboto_Mono]
                            max-xxs:text-[0.85rem] max-xs:text-[1rem] text-[0.7rem] md:text-[0.7rem] mdlg:text-[0.8rem] lg:text-[1rem] xl:text-[1.1rem]
                '>
                    {SubHeading}
                </p>
                {/* -========================================== */}
                <button className='relative z-10 shrink-0 rounded-[5rem] flex overflow-hidden p-0.5 cursor-pointer
                                  bg-[linear-gradient(89deg,rgba(228,228,228,1)_0%,rgba(9,9,9,1)_120%)]
                                  text-[1rem] md:text-[1rem] mdlg:text-[1.1rem] lg:text-[1.3rem] xl:text-[1.4rem] font-light tracking-normal [text-shadow:2px_2px_2px_rgba(0,0,0,1)]

                '>
                    <span className='w-full h-full shrink-0 px-[1.8rem] py-[0.8rem] rounded-[5rem]
                    bg-[linear-gradient(89deg,rgba(7,39,101,1)_0%,rgba(14,21,36,1)_100%)]'>
                        Schedule a call

                    </span>
                </button>
            </div>

            <div className='absolute top-0 left-0 w-full h-full flex max-xs:flex-col justify-center items-center'
                style={{
                    // display: hideShutter ? "none" : ""
                }}
            >
                {/* <p className="text-text1 fixed z-10 top-10">{hideShutter.toString()}</p> */}
                {/* ------------- Shutter one -------------- */}
                <div
                    className='relative w-[50%] h-full bg-no-repeat bg-[linear-gradient(90deg,rgba(30,29,29,0.1)0%,rgba(56,56,56,0.1)_71%)] overflow-hidden
                                duration-1000 ease-in-out max-xs:hidden'
                    style={{
                        clipPath: Trigger ? "rect(0% 0% 100% 0%)" : "rect(0% 100% 100% 0%)"
                    }}
                >
                    <img
                        alt="shutter"
                        src={Shutter}
                        className="h-full w-full"
                        style={{ objectFit: "cover" }}
                    />
                    <div
                        className="absolute top-0 left-0 w-full h-[105%] z-3 bg-black opacity-60"
                    />


                </div>
                {/* mobile */}
                <div
                    className='relative w-full h-[50%] bg-no-repeat bg-[linear-gradient(90deg,rgba(30,29,29,0.1)0%,rgba(56,56,56,0.1)_71%)] overflow-hidden
                                duration-1000 ease-in-out xs:hidden'
                    style={{
                        clipPath: Trigger ? "rect(0% 100% 0% 0%)" : "rect(0% 100% 100% 0%)"
                    }}
                >
                    <img
                        alt="shutter"
                        src={Shutter}
                        className="h-full w-full"
                        style={{ objectFit: "cover" }}
                    />
                    <div
                        className="absolute top-0 left-0 w-full h-[105%] z-3 bg-black opacity-60"
                    />


                </div>
                {/* ------------- Shutter two -------------- */}

                <div
                    className='relative w-[50%] h-full bg-no-repeat bg-[linear-gradient(90deg,rgba(30,29,29,0.1)0%,rgba(56,56,56,0.1)_71%)]
                              duration-1000 ease-in-out max-xs:hidden'

                    style={{
                        clipPath: Trigger ? "rect(0% 100% 100% 100%)" : "rect(0% 100% 100% 0%)"
                    }}
                >
                    <img
                        alt="shutter"
                        src={Shutter}
                        className="h-full w-full"
                        style={{ objectFit: "cover" }}
                    />
                    <div
                        className="absolute top-0 left-0 w-full h-[105%] z-3 bg-black opacity-60"
                    />
                </div>

                {/* mobile */}
                <div
                    className='relative w-full h-[50%] bg-no-repeat bg-[linear-gradient(90deg,rgba(30,29,29,0.1)0%,rgba(56,56,56,0.1)_71%)]
                              duration-1000 ease-in-out xs:hidden'

                    style={{
                        clipPath: Trigger ? "rect(100% 100% 100% 0%)" : "rect(0% 100% 100% 0%)"

                    }}
                >
                    <img
                        alt="shutter"
                        src={Shutter}
                        className="h-full w-full"
                        style={{ objectFit: "cover" }}
                    />
                    <div
                        className="absolute top-0 left-0 w-full h-[105%] z-3 bg-black opacity-60"
                    />
                </div>

            </div>
        </div>
    );
}

export default ShutterContent;
