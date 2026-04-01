import { useState, useEffect } from 'react';
import { useScreen } from '../../../components/useScreen';
import { Stickyroll } from '@stickyroll/react';
import { VideoComponent } from '../../../components';
// Images
import { DigitalSystem } from "../../../assets/imgs/home";
import DeliveryLeadership from "../../../assets/imgs/construction/delivery-leadership.mov";
import InfrastructureProjectLifecycle from "../../../assets/imgs/construction/Infrastructure-Project-Lifecycle.mov";


import { VeltrixairIcon } from '../../../assets/imgs/home';


const FeatureSection = () => {
    const [value, setValue] = useState({
        y: 0,
        x: 0
    });

    // screen breakpoints
    const screen = useScreen();

    useEffect(() => {
        if (screen === "xl") {
            setValue({
                y: 2000,
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
            className="relative w-full overflow-hidden"

        >

            <div className='relative z-5'>
                <Stickyroll
                    pages={1.01}
                    factor={2}

                >
                    <div className='w-full h-full flex flex-col'>
                        <section className='relative max-xs:h-[100vh] h-[500px] md:h-[450px] lg:h-[700px] xl:h-[920px] flex flex-col max-xs:gap-[8%] justify-center items-center '>
                            <img
                                className='w-[200px] max-xs:w-[35%]'
                                src={VeltrixairIcon}
                                alt=''
                                loading='lazy'
                                style={{ objectFit: "contain" }}

                            />
                            <h3 className='text-text1 text-center max-xs:w-[80%] w-[60%]
                                            max-xxxs:text-[0.65rem] max-xxs:text-[0.75rem] max-xs:text-[1.2rem] text-[1.25rem] md:text-[1.25rem] lg:text-[1.6rem] xl:text-[2rem]
                                            '
                            >Construction execution is guided by defined processes, installation sequencing, and on-site coordination to maintain efficiency and project control.
                            </h3>

                            <p className='text-text12 max-xxxs:text-[0.55rem] max-xxs:text-[0.65rem] max-xs:text-[0.8rem] max-xs:mt-[-5%] mt-[2%] text-[0.7rem] md:text-[0.7rem] lg:text-[0.95rem] xl:text-[1rem] max-xs:px-[10%] max-xs:text-center capitalize'>
                                Defined processes. Controlled execution. Consistent on-site performance.
                            </p>
                        </section>

                        {/* -------------------------------------------------- */}
                        <section className='relative max-xs:h-[100vh] h-[500px] md:h-[500px] lg:h-[700px] xl:h-[920px] flex justify-center items-center max-xs:flex-col'>
                            <div className='relative max-xs:w-full w-[60%] h-full flex flex-col justify-center items-start overflow-hidden pl-[5%]'>
                                <h3 className='text-text1 max-xxs:w-[50%] max-xxs:leading-[2rem]  max-xs:text-[1.8rem] text-[1.25rem] md:text-[2.1rem] lg:text-[3.1rem] xl:text-[3.8rem]
                                            font-[Saved_By_Zero]'
                                >Delivery Leadership</h3>
                                <p
                                    className='text-text1 max-xxs:mt-[5%] max-xxs:text-[0.9rem] max-xs:text-[0.95rem] max-xs:text-text2 text-[0.7rem] md:text-[0.9rem] lg:text-[1.3rem] xl:text-[1.6rem] max-xxs:w-[90%] max-xs:w-[60%] md:pr-[25%] lg:pr-[10%] capitalize'
                                >A seamless end-to-end process ensuring precision, from initial site evaluation to final operational project delivery.</p>
                            </div>
                            <div className='relative max-xs:w-full w-[40%] h-full flex justify-center items-center'>
                                <div className='w-[75%] h-[70%] max-xs:w-[94%] max-xs:h-full'>
                                    <VideoComponent
                                        src={DeliveryLeadership}
                                        poster={DigitalSystem}
                                        className="h-full"
                                        isMuteIcon={false}
                                    />
                                </div>
                            </div>

                        </section>

                        {/* -------------------------------------------------- */}
                        <section className='relative max-xs:h-[100vh] h-[500px] md:h-[500px] lg:h-[700px] xl:h-[920px] flex justify-center items-center max-xs:flex-col'>
                            <div className='relative w-[40%] h-full flex justify-center items-center max-xs:hidden'>
                                <div className='w-[75%] h-[70%]'>
                                    <VideoComponent
                                        src={InfrastructureProjectLifecycle}
                                        poster={DigitalSystem}
                                        className="h-full"
                                        isMuteIcon={false}
                                    />
                                </div>
                            </div>
                            <div className='relative max-xs:w-full w-[60%] h-full flex flex-col justify-center items-start overflow-hidden pl-[5%]'>
                                <h3 className='text-text1 max-xxs:w-[50%] max-xs:leading-[2rem] md:leading-[2rem] lg:leading-[3rem] max-xs:text-[1.6rem] max-xs:w-[60%] text-[1.7rem] md:text-[1.7rem] lg:text-[2.6rem] xl:text-[3rem]
                                            font-[Saved_By_Zero]'
                                >Infrastructure Project Lifecycle</h3>
                                <p
                                    className='text-text1 max-xxs:mt-[5%] mt-[2%] max-xxs:text-[0.9rem] max-xs:text-[0.95rem] max-xs:text-text2 text-[0.7rem] md:text-[0.9rem] lg:text-[1.3rem] xl:text-[1.5rem] max-xxs:w-[90%] max-xs:w-[60%] md:pr-[25%] lg:pr-[10%] capitalize'
                                >A seamless end-to-end process ensuring precision, from initial site evaluation to final operational project delivery.</p>
                            </div>
                            <div className='relative max-xs:w-full w-[40%] h-full flex justify-center items-center xs:hidden'>
                                <div className='w-[55%] h-[60%] max-xs:w-[94%] max-xs:h-full'>
                                    <VideoComponent
                                        src={InfrastructureProjectLifecycle}
                                        poster={DigitalSystem}
                                        className="h-full"
                                        isMuteIcon={false}
                                    />
                                </div>
                            </div>
                        </section>

                        {/* -------------------------------------------------- */}
                        {/* <section className='relative max-xs:h-[100vh] h-[500px] md:h-[500px] lg:h-[700px] xl:h-[920px] flex flex-col gap-[2%] justify-center items-center'>

                            <div className='relative w-full h-[20%] flex flex-col justify-center items-center overflow-hidden '>
                                <h3 className='text-text1 max-xs:text-[1.6rem] text-[1.25rem] md:text-[2.1rem] lg:text-[3.1rem] xl:text-[3.8rem]
                                            font-[Saved_By_Zero]'
                                >Recognition</h3>
                                <p
                                    className='text-text1 max-xs:hidden text-[0.7rem] md:text-[0.9rem] lg:text-[1.3rem] xl:text-[1.6rem] capitalize text-center'
                                >We collaborate with trusted partners to ensure<br />seamless execution:</p>
                                <p
                                    className='text-text1 xs:hidden text-[0.8rem] max-xs:px-[10%] capitalize text-center'
                                >We collaborate with trusted partners to ensure seamless execution:</p>
                            </div>

                            <div className='w-full h-[50%] flex justify-center items-center gap-[2%] flex-wrap'>
                                {[...Array(4)].map((_, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="shrink-0 max-xs:w-[165px] w-[180px] md:w-[180px] lg:w-[260px] xl:w-[340px] max-xs:h-[50%] h-[90%] bg-bg3 max-xs:rounded-[0.4em]"
                                        ></div>
                                    )
                                })}
                            </div>
                            <p
                                className='text-text1 max-xs:hidden text-[0.7rem] md:text-[0.9rem] lg:text-[1.3rem] xl:text-[1.6rem] capitalize text-center mt-[2%]'
                            >These partnerships enable us to deliver end-to-end<br />solutions without compromise.</p>
                            <p
                                className='text-text1 xs:hidden text-[0.8rem] max-xs:px-[10%] capitalize text-center mt-[5%]'
                            >These partnerships enable us to deliver end-to-end solutions without compromise.</p>

                        </section> */}

                    </div>
                </Stickyroll>

            </div>

        </div>
    );
}

export default FeatureSection;
