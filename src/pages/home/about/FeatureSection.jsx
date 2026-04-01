import { useState, useEffect } from 'react';
import { useScreen } from '../../../components/useScreen';
import { Stickyroll } from '@stickyroll/react';
import { VideoComponent } from '../../../components';
// Images
import { DigitalSystem } from "../../../assets/imgs/home";
import VideoFile from "../../../assets/videos/nature-background-videos.mp4";

import { VeltrixairIcon, BuildAndDeliver } from '../../../assets/imgs/home';
import {
    BgGroup

} from '../../../assets/imgs/construction';

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
                                className='w-[200px] max-xs:w-[28%]'
                                src={VeltrixairIcon}
                                alt=''
                                loading='lazy'
                                style={{ objectFit: "contain" }}

                            />
                            <h3 className='text-text1 text-center w-[50%] max-xs:w-[70%] max-xxs:w-[80%]
                                           max-xs:hidden text-[1rem] text-[1.25rem] md:text-[1.25rem] lg:text-[1.6rem] xl:text-[2rem]
                                            '
                            >Defined processes. Secure architecture.<br />Scalable, consistent performance.
                            </h3>
                            <h3 className='text-text1 text-center max-xs:w-[90%] max-xxs:w-[80%]
                                            max-xxs:text-[1.2rem] text-[2rem] xs:hidden
                                            '
                            >Defined processes. Secure architecture. Scalable, consistent performance.
                            </h3>

                            {/* <p className='text-text12 max-xs:text-[0.5rem] text-[0.7rem] md:text-[0.7rem] lg:text-[0.95rem] xl:text-[1rem] max-xs:text-[0.65rem] max-xs:px-[10%] max-xs:text-center capitalize'>
                                because who likes scrolling through boring portfolios anyway?</p> */}

                        </section>

                        {/* -------------------------------------------------- */}
                        {/* <section className='relative max-xs:h-[100vh] h-[500px] md:h-[500px] lg:h-[700px] xl:h-[920px] flex justify-center items-center max-xs:flex-col'>
                            <div className='relative max-xs:w-full w-[60%] h-full flex flex-col justify-center items-start overflow-hidden pl-[5%]'>
                                <h3 className='text-text1 text-[1.25rem] md:text-[2.1rem] lg:text-[3.1rem] xl:text-[3.8rem]
                                            font-[Saved_By_Zero]'
                                >Leadership</h3>
                                <p
                                    className='text-text1 max-xs:text-[0.74rem] max-xs:text-text2 text-[0.7rem] md:text-[0.9rem] lg:text-[1.3rem] xl:text-[1.6rem] pr-[10%] capitalize'
                                >Our leadership team brings together deep expertise in engineering, project management, and large-scale execution. With decades of combined experience, they drive innovation, ensure operational excellence, and uphold a culture of accountability across every project.</p>
                            </div>
                            <div className='relative max-xs:w-full w-[40%] h-full flex justify-center items-center'>
                                <div className='w-[55%] h-[60%] max-xs:w-[94%] max-xs:h-full'>
                                    <VideoComponent
                                        src={VideoFile}
                                        poster={DigitalSystem}
                                        className="h-full"
                                        isMuteIcon={false}
                                    />
                                </div>
                            </div>

                        </section> */}

                        {/* -------------------------------------------------- */}
                        <section className='relative max-xs:h-[100vh] h-[500px] md:h-[500px] lg:h-[700px] xl:h-[920px] flex justify-center items-center max-xs:flex-col'>
                            <div className='relative w-[40%] h-full flex justify-center items-center max-xs:hidden'>
                                <div className='w-[65%] h-[70%]'>
                                    {/* <VideoComponent
                                        src={VideoFile}
                                        poster={DigitalSystem}
                                        className="h-full"
                                        isMuteIcon={false}
                                    /> */}
                                    <img
                                        src={BuildAndDeliver}
                                        style={{ objectFit: "cover" }}
                                        alt=''
                                        className='h-full'

                                    />
                                </div>
                            </div>
                            <div className='relative max-xs:w-full w-[60%] h-full flex flex-col justify-center items-start overflow-hidden pl-[5%]'>
                                <h3 className='text-text1 max-xxs:text-[1.2rem] max-xs:text-[1.6rem] text-[2.1rem] md:text-[2.1rem] lg:text-[2.8rem] xl:text-[3.2rem]
                                            font-[Saved_By_Zero]'
                                >How We Build & Deliver</h3>
                                <p
                                    className='text-text1 max-xs:mt-[5%] max-xxxs:text-[0.75rem] max-xxs:text-[0.8rem] max-xs:text-[1rem] max-xs:text-text2 text-[0.7rem] md:text-[0.9rem] lg:text-[1.3rem] xl:text-[1.6rem] pr-[25%] capitalize'
                                >
                                    From planning and design to deployment, security, monitoring, and support — Veltrixair delivers structured, end-to-end execution across construction and enterprise IT projects.
                                </p>
                            </div>
                            <div className='relative max-xs:w-full w-[40%] h-full flex justify-center items-center xs:hidden'>
                                <div className='xs:w-[65%] xs:h-[70%] max-xs:w-[90%]'>
                                    {/* <VideoComponent
                                        src={VideoFile}
                                        poster={DigitalSystem}
                                        className="h-full"
                                        isMuteIcon={false}
                                    /> */}
                                    <img
                                        src={BuildAndDeliver}
                                        style={{ objectFit: "cover" }}
                                        alt=''
                                        className='h-full'

                                    />
                                </div>
                            </div>
                        </section>

                        {/* -------------------------------------------------- */}
                        <section className='relative max-xs:h-[100vh] h-[500px] md:h-[500px] lg:h-[700px] xl:h-[920px] flex flex-col gap-[2%] justify-center items-center'>

                            <div className='relative w-full h-full flex flex-col justify-center items-center overflow-hidden '>
                                <h3 className='text-text1 max-xxxs:text-[1.2rem] max-xxs:text-[1.3rem] max-xxxs:leading-[1.3rem] max-xs:text-[1.6rem] text-[1.25rem] md:text-[2.1rem] lg:text-[3.1rem] xl:text-[3.8rem] text-center max-xs:leading-[1.8rem] md:leading-[2.4rem] lg:leading-[3rem] xl:leading-[3.8rem]
                                            font-[Saved_By_Zero]'
                                >Strategic & Technical<br />Partnerships</h3>
                                <p
                                    className='text-text1 mt-[2%] w-[60%] max-xs:w-[80%] max-xs:mt-[2%] max-xxs:text-[0.7rem]  max-xs:text-[0.9rem] text-[0.9rem] md:text-[0.9rem] lg:text-[1.3rem] xl:text-[1.6rem] text-center'
                                >Trusted partnerships across construction, engineering, and technology — enabling reliable execution, secure deployment, and long-term performance.</p>
                            </div>

                            {/* <div className='w-full h-[50%] flex justify-center items-center gap-[2%] flex-wrap'>
                                {[...Array(4)].map((_, i) => {
                                    return (
                                        <div
                                            key={i}
                                            className="shrink-0 max-xs:w-[165px] w-[180px] md:w-[180px] lg:w-[260px] xl:w-[340px] max-xs:h-[50%] h-[90%] bg-bg3 max-xs:rounded-[0.4em]"
                                        ></div>
                                    )
                                })}
                            </div> */}
                            {/* <p
                                className='text-text1 max-xs:hidden text-[0.7rem] md:text-[0.9rem] lg:text-[1.3rem] xl:text-[1.6rem] capitalize text-center mt-[2%]'
                            >These partnerships enable us to deliver end-to-end<br />solutions without compromise.</p>
                            <p
                                className='text-text1 xs:hidden text-[0.8rem] max-xs:px-[10%] capitalize text-center mt-[5%]'
                            >These partnerships enable us to deliver end-to-end solutions without compromise.</p> */}

                        </section>

                    </div>
                </Stickyroll>

            </div>

        </div>
    );
}

export default FeatureSection;
