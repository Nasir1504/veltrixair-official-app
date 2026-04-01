
import { VideoComponent } from "./index";

//video file
import videoFile from "../../assets/videos/construction-homepage-video.mp4";

//poster
import { DigitalSystem } from "../../assets/imgs/home";

const ENGINEERIGN_SOLUTIONS_DATA = [
    { name: "Industrial Fit-Outs" },
    { name: "Overhead Crane Systems" },
    { name: "Building Materials Supply" },

]

const EngineeringSolutions = () => {
    return (
        <div
            className="engineering-future-main relative w-full max-xs:h-[80vh] h-[500px] md:h-[500px] lg:h-[700px] xl:h-[900px] bg-bg1 flex items-center justify-between overflow-hidden"
        >
            <VideoComponent
                src={videoFile}
                poster={DigitalSystem}
                className="h-full"
            />

            <div className="absolute pl-[5%] top-[25%]
                            max-xxs:top-[30%] max-xs:top-[20%] max-xs:left-[5%] max-xs:pl-0">
              
                <h2
                    className="w-full text-text1 flex flex-col leading-16 max-xs:leading-[8vw] md:leading-12 lg:leading-16 xl:leading-20"
                >

                    <span className="font-bold text-[2.5rem] md:text-[2rem] lg:text-[2.8rem] xl:text-[3.5rem]
                                        max-xs:text-[5vw]"
                    >Industrial Construction</span>
                    <span className="font-bold text-[2.5rem] md:text-[2rem] lg:text-[2.8rem] xl:text-[3.5rem]
                                        max-xs:text-[5vw]"
                    >& Engineering Solutions</span>
                </h2>
                <p className="mt-[0.2em] text-[1.25rem] max-xs:text-[2.5vw] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.6rem] max-xs:w-[65%] w-[65%] md:w-[60%] lg:w-[60%] text-text1
                             capitalize">Industrial construction and engineering projects across Saudi Arabia.</p>
                <div className="flex gap-2 max-xs:w-[80%] w-[60%] flex-wrap max-xxs:gap-2 max-xs:gap-4 md:mt-[3%] mt-[5%] max-xs:items-start">
                    {
                        ENGINEERIGN_SOLUTIONS_DATA.map((item, i) => {
                            return (
                                <button
                                    key={i}
                                    className="infrastructure-card-main relative w-[240px] md:w-[240px] md:h-[35px] lg:w-[320px] lg:h-[40px] xl:w-[340px] xl:h-[45px] 
                                    bg-[linear-gradient(-195deg,rgba(7,39,101,1)_30%,rgba(138,143,152,1)_100%)] max-xs:bg-[linear-gradient(-195deg,rgba(227,96,2,1)_30%,rgba(138,143,152,1)_100%)] 
                                    max-xs:rounded-[1vw] rounded-[0.5em] md:rounded-[0.5em] flex overflow-hidden p-0.5
                                               max-xs:w-[36vw] max-xs:h-[6vw]"
                                >

                                    <div className="w-full h-full bg-bg1 max-xs:rounded-[1vw] rounded-[0.5em] md:rounded-[0.5em]">
                                        <div
                                            className="w-full h-full max-xs:rounded-[1vw] rounded-[0.5em] md:rounded-[0.5em] overflow-hidden 
                                            flex justify-center items-center gap-4
                                            bg-[linear-gradient(350deg,rgba(30,30,30,1)_0%,rgba(30,30,30,1)_52%,rgba(86,88,93,0.52)_95%,rgba(138,143,152,0.3)_100%)]
                                            "
                                        >
                                            <p className="text-text1 text-[0.8rem] md:text-[0.8rem] max-xs:text-[2.2vw] lg:text-[1.1rem] xl:text-[1.2rem]">
                                                {item.name}
                                            </p>

                                        </div>
                                    </div>
                                </button>
                            )
                        })
                    }


                </div>
            </div>
            <p
                className="absolute bottom-[5%] text-text1 w-[50%] left-[5%] max-xs:text-[2.5vw] text-[0.8rem] md:text-[0.7rem] lg:text-[1.2rem] xl:text-[1.5rem]"
            >
                Industrial Construction in Saudi Arabia, Powered by Precision Engineering and SASO Compliance.
            </p>

        </div >
    );
}

export default EngineeringSolutions;
