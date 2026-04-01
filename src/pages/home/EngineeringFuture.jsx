
import { VideoComponent } from "./index";

//video file
import videoFile from "../../assets/videos/main-hompage-video.mp4";

//poster
import { DigitalSystem } from "../../assets/imgs/home";

const ENGINEERIGN_FUTURE_DATA = [
    { name: "Construction" },
    { name: "IT" },
    { name: "Consultancy" },

]

const EngineeringFuture = () => {
    return (
        <div
            className="engineering-future-main relative w-full max-xs:h-[80vh] h-[500px] md:h-[500px] lg:h-[700px] xl:h-[900px] bg-bg1 flex items-center justify-between overflow-hidden"
        >
            <VideoComponent
                src={videoFile}
                poster={DigitalSystem}
                className="h-full"
            />

            <div className="absolute pl-[5%] top-[40%] max-xs:top-[60%]">
                <h2
                    className="w-full text-text1 flex flex-col leading-16 max-xs:leading-[8vw] md:leading-16 lg:leading-20 xl:leading-25"
                >

                    <em className="font-bold text-[3.5rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem]
                                        max-xs:text-[7.6vw]"
                    >Engineering</em>
                    <span className="text-[3.5rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5rem] font-['Saved_By_Zero']
                                        max-xs:text-[7.6vw]"
                    >The FUTURe</span>
                </h2>
                <div className="flex gap-2 mt-[5%]">
                    {
                        ENGINEERIGN_FUTURE_DATA.map((item, i) => {
                            return (
                                <button
                                    key={i}
                                    className="infrastructure-card-main relative md:w-[140px] md:h-[35px] lg:w-[170px] lg:h-[40px] xl:w-[200px] xl:h-[45px] 
                                    bg-[linear-gradient(-195deg,rgba(7,39,101,1)_30%,rgba(138,143,152,1)_100%)] max-xs:rounded-[1vw] rounded-[0.5em] md:rounded-[0.5em] flex overflow-hidden p-0.5
                                               max-xs:w-[18vw] max-xs:h-[6vw]"
                                >

                                    <div className="w-full h-full bg-bg1 max-xs:rounded-[1vw] rounded-[0.5em] md:rounded-[0.5em]">
                                        <div
                                            className="w-full h-full max-xs:rounded-[1vw] rounded-[0.5em] md:rounded-[0.5em] overflow-hidden 
                                            flex justify-center items-center gap-4
                                            bg-[linear-gradient(350deg,rgba(30,30,30,1)_0%,rgba(30,30,30,1)_52%,rgba(86,88,93,0.52)_95%,rgba(138,143,152,0.3)_100%)]
                                            "
                                        >
                                            <p className="text-text1 flex justify-center items-center text-[0.8rem] max-xs:text-[2vw] lg:text-[1.1rem] xl:text-[1.2rem] capitalize">
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
                className="absolute pl-[5%] max-xsx:bottom-[12%] max-xs:bottom-[4%] bottom-[5%] max-xs:w-[65%] w-[45%] text-text1 max-xs:text-[2.5vw] text-[1rem] md:text-[1rem] lg:text-[1.2rem] xl:text-[1.5rem]"
            >
                IT infrastructure and industrial construction services for modern enterprises.
            </p>

        </div >
    );
}

export default EngineeringFuture;
