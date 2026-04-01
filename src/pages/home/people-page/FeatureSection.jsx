
import { VideoComponent } from '../../../components';
// Images
import { DigitalSystem } from "../../../assets/imgs/home";

import { VeltrixairIcon } from '../../../assets/imgs/home';
import {
    TeamInto,
    PeopleCard1,
    PeopleCard2,
    PeopleCard3,
    PeopleCard4,
    WhyWorkWithUs,

    Safety,
    Ownership,
    Collaboration,
    Learning,
    Integrity,
} from "../../../assets/imgs/home";


const OUR_CULTURE_BUILD_ON_DATA = [
    {
        name: "Safety, Reliability and Performance Standards",
        imgURL: Safety,
    },
    {
        name: "Ownership, Execution and Delivering Results",
        imgURL: Ownership,
    },
    {
        name: "Collaboration Across Every Role and Function",
        imgURL: Collaboration,
    },
    {
        name: "Continuous Learning and Professional Growth",
        imgURL: Learning,
    },
    {
        name: "Integrity, Excellence and Trusted Delivery",
        imgURL: Integrity,
    },

]

const INDIVIDUALS_CARD_DATA = [
    {
        heading: "Ownership and Accountability",
        content: "Taking responsibility for outcomes across every discipline — from enterprise IT systems and cloud infrastructure to construction projects, site operations, and structural delivery.",
        imgURL: PeopleCard1,
    },
    {
        heading: "Structured Problem Solving",
        content: "Approaching every challenge with clarity and logic — whether resolving complex IT infrastructure issues or engineering solutions for large-scale construction and civil projects.",
        imgURL: PeopleCard2,
    },
    {
        heading: "Collaborative Execution",
        content: "Working across teams, technologies, and trades to ensure seamless delivery — from enterprise software deployment and network systems to steel structures and fit-out projects.",
        imgURL: PeopleCard3,
    },
    {
        heading: "Continuous Learning and Growth",
        content: "Building expertise through ongoing training and development across cloud, cybersecurity, DevOps, construction management, and enterprise technology environments.",
        imgURL: PeopleCard4,
    },

]

const OUR_TEAM_DATA = [
    { profile: "Civil & structural engineers" },
    { profile: "Mechanical & crane installation experts" },
    { profile: "Site supervisors & safety officers" },
    { profile: "Project management professionals" },

]


