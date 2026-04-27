import React, { memo } from "react";
// import VideoComponent from "./VideoComponent";
// import { ServiceCardVideo } from "../assets/imgs/it-solutions";
// import { DigitalSystem } from "../assets/imgs/home";

const ServiceCard = memo(({ item, i, isNear }) => {
  return (
    <div className="relative w-[60%] h-[45%] max-xxs:h-[60%] max-xs:h-[60%] max-xs:w-[60%] max-xxs:w-[75%]
                    bg-[linear-gradient(90deg,rgba(55,92,165,1)_0%,rgba(0,0,0,0)_100%)] flex items-center justify-center text-3xl font-bold shadow-2xl p-0.5 
                    max-xxs:rounded-[0.7rem] max-xs:rounded-[0.9rem] rounded-[1.2rem] md:rounded-[1.2rem] mdlg:rounded-[1.5rem] lg:rounded-[1.8rem] xl:rounded-[2rem]">

      <p className="absolute text-text1 right-8 top-5 font-light
                    max-xs:text-[0.85rem] text-[0.65rem] md:text-[0.65rem] mdlg:text-[0.9rem] lg:text-[1rem] xl:text-[1.2rem]">
        {String(i + 1).padStart(3, '0')}
      </p>

      {/* Left Section: Video and Button */}
      <div className="absolute w-[29%] left-[-10%] h-full flex flex-col justify-center items-center gap-[8%] ">
        <div className="w-[90%] h-[60%] p-0.5 bg-[linear-gradient(220deg,rgba(55,92,165,1)_0%,rgba(0,0,0,0)_60%)] flex
                        rounded-[0.9rem] md:rounded-[0.9rem] mdlg:rounded-[1rem] lg:rounded-[1.1rem] xl:rounded-[1.2rem] max-xs:hidden">
          <div className="w-full h-full bg-[linear-gradient(125deg,rgba(0,0,0,1)_0%,rgba(36,36,36,1)_100%)] overflow-hidden
                          rounded-[0.9rem] md:rounded-[0.9rem] mdlg:rounded-[1rem] lg:rounded-[1.1rem] xl:rounded-[1.2rem]">
            <div className="w-full h-full flex justify-center items-center">
              {/* Only render video if the card is near the active viewport */}
              {isNear ? (

                <img
                  className="h-full w-full relative z-0"
                  src={item.imgURL}
                  alt=""
                />
              ) : (
                <div className="w-full h-full bg-black/20" />
              )}
            </div>
          </div>
        </div>

        <button className='shrink-0 rounded-[5rem] flex overflow-hidden p-0.5 cursor-pointer
                        bg-[linear-gradient(89deg,rgba(30,30,30,1)_0%,rgba(251,251,251,1)_120%)]
                        font-light tracking-tight [text-shadow:2px_2px_2px_rgba(0,0,0,1)]
                        md:text-[0.7rem] mdlg:text-[0.9rem] lg:text-[1.2rem] xl:text-[1.6rem] 
                        max-xs:hidden'>
          <span className='w-full h-full text-text1 shrink-0 px-[2rem] py-[0.8rem] rounded-[5rem]
                          bg-[linear-gradient(89deg,rgba(7,39,101,1)_0%,rgba(14,21,36,1)_100%)]'>
            Schedule a call
          </span>
        </button>
      </div>

      {/* Right Section: Content */}
      <div className="w-full h-full flex max-xs:flex-col justify-end items-center bg-[#0d0d0d] overflow-hidden
                      max-xxs:rounded-[0.65rem] max-xs:rounded-[0.9rem] rounded-[1.2rem] md:rounded-[1.2rem] mdlg:rounded-[1.5rem] lg:rounded-[1.8rem] xl:rounded-[2rem]">

        {/* Mobile Header */}
        <div className="w-full max-xxs:h-[18%] h-[23%] pl-[3%] flex justify-center items-center xs:hidden">
          <div className="w-[35%] h-full rounded-[0.6rem] p-1 bg-[linear-gradient(220deg,rgba(55,92,165,1)_0%,rgba(0,0,0,0)_60%)]">
            <div className="w-full h-full bg-[linear-gradient(125deg,rgba(0,0,0,1)_0%,rgba(36,36,36,1)_100%)] overflow-hidden
                            max-xs:rounded-[0.5rem]">
              <div className="w-full h-full flex justify-center items-center">
                {isNear ? (
                  <img
                    className="h-full w-full relative z-0"
                    src={item.imgURL}
                    alt=""
                  />
                ) : (
                  <div className="w-full h-full bg-black/20" />
                )}
              </div>
            </div>
          </div>
          <div className="w-[65%] h-full flex shrink-0 pl-[5%] justify-start items-center">
            <h2 className="text-text1 capitalize text-[1.2rem] max-xxs:text-[0.8rem] max-xs:text-[0.9rem]">
              {item.name}
            </h2>
          </div>
        </div>

        <div className="w-[80%] h-[75%] max-xs:w-[100%] max-xs:h-[60%] flex flex-col gap-[8%] max-xs:pr-[5%]">
          {/* Desktop Header */}
          <h2 className="text-text1 capitalize w-[55%] max-xs:hidden
                        text-[1.2rem] md:text-[1.2rem] mdlg:text-[1.3rem] lg:text-[1.6rem] xl:text-[2rem]">
            {item.name}
          </h2>

          <div className="w-full h-full flex max-xs:gap-[2%] gap-[1%] pl-[4%] max-xs:items-center">
            <div className="max-xxs:w-[5%] max-xs:w-[4%] w-[2.2%] xl:w-[2%] h-auto max-xs:h-[90%] flex flex-col gap-[10%] py-[2%] justify-center items-center rounded-2xl border border-[#ffffff50]">
              {item.subSubServiceList?.map((_, idx) => (
                <div key={idx} className="h-[10%] shrink-0 flex justify-center items-center">
                  <div className="max-xxs:w-2 max-xxs:h-2 max-xs:w-2.5 max-xs:h-2.5 md:w-1.5 md:h-1.5 mdlg:w-2 mdlg:h-2 lg:w-2.5 lg:h-2.5 shrink-0 bg-bg2 rounded-full" />
                </div>
              ))}
            </div>

            <div className="max-xs:h-[90%] h-auto flex flex-col gap-[10%] py-[2%] justify-center items-start">
              {item.subSubServiceList?.map((subItem, idx) => (
                <p key={idx} className="h-[10%] text-text1 max-xs:pr-4 pr-10 shrink-0 even:bg-[#171716] uppercase font-light flex items-center
                                        max-xxs:text-[0.65rem] max-xs:text-[0.8rem] text-[0.65rem] md:text-[0.65rem] mdlg:text-[0.9rem] lg:text-[1rem] xl:text-[1.2rem]">
                  {subItem.name}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Button */}
        <div className="w-full h-[15%] flex justify-center items-center xs:hidden">
          <button className='w-[85%] shrink-0 rounded-[1rem] max-xxs:rounded-[0.6rem] flex overflow-hidden p-0.5 cursor-pointer
                            bg-[linear-gradient(89deg,rgba(30,30,30,1)_0%,rgba(251,251,251,1)_120%)]
                            font-light tracking-tight [text-shadow:2px_2px_2px_rgba(0,0,0,1)]
                            text-[1.2rem] max-xxs:text-[1rem] xs:hidden'>
            <span className='w-full h-full text-text1 shrink-0 px-[2rem] py-[0.8rem] max-xxs:py-[0.6rem] rounded-[1rem] max-xxs:rounded-[0.6rem]
                            bg-[linear-gradient(89deg,rgba(7,39,101,1)_0%,rgba(14,21,36,1)_100%)]'>
              Schedule a call
            </span>
          </button>
        </div>
      </div>
    </div>
  );
});

export default ServiceCard;
