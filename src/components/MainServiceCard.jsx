import { useState, memo } from 'react';
import { Link } from 'react-router-dom';


// --------- Random place of the blur circle inside card --------
const randomX = Math.random() * 40;
const randomY = Math.random() * 40;

const MainServiceCard = ({
    Id,
    IsMobile,
    Heading,
    BtnName,
    ServiceDetails,
    ImgURL,
    LinkTo,
}) => {
    const [cardTrigger, setCardTrigger] = useState(false);
    const [cardNum, setCardNum] = useState(null);

    return (
        <div className='relative p-0.5 max-xxxs:w-[150px] max-xxxs:h-[226px] max-xxs:w-[165px] max-xxs:h-[246px] max-xs:w-[235px] max-xs:h-[340px] w-[190px] h-[295px] mdlg:w-[230px] mdlg:h-[370px] lg:w-[260px] lg:h-[415px] xl:w-[320px] xl:h-[520px] 
                        max-xxxs:rounded-[0.45rem] max-xxs:rounded-[0.55rem] max-xs:rounded-[0.6rem] rounded-[0.65rem] mdlg:rounded-[0.7rem] lg:rounded-[0.75rem] xl:rounded-[0.8rem]
                        bg-[linear-gradient(140deg,rgba(55,92,165,1)_0%,rgba(131,131,131,1)_90%)]'
            onMouseOver={() => {
                !IsMobile && setCardTrigger(true)
                setCardNum(Id)
            }}
            onMouseOut={() => {
                !IsMobile && setCardTrigger(false)
                setCardNum(null)

            }}

        >


            <div
                className='relative w-full h-full 
                           max-xxxs:rounded-[0.4rem] max-xxs:rounded-[0.5rem] max-xs:rounded-[0.55rem] rounded-[0.6rem] mdlg:rounded-[0.65rem] lg:rounded-[0.7rem] xl:rounded-[0.75rem] px-[4%] py-[6%] xl:px-[5%] xl:py-[8%] flex flex-col overflow-hidden'
                style={{
                    transition: "0.15s ease-in-out",
                    background: !cardTrigger ? "#1e1e1e" : "#ffffff"
                }}
            >
                <div
                    className={`absolute w-[60%] aspect-square bg-bg9 z-0 rounded-full blur-[30px] ${!cardTrigger ? "" : "collapse"}`}

                    style={{
                        // top: Id < 4 ? `${Id * 10}%` : `${Id * -2}%`,
                        top: `${Math.random() * 40}%`,
                        left: `${Math.random() * 40}%`,

                    }}
                />

                <div className='relative z-5 max-xs:flex-[2.4] flex-[2.5] flex flex-col max-xxs:gap-3.5 max-xs:gap-5 gap-5 pr-[5%]'>

                    <div className='reltive flex justify-left items-center'>


                        <button
                            className={`relative rounded-[0.4em] font-medium pl-2 pr-4 py-2 text-text1 bg-btn1 capitalize
                                            shadow-[1px_1px_2px_#00000080] flex justify-between items-center
                              max-xxxs:text-[0.34rem] max-xxs:text-[0.4rem] max-xs:text-[0.6rem] text-[0.45rem] md:text-[0.45rem] mdlg:text-[0.6rem] lg:text-[0.7rem] xl:text-[0.8rem]
                                            `}


                        >
                            <span>{BtnName}</span>
                        </button>

                    </div>
                    <div className={`flex flex-[0.6] ${!cardTrigger ? "text-text1" : "text-btn1"} justify-start items-center font-semibold
                          max-xxxs:text-[0.6rem] max-xxs:text-[0.7rem] max-xs:text-[0.9rem] text-[0.65rem] md:text-[0.7rem] mdlg:text-[0.85rem] lg:text-[1rem] xl:text-[1.1rem]
                          max-xs:pl-1 pl-1 md:pl-1 lg:pl-2 max-xxs:pr-4 max-xs:pr-8 pr-8 md:pr-8 lg:pr-10 xl:pr-16 
                          max-xxxs:leading-3 max-xxs:leading-4 max-xs:leading-5 leading-3.5 md:leading-4 lg:leading-5 xl:leading-5.5
                         `}
                    >
                        <h2>{Heading}</h2>
                    </div>
                    <div className='px-1 mb-1 md:mb-2 flex justify-left items-center'>

                        <div className={`p-1 border border-dashed ${!cardTrigger ? "border-[#ffffff20]" : "border-text13"} rounded-[0.3em] mdlg:rounded-[0.34em] lg:rounded-[0.4em] xl:rounded-[0.5em]`}>
                            <div className='rounded-[0.3em] mdlg:rounded-[0.34em] lg:rounded-[0.4em] xl:rounded-[0.5em] p-0.5
                                            bg-[linear-gradient(250deg,rgba(9,9,9,1)_0%,rgba(228,228,228,1)_100%)] 
                                            '
                            >
                                <Link
                                    to={LinkTo}
                                    className={`relative font-medium ${!cardTrigger ? "max-xxs:px-4 max-xxs:py-1 px-5 py-2 text-btn1" : "pl-5 pr-18 py-2 text-text1"} cursor-pointer
                                            shadow-[10px_10px_4px_#00000080] flex justify-between items-center rounded-[0.28em] mdlg:rounded-[0.3em] lg:rounded-[0.34em] xl:rounded-[0.4em]
                                            max-xxxs:text-[0.5rem] max-xxs:text-[0.6rem] max-xs:text-[0.7rem] text-[0.48rem] mdlg:text-[0.7rem] lg:text-[0.8rem] xl:text-[1rem]
                                            `}

                                    style={{
                                        background: cardTrigger
                                            ? `#072765`
                                            : "#ffffff",
                                        transition: "0.3s ease-in-out"
                                    }}
                                >
                                    <span>More Details</span>
                                    <span
                                        className={`absolute ${!cardTrigger ? "right-0" : "right-5"} bg-bg2 text-text3 w-7 pt-0.5 aspect-3/2
                                        flex justify-center items-center rounded-[0.2em] ml-10`}
                                        style={{
                                            transition: "all 0.3s ease-in-out",
                                            display: !cardTrigger ? "none" : ""

                                        }}
                                    >&#x27A4;</span>


                                </Link>
                            </div>
                        </div>

                    </div>

                    <div className={`absolute top-[100%] flex flex-col gap-[10%] h-[20%] justify-center font-[Roboto_Mono] ${!cardTrigger ? "opacity-0" : "opacity-100"} max-xs:hidden`}

                    >
                        <p className={`text-btn4 font-medium flex justify-start items-center
                           max-xs:text-[0.52rem] text-[0.4rem] md:text-[0.4rem] mdlg:text-[0.65rem] lg:text-[0.75rem] xl:text-[0.8rem]
                           max-xs:pl-1 pl-1 md:pl-1 lg:pl-2 md:pr-1 pr-1 lg:pr-2 leading-[1.2em]
                         `}
                        >
                            Services Include:
                        </p>
                        <p className={`text-text10 flex justify-start items-center
                           max-xs:text-[0.48rem] text-[0.35rem] md:text-[0.35rem] mdlg:text-[0.55rem] lg:text-[0.6rem] xl:text-[0.7rem]
                           max-xs:pl-1 pl-1 md:pl-1 lg:pl-2 md:pr-1 pr-1 lg:pr-2 leading-[1.2em] font-[Roboto_Mono] font-bold
                         `}
                        >
                            {ServiceDetails}
                        </p>
                    </div>
                </div>

                <div
                    className={`relative z-5 flex max-xs:flex-[2.5] flex-[2.7] shrink-0 justify-center items-center overflow-hidden
                                `}
                    style={{
                        transition: "0.2s ease-in-out"

                    }}
                >
                    <div className={`w-full ${!cardTrigger ? "scale-100" : "scale-y-70"} max-xxs:rounded-[0.4rem] max-xs:rounded-[0.6rem] rounded-[0.8rem] mdlg:rounded-[0.9rem] lg:rounded-[1rem] xl:rounded-[1.1rem] 
                    h-full bg-bg2 origin-bottom shadow-2xl overflow-hidden`}
                        style={{
                            transition: "0.3s ease-in-out"
                        }}
                    >


                        <img
                            className="w-full h-full"
                            src={ImgURL}
                            alt=""
                            loading="eager"
                            decoding="async"
                            style={{
                                objectFit: 'cover'
                            }}
                        />
                    </div>

                </div>

            </div>

        </div >
    );
}

export default memo(MainServiceCard);
