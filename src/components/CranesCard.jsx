import { IndustrialGradeComponents } from "../assets/imgs/construction";
const CranesCard = ({
    IsHover,
    CardID,
    Id
}) => {
    return (
        <div className="relative xl:w-[360px] xl:h-[480px] lg:w-[290px] lg:h-[390px] md:w-[205px] md:h-[280px] w-[185px] h-[240px] 
                        shrink-0 bg-bg2 rounded-lg flex flex-col justify-between items-center p-[2.5%] cursor-default
                        max-xs:w-[195px] max-xs:h-[260px] max-xxs:w-[155px] max-xxs:h-[200px] shadow-2xl">
            <div className="relative w-full h-[78%]">
                <div className="absolute top-0 left-0 w-full h-full z-1 bg-[#00000060]"
                    style={{
                        transition: "0.3s cubic-bezier(0, .02, 0, .99)",
                        opacity: IsHover && CardID === Id ? "1" : "0"
                    }}
                >
                    <p className=" text-start flex items-start text-text1 p-[4%] opacity-60 bg-[#00000040] 
                                max-xs:text-[0.5rem] text-[0.7rem] md:text-[0.7rem] lg:text-[0.95rem] xl:text-[1rem] font-medium"
                        style={{
                            backdropFilter: "blur(60px)"
                        }}
                    >
                        EOT Cranes
                        (Electric Overhead Traveling)
                    </p>
                </div>

                <img
                    className="relative w-full h-full rounded-lg"
                    src={IndustrialGradeComponents}
                    alt=""
                    style={{
                        objectFit: "cover"
                    }}
                />
            </div>
            <div className="w-full h-[20%]">
                <p className=" w-full h-full text-center flex items-center
                 max-xs:text-[0.5rem] text-[0.7rem] md:text-[0.7rem] lg:text-[0.95rem] xl:text-[1rem] font-medium"
                    style={{
                        color: IsHover && CardID === Id ? "#E36002" : "#000"

                    }}
                >
                    {IsHover && CardID === Id ? "mandsfndsknfaklns dvan sndvkanskvn aknsdkvn skln lkansl" : "EOT Cranes (Electric Overhead Traveling)"}
                </p>
            </div>
        </div >
    );
}

export default CranesCard;
