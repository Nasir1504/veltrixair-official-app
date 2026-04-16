// images
import { ItServicesIcon, ItServicesIcon2 } from "../assets/imgs/home";
import { Link } from "react-router-dom";
import { useState } from "react";
import VideoComponent from "./VideoComponent";

const InfrastructureCard = ({
  Id,
  Heading,
  SubHeading,
  Concent,
  SubContent = "",
  ImgURL,
  BGColor,
  LinkTo,
  VideoUrl,
  showIcon = true,
  HoverEffect = true,

}) => {

  const [cardNum, setCardNum] = useState(-1)

  return (
    <div
      className="infrastructure-card-main relative shrink-0 
      max-xs:h-[360px] max-xs:w-[240px] w-[210px] h-[290px] md:w-[210px] md:h-[305px] mdlg:w-[260px] mdlg:h-[360px] lg:w-[320px] lg:h-[450px] xl:w-[360px] xl:h-[520px] 
      rounded-xl flex overflow-hidden p-[1px] select-none cursor-default
      bg-[linear-gradient(-220deg,_rgba(7,39,101,1)_0%,_rgba(138,143,152,1)_100%)]"
    >
      <div className="w-full h-full bg-bg1 rounded-xl"

      >
        <div
          className="
                     w-full h-full rounded-xl overflow-hidden flex flex-col p-[0.5em] ease-in-out
                    "
          style={{
            background: Id === cardNum && HoverEffect
              ? "#ffffff"
              : "linear-gradient(320deg, rgba(30,30,30,1) 20%, rgba(30,30,30,1) 52%, rgba(86,88,93,0.52) 95%, rgba(138,143,152,0.3) 100%)"

          }}
        >
          <Link
            to={`${LinkTo}`}
            className="absolute w-full h-full z-3 top-0 left-0"
            onMouseOver={() => setCardNum(Id)}
            onMouseOut={() => setCardNum(-1)}


          />
          {/* --------Contents----------- */}
          <div className="flex flex-1 justify-between items-center
                          max-xs:pl-1 max-xs:pr-1 pl-1 pr-1 md:pl-1 md:pr-1 lg:pl-2 lg:pr-2 pt-1"
          >
            <div className="relative pt-[1.5px] pl-[1.5px] bg-[linear-gradient(304deg,rgba(7,39,101,1)_0%,rgba(138,143,152,1)_100%)] rounded-sm">
              <p className={`relative z-1 text-text1 rounded-sm py-1 px-2 
                              max-xs:text-[0.6rem] text-[0.5rem] md:text-[0.5rem] mdlg:text-[0.6rem] lg:text-[0.7rem] xl:text-[0.8rem]
                            `}
                style={{
                  background: `#${BGColor}`
                }}
              >
                <span className="uppercase">{SubHeading}</span>
              </p>
            </div>
            {showIcon && <div 
            className={`rounded-full ${Id === cardNum && HoverEffect ? "bg-iconbg2" : "bg-iconbg1"} w-[15%] aspect-square flex justify-center items-center`}>
              <img
                src={Id === cardNum ? ItServicesIcon2 : ItServicesIcon}
                alt=""
                className="w-[75%]"
                style={{ objectFit: "contain" }}
                loading="lazy"
              />
            </div>}
          </div>
          <div className={`flex flex-[0.6] ${Id === cardNum && HoverEffect ? "text-btn1" : "text-text1"} justify-start items-center 
                          max-xs:text-[0.7rem] text-[0.65rem] md:text-[0.7rem] mdlg:text-[0.8rem] lg:text-[0.95rem] xl:text-[1.1rem]
                          max-xs:pl-1 pl-1 md:pl-1 lg:pl-2 max-xs:pr-14 pr-8 md:pr-8 lg:pr-14 xl:pr-16 
                          leading-3.5 md:leading-3.5 lg:leading-5 xl:leading-5.5
                         `}
          >
            <p>{Heading}</p>
          </div>
          {SubContent.length > 0 ?
            <div className="flex flex-col gap-[10%] flex-[1.8] justify-center font-[Roboto_Mono]">
              <p className={`${Id === cardNum && HoverEffect ? "text-btn1" : "text-text1"} opacity-80 flex justify-start items-center
                           max-xs:text-[0.52rem] text-[0.45rem] md:text-[0.45rem] mdlg:text-[0.6rem] lg:text-[0.7rem] xl:text-[0.8rem]
                           max-xs:pl-1 pl-1 md:pl-1 lg:pl-2 md:pr-1 pr-1 lg:pr-2 leading-[1.2em]
                         `}
              >
                {Concent}
              </p>
              <p className={`${Id === cardNum && HoverEffect ? "text-btn1" : "text-text1"} opacity-80 flex justify-start items-center
                           max-xs:text-[0.48rem] text-[0.4rem] md:text-[0.4rem] mdlg:text-[0.6rem] lg:text-[0.6rem] xl:text-[0.7rem]
                           max-xs:pl-1 pl-1 md:pl-1 lg:pl-2 md:pr-1 pr-1 lg:pr-2 leading-[1.2em] font-[Roboto_Mono]
                         `}
              >
                {SubContent}
              </p>
            </div>
            : <div className="flex flex-[1.8]">
              <p className={`${Id === cardNum && HoverEffect ? "text-btn1" : "text-text1"} opacity-80 flex justify-start items-center
                           max-xs:text-[0.52rem] text-[0.45rem] md:text-[0.45rem] mdlg:text-[0.6rem lg:text-[0.7rem] xl:text-[0.8rem]
                           max-xs:pl-1 pl-1 md:pl-1 lg:pl-2 md:pr-1 pr-1 lg:pr-2 leading-[1.2em] font-[Roboto_Mono]
                         `}
              >
                {Concent}
              </p>

            </div>}
          <div className="flex flex-[4.5] shrink-0 justify-center items-center bg-bg2 rounded-xl overflow-hidden shadow-2xl">
            {Id === cardNum && HoverEffect ?
              <VideoComponent
                src={VideoUrl}
                poster={ImgURL}
                className="h-full"
                isMuteIcon={false}

              /> :
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
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureCard;
