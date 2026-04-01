import { useRef, useEffect } from "react";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import { ViewportReveal } from "../components";

gsap.registerPlugin(Draggable);

const OurApproach = ({ DATA }) => {

    const containerRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {

        const container = containerRef.current;
        const track = trackRef.current;

        if (!container || !track) return;

        const getBounds = () => ({
            minX: Math.min(container.offsetWidth - track.scrollWidth, 0),
            maxX: 0
        });

        const draggable = Draggable.create(track, {
            type: "x",
            inertia: true,
            bounds: getBounds(),
            cursor: "grab",
            activeCursor: "grabbing",
        })[0];

        const handleResize = () => draggable.applyBounds(getBounds());

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
            draggable.kill();
        };

    }, []);

    return (
        <div
            className='relative top-0 w-full h-[485px] md:h-[485px] lg:h-[700px] xl:h-[920px] 
                            bg-bg1 z-1 flex flex-col justify-center items-center 
                            overflow-hidden max-xs:h-[80vh]'
        >
            <ViewportReveal>
                <div
                    className="absolute max-xxs:top-[-6%] max-xs:top-[-10%] top-[-15%] z-2 rounded-[100%] max-xs:w-[45%] w-[22%] aspect-2/1 bg-bg2 blur-[60px] lg:blur-[80px] xl:blur-[100px] duration-200 ease-in-out"

                />
            </ViewportReveal>

            <div className='w-full h-[25%] max-xs:justify-end flex flex-col justify-end items-center'>
                <h3 className="font-['Saved_By_Zero'] text-text1 max-xs:text-center  max-xxs:text-[1.6rem] max-xs:text-[2rem] text-[1.25rem] md:text-[1.8rem] lg:text-[2.4rem] xl:text-[2.6rem]">OUR APPROACH</h3>
                <p className="text-text7 max-xxs:px-[10%] max-xs:px-[8%] max-xs:text-center max-xxs:text-[0.8rem] max-xs:text-[0.9rem] text-[0.7rem] md:text-[0.7rem] lg:text-[0.95rem] xl:text-[1rem]">Safety, Precision & Performance — Engineered Together</p>
            </div>
            <div
                ref={containerRef}
                className="w-full h-[75%] overflow-hidden flex justify-start items-center overflow-x-scroll overscroll-contain scroll-smooth"
            >

                <div
                    ref={trackRef}
                    className='flex w-full h-full justify-start items-center gap-[2%] touch-none'
                >
                    {
                        DATA.map((item, i) => {
                            return (
                                <OurApproachCard
                                    key={i}
                                    ID={i}
                                    Name={item.name}
                                    ImgURL={item.imgURL}
                                />

                            )
                        })
                    }
                </div>

            </div>

        </div>
    );
}

// className='w-full  border border-white flex justify-start items-center gap-[2%] overflow-x-scroll overscroll-contain scroll-smooth'



// ==================== Our Approach Card =======================

const OurApproachCard = ({
    ID,
    Name,
    ImgURL
}) => {

    return (
        <div
            key={ID}
            className="infrastructure-card-main relative shrink-0 
                        max-xs:h-[360px] max-xs:w-[200px] w-[210px] h-[290px] md:w-[235px] md:h-[320px] lg:w-[340px] lg:h-[460px] xl:w-[380px] xl:h-[520px] 
                        rounded-xl flex overflow-hidden p-[1px] select-none cursor-default
                        bg-[linear-gradient(-220deg,rgba(7,39,101,1)_0%,rgba(138,143,152,1)_100%)]"
        >

            <div className="relative w-full h-full bg-bg1 rounded-xl overflow-hidden flex flex-col justify-start items-center gap-[5%] max-xs:p-[0.4em] p-[0.45em] sm:p-[0.45em] lg:p-[0.6em]">

                <div
                    className='relative w-full h-[85%] bg-bg3 rounded-xl overflow-hidden'
                >
                    <img
                        src={ImgURL}
                        alt=""
                        style={{objectFit:"cover"}}
                        className="w-full h-full"
                    />

                </div>
                <p className='text-text2 max-xs:text-[0.5rem] text-[0.6rem] md:text-[0.6rem] lg:text-[0.9rem] xl:text-[1rem]'>
                    {Name}
                </p>
            </div>

        </div>
    )

}

export default OurApproach;
export { OurApproachCard };




