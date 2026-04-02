
import { VideoComponent } from "../../components";

//poster
import { DigitalSystem } from "../../assets/imgs/home";


//video file
import { ITmobilevideo } from "../../assets/imgs/it-solutions";
const VideoFile = "https://web1.veltrixair.com/videos/IT/IT-home-page-video.mp4";


// --------------

const SmarterDigitalSystems = () => {
    return (
        <div
            className="engineering-future-main relative w-full h-[95vh] bg-bg1 flex items-center justify-between overflow-hidden"
        >
            <VideoComponent
                src={VideoFile}
                poster={DigitalSystem}
                className="h-full max-xs:hidden"
            />

            <VideoComponent
                src={ITmobilevideo}
                poster={DigitalSystem}
                className="h-full xs:hidden"
            />

            <div className="absolute flex flex-col gap-[1.2rem] md:gap-[1.2rem] lg:gap-[1.8rem] xl:gap-[2rem] pl-[5%] top-[35%] max-xs:top-[50%]">
                <div
                    className="absolute w-[60%] rounded-full h-[120%] bg-[#000000] blur-[50px] opacity-50"
                />
                <button
                    className="z-1 infrastructure-card-main relative w-[250px] h-[35px] md:w-[250px] md:h-[35px] lg:w-[300px] lg:h-[40px] xl:w-[350px] xl:h-[45px] 
                                    bg-[linear-gradient(-195deg,rgba(7,39,101,1)_30%,rgba(138,143,152,1)_100%)] max-xs:rounded-[1vw] rounded-[0.5em] md:rounded-[0.5em] flex overflow-hidden p-0.5
                                               max-xs:w-[48vw] max-xs:h-[6vw]"
                >


                    <div className="w-full h-full bg-bg1 max-xs:rounded-[1vw] rounded-[0.5em] md:rounded-[0.5em]">
                        <div
                            className="w-full h-full max-xs:rounded-[1vw] rounded-[0.5em] md:rounded-[0.5em] overflow-hidden 
                                            flex justify-center items-center gap-4
                                            bg-[linear-gradient(350deg,rgba(30,30,30,1)_0%,rgba(30,30,30,1)_52%,rgba(86,88,93,0.52)_95%,rgba(138,143,152,0.3)_100%)]
                                            "
                        >
                            <p className="text-text1 flex justify-center items-center text-[0.8rem] max-xs:text-[2.6vw] lg:text-[1.1rem] xl:text-[1.2rem] capitalize">
                                IT Infrastructure Services
                            </p>

                        </div>
                    </div>
                </button>
                <h2
                    className="relative z-1 w-full text-text1 flex flex-col leading-10 max-xs:leading-[8vw] md:leading-10 lg:leading-12 xl:leading-15"
                >

                    <em className="font-bold text-[2rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3.2rem]
                                        max-xs:text-[6vw]"
                    >IT Infrastructure &</em>
                    <span className="font-bold text-[2rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3.2rem]
                                        max-xs:text-[6vw]"
                    >cloud systems </span>
                </h2>
                <p className="reltive z-1 text-[1.25rem] md:text-[1rem] max-xs:text-[3vw] lg:text-[1.3rem] xl:text-[1.6rem] text-text1 w-[60%]
                            ">for secure, scalable, and high-performance enterprise operations.</p>

            </div>
        </div >
    );
}

export default SmarterDigitalSystems;
