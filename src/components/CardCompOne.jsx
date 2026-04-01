
const CardCompOne = ({ Name }) => {
    return (
        <div className="infrastructure-card-main relative w-[260px] h-[80px] lg:w-[320px] lg:h-[110px] xl:w-[360px] xl:h-[120px] bg-[linear-gradient(-195deg,rgba(7,39,101,1)_30%,rgba(138,143,152,1)_100%)] max-xs:rounded-[2.2vw] rounded-[1em] md:rounded-[1em] flex overflow-hidden p-0.5
                        max-xs:w-[40vw] max-xs:h-[14vw] max-xxs:w-[44vw] max-xxs:h-[18vw]"
        >
            <div className="w-full h-full bg-bg1 max-xs:rounded-[2.2vw] rounded-[1em] md:rounded-[1em]">
                <div
                    className="
                             w-full h-full max-xs:rounded-[2.2vw] rounded-[1em] md:rounded-[1em] overflow-hidden flex justify-center items-start max-xs:gap-[1.5vw] gap-2 md:gap-4 max-xs:pt-[2vw] pt-[1.2em] md:pt-[1.2em] lg:pt-[1.6em] xl:pt-[2em] max-xs:pl-[1.5vw] pl-[1em] md:pl-[1em]
                             bg-[linear-gradient(350deg,rgba(30,30,30,1)_0%,rgba(30,30,30,1)_52%,rgba(86,88,93,0.52)_95%,rgba(138,143,152,0.3)_100%)]
                            "
                >
                    <div className="xl:w-4 xl:h-4 lg:w-3.5 lg:h-3.5 shrink-0 max-xs:w-[1.5vw] max-xs:h-[1.5vw] md:w-[8px] h-[8px] w-[8px] h-[8px] rounded-[100%] bg-white mt-[0.36em] lg:mt-[0.4em]" />
                    <p className="text-[0.8rem] max-xxs:text-[2.8vw] max-xs:text-[2.2vw] lg:text-[1.1rem] xl:text-[1.1rem] pr-[1em]">
                        {Name}
                    </p>

                </div>
            </div>
        </div>
    );
}

export default CardCompOne;
