import { ScrollMotionMarquee, ViewportReveal } from "../../../components";


const DATA_ONE = [
    { name: "Logistics & Distribution Centres" },
    { name: "Ports & Marine Terminals" },
    { name: "Steel & Metal Processing Plants" },
    { name: "Power Generation & Energy Plants" },
    { name: "Oil & Gas Facilities" },
    { name: "Mining & Engineering Facilities" },
    { name: "Waste Management & Recycling Plants" },


]
const DATA_TWO = [
    { name: "Logistics & Distribution Centres" },
    { name: "Ports & Marine Terminals" },
    { name: "Steel & Metal Processing Plants" },
    { name: "Power Generation & Energy Plants" },
    { name: "Oil & Gas Facilities" },
    { name: "Mining & Engineering Facilities" },
    { name: "Waste Management & Recycling Plants" },

]


// =======================================================
const IndustriesWeServe = () => {



    return (
        <div
            className="relative flex flex-col bg-bg1 justify-center items-center w-full overflow-hidden"

        >
            <ViewportReveal>
                <div
                    className="absolute max-xxs:top-[-18%] max-xs:top-[-35%] top-[-50%] z-2 rounded-[100%] max-xs:w-[40%] w-[28%] aspect-2/1 bg-bg2 z-3 blur-[60px] lg:blur-[80px] xl:blur-[100px] duration-200 ease-in-out"

                />
            </ViewportReveal>


            <h3
                className="text-[1.4rem] max-xs:text-[1.2rem] md:text-[1.4rem] lg:text-[1.8rem] xl:text-[2rem] text-text1 flex justify-center items-end
                            max-xs:h-[140px] md:h-[100px] lg:h-[140px] xl:h-[100px]"
            >Industries We Serve</h3>
            <ScrollMotionMarquee
                DATA_ONE={DATA_ONE}
                DATA_TWO={DATA_TWO}
            />

        </div>
    );
}

export default IndustriesWeServe;
