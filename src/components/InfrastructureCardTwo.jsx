// images
import { ItServicesIcon } from "../assets/imgs/home";

const InfrastructureCardTwo = ({
  ImgURL,
  Item,
  BtnColor
}) => {
  return (
    <div
      className="infrastructure-card-main relative shrink-0 w-[190px] h-[290px] md:w-[190px] md:h-[290px] mdlg:w-[280px] mdlg:h-[400px] lg:w-[320px] lg:h-[450px] xl:w-[360px] xl:h-[520px] 
      rounded-lg flex overflow-hidden p-[1px] select-none cursor-default max-xxs:h-[260px] max-xxs:w-[180px] max-xs:w-[200px] max-xs:h-[280px]
      bg-[linear-gradient(-220deg,_rgba(7,39,101,1)_0%,_rgba(138,143,152,1)_100%)]"
    >
      <div className="w-full h-full bg-bg1 rounded-lg">
        <div
          className="
                     w-full h-full rounded-lg overflow-hidden flex flex-col p-[0.5em] justify-baseline
                     bg-[linear-gradient(320deg,rgba(30,30,30,1)_20%,rgba(30,30,30,1)_52%,rgba(86,88,93,0.52)_95%,rgba(138,143,152,0.3)_100%)]
                    "
        >
          {/* --------Contents----------- */}
          <div className="w-full flex-[0.8]" />
          <div className="flex flex-[0.8] justify-between items-center max-xs:pl-1 pl-1 ">
            <div className="pt-[1.5px] pl-[1.5px] bg-[linear-gradient(304deg,rgba(7,39,101,1)_0%,rgba(138,143,152,1)_100%)] rounded-sm">
              <p
                className="text-text1 rounded-sm py-1 pr-2 pl-1 bg-btn3 text-[0.45rem] md:text-[0.45rem] mdlg:text-[0.6rem] lg:text-[0.8rem] xl:text-[1rem]
                            max-xs:text-[0.5rem] max-xxs:text-[0.5rem]"
                            
              >
                <span>{Item.btn}</span>
              </p>
            </div>
            <div className="rounded-full bg-iconbg1 w-[15%] aspect-square flex justify-center items-center">
              <img
                src={ItServicesIcon}
                alt=""
                className="w-[75%]"
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <div className={`flex flex-[0.6] text-text1 justify-start items-center 
                          max-xs:text-[0.7rem] text-[0.65rem] md:text-[0.7rem] mdlg:text-[0.8rem] lg:text-[0.95rem] xl:text-[1.1rem]
                          max-xs:pl-1 pl-1 md:pl-1 lg:pl-2 max-xs:pr-14 pr-8 md:pr-8 lg:pr-14 xl:pr-16 
                          leading-3.5 md:leading-3.5 lg:leading-5 xl:leading-5.5
                         `}
          >
            <p>{Item.heading}</p>
          </div>
          <div className="flex flex-[1.8]">
            <p className={`text-text1 opacity-80 flex justify-start items-start mt-[4%] font-[Roboto_Mono]
                           max-xs:text-[0.52rem] text-[0.45rem] md:text-[0.45rem] mdlg:text-[0.6rem] lg:text-[0.7rem] xl:text-[0.8rem]
                           max-xs:pl-1 pl-1 md:pl-1 lg:pl-2 md:pr-1 pr-1 lg:pr-2 leading-[1.2em]
                         `}
            >
              {Item.subHeading}
            </p>
          </div>
          <div className="flex flex-4 bg-bg2 rounded-lg overflow-hidden">
            <img
              className="w-full h-full"
              src={ImgURL}
              alt=""
              style={{
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureCardTwo;
