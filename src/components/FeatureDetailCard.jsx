import VideoComponent from "./VideoComponent";
import { useState } from "react";


const ICCard = ({
    Id,
    Heading,
    SubHeading,
    Content,
    VideoFile,
    Poster,
    BtnColor = "#E36002",
    Btn
}) => {

    const [cardNmbr, setCardNmbr] = useState(null);

    return (
        <div
            className={`relative flex justify-center items-start w-[80%] shrink-0 rounded-[0.6vw] p-[0.5%] overflow-hidden
                         transition-all duration-300 ease-in-out cursor-default
                        ${cardNmbr === Id ? "max-xxs:h-[240px] max-xs:h-[290px] md:h-[240px mdlg:h-[250px] lg:h-[260px] xl:h-[320px] bg-bg2" : "max-xxs:h-[130px] max-xs:h-[130px] md:h-[130px] mdlg:h-[140px] lg:h-[150px] xl:h-[170px] bg-[linear-gradient(90deg,rgba(60,60,60,1)_0%,rgba(52,52,52,1)_100%)]"}
                        border border-[10px]  ${cardNmbr === Id ? "border-bg2" : "border-[rgba(60,60,60,1)]"}`}

            onMouseOver={() => { setCardNmbr(Id) }}
            onMouseOut={() => { setCardNmbr(null) }}
        >
            <div className="w-[65%] h-[240px] md:h-[240px] lg:h-[260px] xl:h-[320px] p-[0.6%]">
                <div className="w-full min-h-[50%] max-xs:pr-[1%] pr-[10%]">
                    <button
                        className={`max-xxs:w-[45%] text-text1 capitalize text-left max-xs:rounded-[0.5vw] pr-[0.4rem] h-[20px] md:h-[20px] lg:h-[24px] xl:h-[28px] rounded-[0.2vw]
                                    max-xs:text-[0.7rem] text-[0.65rem] md:text-[0.65rem] mdlg:text-[0.7rem] lg:text-[0.8rem] xl:text-[1rem] pl-1`}
                        style={{
                            background: `${BtnColor}`
                        }}
                    >{Btn}

                    </button>
                    <h3
                        className={`max-xxs:text-[0.55rem] max-xs:text-[0.85rem] text-[1rem] md:text-[1.2rem] mdlg:text-[1.3rem] lg:text-[1.4rem] capitalize max-xxs:mt-[2%] font-bold
                         ${cardNmbr === Id ? `text-${BtnColor}` : "text-text1"}
                        `}
                    >{Heading}</h3>
                    {/* •  */}
                    <p
                        className={`font-[Roboto_Mono] max-xxs:text-[0.5rem] max-xs:text-[0.7rem] text-[0.65rem] md:text-[0.65rem] mdlg:text-[0.7rem] lg:text-[0.8rem] xl:text-[1rem] capitalize max-xxs:mt-[2%]
                         ${cardNmbr === Id ? "text-text3" : `text-text11`}
                        `}
                    >{
                            cardNmbr === Id ? SubHeading :
                                `${SubHeading.slice(0, 120)}...`
                        }
                    </p>
                </div>
                <div className="w-full max-xs:min-w-[165%] min-h-[50%] max-xs:mt-[5%] max-xs:pr-[10%] pr-[10%]">
                    <p
                        className={`font-[Roboto_Mono] max-xxs:text-[0.5rem] max-xs:text-[0.7rem] text-[0.65rem] md:text-[0.65rem] mdlg:text-[0.7rem] lg:text-[0.8rem] xl:text-[1rem] capitalize
                         ${cardNmbr === Id ? "text-text3" : "text-text11"}
                        `}
                    >
                        {Content}
                    </p>
                </div>

            </div>
            <div className="w-[35%] max-xs:h-[120px] h-[240px] md:h-[240px] lg:h-[260px]  xl:h-[340px]">
                <VideoComponent
                    src={VideoFile}
                    poster={Poster}
                    className="h-full"
                    isMuteIcon={false}
                />
            </div>




        </div >
    );
}

// ==========================================================

const SOWCard = ({
    Id,
    Heading,
    SubHeading,
    Content,
    VideoFile,
    Poster,
}) => {

    const [cardNmbr, setCardNmbr] = useState(null);

    return (
        <div
            className={`relative flex justify-center items-start w-[80%] shrink-0 max-xs: rounded-[1vw] rounded-[0.6vw] p-[0.5%] overflow-hidden
                         transition-all duration-300 ease-in-out cursor-default
                        ${cardNmbr === Id ? "max-xxxs:h-[185px] max-xxs:h-[170px] max-xs:h-[220px] md:h-[260px] lg:h-[280px] xl:h-[345px] bg-bg2" : "max-xxs:h-[85px] max-xs:h-[110px] md:h-[130px] lg:h-[150px] xl:h-[170px] bg-[linear-gradient(90deg,rgba(60,60,60,1)_0%,rgba(52,52,52,1)_100%)]"}
                        border border-[10px]  ${cardNmbr === Id ? "border-bg2" : "border-[rgba(60,60,60,1)]"}`}

            onMouseOver={() => { setCardNmbr(Id) }}
            onMouseOut={() => { setCardNmbr(null) }}
        >
            <div className="w-[65%] h-[240px] md:h-[240px] lg:h-[260px] xl:h-[320px] p-[0.6%]">
                <div className="w-full max-xs:min-h-[22%] min-h-[50%] max-xs:pr-[1%] pr-[10%]">

                    <h3
                        className={`max-xxs:text-[0.55rem] max-xs:text-[0.85rem] text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] capitalize 
                         ${cardNmbr === Id ? "text-text5" : "text-text1"} font-bold
                        `}
                    >{Heading}</h3>
                    {/* •  */}
                    <p
                        className={`max-xxs:text-[0.5rem] max-xs:text-[0.7rem] text-[0.65rem] md:text-[0.65rem] lg:text-[0.8rem] xl:text-[1rem] capitalize
                         ${cardNmbr === Id ? "text-text3" : "text-text11"}
                        `}
                    >{
                            cardNmbr === Id ? SubHeading :
                                `${SubHeading.slice(0, 120)}...`
                        }
                    </p>
                </div>
                <div className={`w-full max-xs:min-w-[165%] min-h-[50%] max-xs:mt-[5%] max-xs:pr-[10%] pr-[10%] ${cardNmbr === Id ? "max-xs:translate-y-[-5%] translate-y-[-20%]" : "translate-y-[0%]"}  duration-300 ease-in-out`}>
                    <p
                        className={`max-xxs:text-[0.5rem] max-xs:text-[0.7rem] text-[0.65rem] md:text-[0.65rem] lg:text-[0.8rem] xl:text-[1rem] capitalize
                         ${cardNmbr === Id ? "text-text3" : "text-text11"}
                        `}
                    >
                        {Content}
                    </p>
                </div>

            </div>
            <div className="w-[35%] max-xxs:h-[60px] max-xs:h-[85px] h-[240px] md:h-[240px] lg:h-[260px]  xl:h-[340px]">
                <VideoComponent
                    src={VideoFile}
                    poster={Poster}
                    className="h-full"
                    isMuteIcon={false}
                />
            </div>

        </div>
    );
}

export { ICCard, SOWCard };
