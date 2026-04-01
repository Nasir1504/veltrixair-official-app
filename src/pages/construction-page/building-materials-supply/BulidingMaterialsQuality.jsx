
import { VideoComponent } from "../../../components";

//video file
import videoFile from "../../../assets/videos/construction-homepage-video.mp4";

//poster
import { DigitalSystem } from "../../../assets/imgs/home";


const BulidingMaterialsQuality = () => {
    return (
        <div
            className="engineering-future-main relative w-full max-xs:h-[80vh] h-[500px] md:h-[500px] lg:h-[700px] xl:h-[900px] bg-bg1 flex items-center justify-between overflow-hidden"
        >
            <VideoComponent
                src={videoFile}
                poster={DigitalSystem}
                className="h-full"
            />

            <div className="absolute pl-[5%] top-[30%] 
                            max-xs:top-[30%] max-xs:left-[5%] max-xs:pl-0">
                <h2
                    className="w-full text-text1 flex flex-col leading-10 max-xs:leading-[8vw] md:leading-10 lg:leading-12 xl:leading-15 max-xs:text-left"
                >

                    <span className="font-bold text-[2rem] md:text-[1.8rem] lg:text-[2.5rem] xl:text-[3rem]
                                        max-xs:text-[2rem] max-xxs:text-[1.2rem]"
                    >Reliable Building Material</span>
                    <span className="font-bold text-[1.8rem] md:text-[1.8rem] lg:text-[2.5rem] xl:text-[3rem]
                                        max-xs:text-[2rem] max-xxs:text-[1.2rem]"
                    >for Industrial Projects</span>
                </h2>
                <p className="max-xs:mt-[5vw] mt-[1em] max-xs:text-[0.9rem] max-xxxs:text-[0.65rem] max-xxs:text-[0.8rem] text-[0.9rem] md:text-[0.9rem] lg:text-[1.3rem] xl:text-[1.6rem] max-xs:text-left text-text1 max-xs:pr-[12%] max-xs:w-[100%] w-[46%] md:w-[46%] lg:w-[44%] xl:w-[42%]
                            ">
                    Construction material, Building material supplier in Saudi Arabia. A reliable supply network for certified construction materials and industrial-grade components across Saudi Arabia (KSA), built to support quality and project continuity.
                </p>
                <div className="flex gap-2 max-xs:gap-8 max-xs:mt-[20%] mt-[2%] max-xs:flex-col max-xs:items-left">

                    <button
                        className="infrastructure-card-main relative max-xs:w-[65vw] max-xxs:h-[12vw] max-xs:w-[40vw] max-xs:h-[8vw] w-[240px] md:w-[240px] md:h-[35px] lg:w-[340px] lg:h-[60px] xl:w-[380px] xl:h-[65px] 
                                    bg-bg6 max-xs:rounded-[1vw] rounded-[0.5em] md:rounded-[0.2em] flex overflow-hidden p-0.5
                                    max-xs:font-medium cursor-pointer"
                    >

                        <div className="w-full h-full bg-bg6 max-xs:rounded-[1vw] rounded-[0.5em] md:rounded-[0.5em]">
                            <div
                                className="w-full h-full max-xs:rounded-[1vw] rounded-[0.5em] md:rounded-[0.5em] overflow-hidden 
                                            flex justify-center items-center gap-4
                                            bg-bg6
                                            "
                            >
                                <p className="text-text1 max-xxs:text-[0.75rem] max-xs:text-[0.8rem] text-[0.8rem] md:text-[0.8rem] lg:text-[1.1rem] xl:text-[1.2rem]">
                                    Enquire About Material Supply
                                </p>

                            </div>
                        </div>
                    </button>

                </div>
            </div>
            <p
                className="absolute pl-[5%] bottom-[5%] text-text1 max-xs:text-[2vw] text-[0.75rem] md:text-[0.75rem] lg:text-[1.1rem] xl:text-[1.2rem]"
            >
                Where Technology, Infrastructure & Security Converge.
            </p>

        </div >
    );
}

export default BulidingMaterialsQuality;
