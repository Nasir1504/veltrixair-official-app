

import {
    Icon1,
    Icon2,
    Icon3,
    Icon4,
} from "../../../assets/imgs/it-solutions";

import { VeltrixairIcon } from '../../../assets/imgs/home';


const OUR_CULTURE_BUILD_ON_DATA = [
    {
        name: "Custom IT solutions aligned with business operations",
        imgURL: Icon1
    },
    {
        name: "Secure and scalable enterprise infrastructure",
        imgURL: Icon2
    },
    {
        name: "Structured delivery with technical governance",
        imgURL: Icon3
    },
    {
        name: "Long-term support & monitoring with optimisation",
        imgURL: Icon4
    },

]

const WhyChoose = () => {
    return (
        <div>

            <section className='relative max-xs:h-[100vh] h-[500px] md:h-[550px] mdlg:h-[650px] lg:h-[740px] xl:h-[920px] flex flex-col justify-center items-center max-xs:gap-[2%] gap-[2%]'>
                {/* <img
                    className='max-xxs:w-[110px] max-xs:w-[140px] w-[120px] md:w-[120px] lg:w-[160px] xl:w-[200px]'
                    src={VeltrixairIcon}
                    alt=''
                    loading='lazy'
                    style={{ objectFit: "contain" }}

                /> */}
                <h3 className='text-center
                                max-xxxs:leading-[1.6rem] max-xxs:leading-[1.7rem] max-xs:leading-[1.8rem] leading-[1.1rem] md:leading-[1.9rem] mdlg:leading-[1.9rem] lg:leading-[2.2rem] xl:leading-[2.6rem]

                                                               '
                >
                    <span
                        className="text-text12 max-xxxs:text-[1.4rem] max-xxs:text-[1.6rem] max-xs:text-[1.8rem] text-[1.6rem] md:text-[1.8rem] mdlg:text-[2rem] lg:text-[2.4rem] xl:text-[2.4rem]"
                    >Why Choose</span><br />
                    <span className="font-[Saved_by_zero] text-text1 uppercase
                                    max-xxxs:text-[1.8rem] max-xxs:text-[2rem] max-xs:text-[2.2rem] text-[2.4rem] md:text-[2.4rem] mdlg:text-[2.6rem] lg:text-[2.8rem] xl:text-[3rem]
                    ">
                        VEltrixAir</span>
                </h3>
                <p className='text-text12 max-xxs:w-[80%] max-xs:w-[65%] w-[50%] text-center mb-[2em] font-[Roboto_Mono]
                                max-xxxs:text-[0.65rem] max-xxs:text-[0.72rem] max-xs:text-[0.95rem] text-[0.7rem] md:text-[0.7rem] mdlg:text-[0.8rem] lg:text-[0.95rem] xl:text-[1.2rem] capitalize'>
                    Businesses rely on Veltrixair for secure infrastructure, scalable systems, disciplined execution and long-term IT performance through critical environments
                </p>
                <div className='
                                 w-full max-xxxs:h-[65%] max-xxs:h-[60%] max-xs:h-[60%] h-[38%] md:h-[38%] mdlg:h-[39%] lg:h-[40%] max-xxs:gap-y-[0%] max-xs:gap-[8%] gap-[2%] overflow-scroll flex justify-center 
                                items-center flex-wrap'>
                    {/* grid grid-flow-col justify-start items-start */}
                    {OUR_CULTURE_BUILD_ON_DATA.map((item, i) => {
                        return (
                            <div
                                key={i}
                                className="shrink-0 max-xxxs:w-[150px] max-xxs:w-[160px] max-xs:w-[190px] w-[180px] md:w-[180px] mdlg:w-[210px] lg:w-[245px] xl:w-[290px] 
                                                    max-xxs:h-[45%] max-xs:h-[42%] h-[100%] rounded-[0.6em] md:rounded-[0.6em] lg:rounded-[0.9em] xl:rounded-[1.2em] p-0.5 flex justify-center items-center flex-wrap
                                        bg-[linear-gradient(90deg,rgba(185,181,181,1)_0%,rgba(44,44,44,1)_100%)]"
                            >
                                <div
                                    className='w-full h-full rounded-[0.6em] md:rounded-[0.6em] lg:rounded-[0.9em] xl:rounded-[1.2em] flex flex-col justify-center items-center gap-[4%]
                                                               bg-[linear-gradient(180deg,rgba(30,30,30,1)_0%,rgba(30,30,30,1)_33%,rgba(55,92,165,1)_110%,rgba(55,92,165,1)_120%)]'
                                >
                                    <div className='w-[60%] max-xxs:w-[60%] aspect-square bg-bg3 rounded-[0.6em] md:rounded-[0.6em] mdlg:rounded-[0.7em] lg:rounded-[0.9em] xl:rounded-[1.2rem] max-xxs:p-[15%] p-[20%]'>
                                        <img
                                            src={item.imgURL}
                                            className='w-full h-full'
                                            style={{ objectFit: "contain" }}
                                        />
                                    </div>
                                    <p className='lg:px-[10%] px-[8%]  max-xxs:px-[4%] text-center text-text1 max-xxxs:text-[0.5rem] max-xxs:text-[0.5rem] max-xs:text-[0.65rem] text-[0.5rem] md:text-[0.55rem] mdlg:text-[0.65rem] lg:text-[0.7rem] xl:text-[0.85rem]'
                                    >{item.name}</p>

                                </div>

                            </div>
                        )
                    })}
                </div>

            </section>
        </div>
    );
}

export default WhyChoose;