const FeatureSection = () => {

    return (
        <div
            className="relative w-full "

        >
            <div className='relative z-5'>
                <div className='w-full h-full flex flex-col'>
                    {/* -----------Sec01--------------------------- */}
                    <section className='relative max-xs:h-[100vh] h-[500px] md:h-[550px] lg:h-[740px] xl:h-[920px] flex flex-col justify-center items-center max-xs:gap-[2%] gap-[5%]'>
                        <img
                            className='max-xxs:w-[110px] max-xs:w-[160px] w-[120px] md:w-[120px] lg:w-[160px] xl:w-[200px]'
                            src={VeltrixairIcon}
                            alt=''
                            loading='lazy'
                            style={{ objectFit: "contain" }}

                        />
                        <h3 className='text-text1 text-center xl:w-[40%] lg:w-[50%] md:w-[40%] max-xs:w-[80%] max-xxs:w-[90%]
                                            max-xxxs:text-[0.8rem] max-xxs:text-[1rem] text-[1.25rem] md:text-[1.25rem] lg:text-[2rem] xl:text-[2.2rem] font-bold
                                            '
                        >Shape the Future of Technology and Infrastructure  with Veltrixair
                        </h3>
                        <p className='text-text12 max-xs:text-[0.8rem] text-[0.7rem] md:text-[0.7rem] lg:text-[0.95rem] xl:text-[1rem] capitalize'>
                            Our culture is built on:
                        </p>
                        <div className='
                        w-full max-xs:h-[50%] md:h-[30%] lg:h-[35%] gap-[2%] overflow-scroll flex justify-center 
                        items-center flex-wrap'>
                            {/* grid grid-flow-col justify-start items-start */}
                            {OUR_CULTURE_BUILD_ON_DATA.map((item, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="shrink-0 max-xxxs:w-[100px] max-xxs:w-[120px] max-xs:w-[160px] w-[125px] md:w-[125px] lg:w-[185px] xl:w-[260px] max-xxs:h-[40%] max-xs:h-[45%] h-[95%] rounded-[0.6em] md:rounded-[0.6em] lg:rounded-[0.9em] xl:rounded-[1.2em] p-0.5 flex justify-center items-center flex-wrap
                                                        bg-[linear-gradient(90deg,rgba(185,181,181,1)_0%,rgba(44,44,44,1)_100%)]"
                                    >
                                        <div
                                            className='w-full h-full rounded-[0.6em] md:rounded-[0.6em] lg:rounded-[0.9em] xl:rounded-[1.2em] flex flex-col justify-center items-center gap-[4%]
                                            bg-[linear-gradient(180deg,rgba(30,30,30,1)_0%,rgba(30,30,30,1)_33%,rgba(55,92,165,1)_110%,rgba(55,92,165,1)_120%)]'
                                        >
                                            <div className='w-[70%] aspect-square bg-bg3 rounded-[0.6em] md:rounded-[0.6em] lg:rounded-[0.9em] xl:rounded-[1.2rem] p-[20%]'>
                                                <img
                                                    src={item.imgURL}
                                                    className='w-full h-full'
                                                    style={{ objectFit: "contain" }}
                                                />
                                            </div>
                                            <p className='px-[2%] text-center text-text1 max-xxs:text-[0.5rem] max-xs:text-[0.6rem] text-[0.5rem] md:text-[0.5rem] lg:text-[0.7rem] xl:text-[0.85rem]'
                                            >{item.name}</p>

                                        </div>

                                    </div>
                                )
                            })}
                        </div>

                        <p className='text-text12 max-xs:px-[5%] max-xs:text-center max-xs:text-[0.8rem] text-[0.7rem] md:text-[0.7rem] lg:text-[0.95rem] xl:text-[1rem] capitalize'>
                            Strong teams build stronger infrastructure — and more reliable technology.
                        </p>

                    </section>

                    {/* -----------Sec02--------------------------- */}

                    <section className='relative w-full max-xxs:h-[125vh] max-xs:h-[135vh] h-[500px] md:h-[720px] lg:h-[980px] xl:h-[1260px] flex flex-col gap-[5%] justify-start items-start pt-[4%] pl-[4%]'>
                        <div className="w-[96%] h-3/2 max-xs:w-[96%] max-xs:aspect-2/1
                         bg-bg2 rounded-[1rem] overflow-hidden">
                            <VideoComponent
                                src={TeamInto}
                                poster={DigitalSystem}
                                className="h-full w-full"
                                isMuteIcon={false}
                            />
                        </div>
                        <h3 className="text-text1 max-xs:hidden text-[1.25rem] md:text-[1.25rem] lg:text-[1.8rem] xl:text-[2rem] font-medium">
                            Veltrixair builds with ownership—<br />IT systems to lasting infrastructure.
                        </h3>
                        <h3 className="text-text1 max-xxs:text-[0.9rem] max-xs:text-[1.2rem] xs:hidden max-xs:pr-[5%]">
                            Veltrixair builds with ownership—<br />IT systems to lasting infrastructure.
                        </h3>

                        <div className="relative w-full h-full flex flex-col gap-[5%] justify-start items-start ">
                            <p className="text-text1 capitalize max-xxs:text-[0.65rem] max-xs:text-[0.8rem] text-[0.7rem] md:text-[0.7rem] lg:text-[0.95rem] xl:text-[1rem]">
                                At our core, we value:
                            </p>

                            <div className="relative w-full h-full">
                                <div className="w-full h-full flex gap-[3%] justify-start items-start overflow-x-scroll overflow-x-hidden max-xs:flex-col">

                                    {
                                        INDIVIDUALS_CARD_DATA.map((item, i) => {
                                            return (
                                                <div
                                                    key={i}
                                                    className="relative shrink-0 flex justify-center items-center max-xxs:rounded-[0.5rem] max-xs:rounded-[0.8rem] rounded-[1rem] overflow-hidden p-0.5
                                                max-xxxs:h-[145px] max-xxs:h-[145px] max-xs:w-[96%] max-xs:h-[180px] w-[500px] h-[180px] md:w-[550px] md:h-[200px] lg:w-[650px] lg:h-[240px] xl:w-[750px] xl:h-[280px]
                                                bg-[linear-gradient(90deg,rgba(255,255,255,1)_0%,rgba(45,45,45,1)_110%)]"
                                                >
                                                    <div className="relative w-full h-full flex justify-center items-center max-xxs:rounded-[0.5rem] max-xs:rounded-[0.8rem] rounded-[1rem] pr-[1%] pl-[3%]
                                                    bg-[linear-gradient(334deg,rgba(55,92,165,1)_6%,rgba(12,12,12,1)_54%,rgba(30,30,30,1)_100%)]">

                                                        <div className="w-[55%] flex flex-col justify-center items-start h-full pr-[4%] gap-[5%]">
                                                            <p className="text-text1 capitalize max-xxs:text-[0.8rem] max-xs:text-[0.85rem] text-[0.7rem] md:text-[0.7rem] lg:text-[0.95rem] xl:text-[1.4rem] font-bold">{item.heading}</p>
                                                            <p className="text-text2  max-xs:text-[0.55rem] max-xs:text-[0.6rem] text-[0.7rem] md:text-[0.7rem] lg:text-[0.95rem] xl:text-[1rem]">{item.content}</p>
                                                        </div>
                                                        <div className="w-[42%] h-[86%] bg-bg2 rounded-[1rem] overflow-hidden">
                                                            <VideoComponent
                                                                src={item.imgURL}
                                                                poster={DigitalSystem}
                                                                className="h-full w-full"
                                                                isMuteIcon={false}
                                                            />
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        })
                                    }

                                </div>

                            </div>

                        </div>
                    </section>


                    {/* -----------Sec03--------------------------- */}
                    <section className='relative max-xs:h-[100vh] h-[500px] md:h-[500px] lg:h-[700px] xl:h-[920px] flex justify-center items-center  max-xs:flex-col'>

                        <div className='relative max-xs:w-full w-[60%] h-full flex flex-col justify-center items-start overflow-hidden pl-[5%] gap-[5%]'>
                            <h3 className='text-text1 max-xs:text-[1.5rem] max-xs:leading-[1.5rem] text-[1.25rem] md:text-[2.1rem] lg:text-[3.1rem] xl:text-[3.8rem] md:leading-[2rem] lg:leading-[2.8rem] xl:leading-[3.6rem]
                                            '
                            >
                                <span className='font-[Saved_By_Zero]'>Why</span><br />
                                <span>work with us</span>
                            </h3>
                            <p
                                className='text-text1 max-xs:text-[0.74rem] max-xs:text-text2 max-xxs:w-[90%] max-xs:w-[80%] max-xxxs:text-[0.7rem] max-xxs:text-[0.8rem] max-xs:text-[1rem]  text-[1rem] md:text-[1rem] lg:text-[1.3rem] xl:text-[1.6rem] pr-[10%] capitalize'
                            >
                                At Veltrixair, our team drives high-impact infrastructure, takes full ownership of delivery, and grows through real project experience.
                            </p>
                        </div>
                        <div className='relative max-xs:w-full w-[40%] h-full flex justify-center items-center'>
                            <div className='w-[75%] h-[70%] max-xs:w-[94%] max-xs:h-full'>
                                <VideoComponent
                                    src={WhyWorkWithUs}
                                    poster={DigitalSystem}
                                    className="h-full w-full"
                                    isMuteIcon={false}
                                />
                            </div>
                        </div>
                    </section>

                    {/* -----------Sec04--------------------------- */}
                    {/* <section className='relative max-xs:h-[100vh] h-[500px] md:h-[500px] lg:h-[700px] xl:h-[920px] flex flex-col max-xs:gap-[4%] gap-[3%] justify-center items-center'>

                        <div className='relative w-full h-[20%] flex flex-col justify-center items-center overflow-hidden '>
                            <h3 className='text-text1 max-xxs:text-[1.1rem] text-[1.25rem] md:text-[2.1rem] lg:text-[3.1rem] xl:text-[3.4rem]
                                            font-[Saved_By_Zero]'
                            >Meet the Team</h3>
                            <p
                                className='text-text1 max-xs:hidden max-xs:text-[0.5rem] text-[0.7rem] md:text-[0.9rem] lg:text-[1.3rem] xl:text-[1.6rem] capitalize text-center'
                            >Our strength lies in a multidisciplinary team of<br />engineers, project managers, and execution specialists.</p>
                            <p
                                className='text-text1 xs:hidden max-xxs:text-[0.6rem] text-[0.8rem] capitalize text-center'
                            >Our strength lies in a multidisciplinary team of<br />engineers, project managers, and execution specialists.</p>

                        </div>
                        <div
                            className="bg-[linear-gradient(90deg,rgba(110,110,110,1)_0%,rgba(102,102,102,1)_100%)] rounded-full p-0.5 shadow shadow-md shadow-bg1"
                        >
                            <div
                                className='max-xs:px-[2em] max-xs:py-[0.35em] px-[2em] py-[0.3em] rounded-full flex flex-col justify-center items-center gap-[4%] cursor-pointer
                                            bg-[linear-gradient(-90deg,rgba(30,30,30,1)_0%,rgba(30,30,30,1)_0%,rgba(227,96,2,1)_110%,rgba(227,96,2,1)_120%)]'
                            >
                                <p className=' text-center text-text1 max-xs:text-[0.8rem] text-[1rem] md:text-[1rem] lg:text-[1.1rem] xl:text-[1.4rem] flex'
                                >Join Us</p>

                            </div>

                        </div>

                           <div className='relative w-full h-[50%] flex justify-center items-center gap-[2%] flex-wrap'>
                            {OUR_TEAM_DATA.map((item, i) => {
                                return (
                                    <div
                                        key={i}
                                        className="shrink-0 flex flex-col gap-[2%] p-[0.8%] max-xs:w-[165px] w-[180px] md:w-[180px] lg:w-[260px] xl:w-[340px] max-xs:h-[50%] h-[90%] bg-bg3 max-xs:rounded-[0.2em] "
                                    >
                                        <div className="w-full h-[74%]"></div>
                                        <div className="w-full h-[23%] text-center flex items-center
                                                         max-xs:text-[0.7rem] text-[0.7rem] md:text-[0.7rem] lg:text-[0.95rem] xl:text-[1rem]
                                        ">{item.profile}</div>

                                    </div>
                                )
                            })}
                        </div>
                        <p
                            className='text-text1 max-xxs:text-[0.7rem] max-xs:text-[0.9rem] text-[0.9rem] md:text-[0.9rem] lg:text-[1.3rem] xl:text-[1.6rem] capitalize text-center'
                        >Every role matters. Every delivery counts.</p>
                       
                    </section> */}

                </div>
            </div>

        </div>
    );
}

export default FeatureSection;
