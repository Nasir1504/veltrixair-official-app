import { useMemo } from "react";
import { IndustrialFitOuts } from "../assets/imgs/construction";

const ScaleShowcase = ({
    Direction = "left",
    Total,
    Clamp,
    Byactor,
    imgURL1,
    imgURL2,
    imgURL3,

}) => {

    const translateSection = `translateX(-${Clamp(0, 240, 240 - (Total - Byactor) * 2200)}%)`;
    const translateSection1 = `translateX(-${Clamp(0, 100, 100 - (Total - Byactor) * 1200)}%)`;
    
    return (
        <div
            className='relative w-full h-full flex items-center gap-[5%]'
            style={{
                transform: Direction === "left" ? "scaleX(-1)" : "scaleX(1)",
                justifyContent: Direction === "left" ? "end" : "start"
            }}
        >
            <div className="relative h-full aspect-3/4 overflow-hidden rounded-lg z-2">
                <img
                    className='h-full w-full'
                    src={imgURL1}
                    alt=""
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className="relative h-[80%] aspect-3/4 overflow-hidden rounded-lg z-1"
                style={{
                    transform: translateSection1

                }}
            >
                <img
                    className='h-full w-full'
                    src={imgURL2}
                    alt=""
                    style={{ objectFit: "cover" }}
                />
            </div>
            <div className="relative h-[60%] aspect-3/4 overflow-hidden rounded-lg z-0"
                style={{
                    transform: translateSection
                }}
            >
                <img
                    className='h-full w-full'
                    src={imgURL3}
                    alt=""
                    style={{ objectFit: "cover" }}
                />
            </div>

        </div>
    );
}

export default ScaleShowcase;
