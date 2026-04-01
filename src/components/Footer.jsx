
import Logo from "../assets/imgs/footer/veltrixair-logo-type-one.png";

const Footer = () => {

    const QuickLinks = [
        {
            name: "home",
            linkTo: "/",
        },
        {
            name: "about us",
            linkTo: "/about",
        },
        {
            name: "industries",
            linkTo: "/industries",
        },
        {
            name: "portfolio",
            linkTo: "portfolio",
        },
        {
            name: "careers",
            linkTo: "/careers",
        },
        {
            name: "contact us",
            linkTo: "contact-us",
        },
    ]

    const ITSolutions = [
        {
            name: "Cloud Infrastructure"
        },
        {
            name: "Cybersecurity"
        },
        {
            name: "Data Centers"
        },
        {
            name: "Networking"
        },
        {
            name: "ERP & Enterprise Systems"
        },
        {
            name: "Managed IT Services"
        },
        {
            name: "[Explore IT Solutions →]"
        },
    ]

    const ConstructionSolution = [
        {
            name: "Fit-Out Construction"
        },
        {
            name: "Overhead Crane Installation"
        },
        {
            name: "Industrial Infrastructure"
        },
        {
            name: "MEP Systems"
        },
        {
            name: "Fire & Life Safety"
        },
        {
            name: "Commissioning & Handover"
        },
        {
            name: "[Explore Construction Solutions →]"
        },

    ]


    return (
        <div
            className="relative w-full max-xs:h-[58vh] md:h-[400px] mdlg:h-[500px] lg:h-[550px] xl:h-[650px] bg-bg2 flex items-center overflow-hidden"
        >
            {/* blured circles */}
            <div
                className="absolute rounded-[100%] w-[28%]  left-[-15%]  top-[-25%] aspect-2/1 bg-bg2 z-3 blur-[60px] lg:blur-[80px] xl:blur-[100px]"
            />
            <div
                className="absolute rounded-[100%] w-[28%] right-[-20%]  bottom-[-5%] aspect-2/1 bg-bg2 z-3 blur-[60px] lg:blur-[80px] xl:blur-[100px]"
            />
            {/* ------------- */}
            <div
                className='w-full h-full bg-bg1 flex justify-between rounded-t-[15vw] max-xs:pl-[4%] max-xs:pr-[2%] pl-[6%] pr-[4%] md:pl-[6%] md:pr-[4%] pt-[2%]'
            >
                <div className='max-xs:w-[90%] w-[65%] md:w-[65%] h-full flex flex-col justify-center items-start'>
                    <div className="w-full h-[30%] flex items-center-safe">
                        <p
                            className="font-['Saved_By_Zero'] max-xs:text-[3.9vw] text-[2.05rem] md:text-[2.05rem] mdlg:text-[2.38rem] lg:text-[2.88rem] xl:text-[3.6rem] w-full text-text1 flex flex-col uppercase max-xs:leading-[4vw] leading-9 md:leading-9 lg:leading-12 xl:leading-15">
                            <span>From Cloud to Concrete </span>
                            <span> Engineered to Perform
                            </span>
                            <span
                                className="max-xs:w-[60.4vw] w-[80%] md:w-[80%] h-[2px] bg-[linear-gradient(-94deg,rgba(232,232,232,1)0%,rgba(30,30,30,1)100%)]"
                            ></span>
                        </p>

                    </div>
                    <div className="max-xs:w-[100%] w-[80%] md:w-[80%] h-[45%] flex justify-between items-center">
                        {/* ------------- Quick Links ------------------ */}
                        <div className="max-xs:w-[20%] w-[30%] sm:w-[30%] h-full flex flex-col gap-0.5 max-xs:text-[2.2vw] text-[0.54rem] md:text-[0.54rem] mdlg:text-[0.66rem] lg:text-[0.76rem] xl:text-[0.95rem]">
                            <h3
                                className="uppercase text-text1 flex items-center max-xs:gap-1 max-xs:mb-2 gap-1 mb-1 md:gap-1 md:mb-1 lg:gap-2 lg:mb-2"
                            >
                                <span
                                    className="max-xs:w-[1.8vw] max-xs:h-[1.8vw] w-[9px] h-[9px] md:w-[9px] md:h-[9px] mdlg:w-[11px] mdlg:h-[11px] lg:w-[15px] lg:h-[15px] rounded-full bg-[linear-gradient(94deg,rgba(217,217,217,1)_99%,rgba(115,115,115,1)_100%)]"
                                />
                                <span className="max-xs:text-[2vw] text-[0.6rem] md:text-[0.6rem] mdlg:text-[0.9rem] lg:text-[1rem]">Quick Links</span>

                            </h3>
                            {
                                QuickLinks.map((item, i) => {
                                    return (
                                        <div key={i} className="text-text1 opacity-80 hover:opacity-100 cursor-pointer capitalize">
                                            {item.name}
                                        </div>
                                    )
                                })
                            }

                        </div>

                        {/* -------------- IT Solutions ------------------ */}
                        <div className="max-xs:w-[34%] w-[32%] sm:w-[32%] h-full flex flex-col gap-0.5 max-xs:text-[2vw] text-[0.54rem] md:text-[0.54rem] mdlg:text-[0.66rem] lg:text-[0.76rem] xl:text-[0.95rem]">
                            <h3
                                className="uppercase text-text1 flex items-center max-xs:gap-1 max-xs:mb-2 gap-1 mb-1 md:gap-1 md:mb-1 lg:gap-2 lg:mb-2"
                            >
                                <span
                                    className="max-xs:w-[1.8vw] max-xs:h-[1.8vw] w-[9px] h-[9px] md:w-[9px] md:h-[9px] mdlg:w-[11px] mdlg:h-[11px] lg:w-[15px] lg:h-[15px] rounded-full bg-[linear-gradient(94deg,rgba(217,217,217,1)_99%,rgba(115,115,115,1)_100%)]"
                                />
                                <span className="max-xs:text-[2vw] text-[0.6rem] md:text-[0.6rem] mdlg:text-[0.9rem] lg:text-[1rem]">IT Solutions</span>

                            </h3>
                            {
                                ITSolutions.map((item, i) => {
                                    return (
                                        <div key={i} className="text-text1 opacity-80 hover:opacity-100 cursor-pointer capitalize">
                                            {item.name}
                                        </div>
                                    )
                                })
                            }

                        </div>

                        {/* -------------- Construction Solution -------------------- */}
                        <div className="w-[38%] h-full flex flex-col gap-0.5 max-xs:text-[2vw] text-[0.54rem] md:text-[0.54rem] lg:text-[0.76rem] mdlg:text-[0.66rem] xl:text-[0.95rem]">
                            <h3
                                className="uppercase text-text1 flex items-center max-xs:gap-1 max-xs:mb-2 gap-1 mb-1 md:gap-1 md:mb-1 lg:gap-2 lg:mb-2"
                            >
                                <span
                                    className="max-xs:w-[1.8vw] max-xs:h-[1.8vw] w-[9px] h-[9px] md:w-[9px] md:h-[9px] mdlg:w-[11px] mdlg:h-[11px] lg:w-[15px] lg:h-[15px] rounded-full bg-[linear-gradient(94deg,rgba(217,217,217,1)_99%,rgba(115,115,115,1)_100%)]"
                                />
                                <span className="max-xs:text-[2vw] text-[0.6rem] md:text-[0.6rem] mdlg:text-[0.9rem] lg:text-[1rem]">Construction Solution</span>

                            </h3>
                            {
                                ConstructionSolution.map((item, i) => {
                                    return (
                                        <div key={i} className="text-text1 opacity-80 hover:opacity-100 cursor-pointer capitalize">
                                            {item.name}
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                    <div className="w-full max-xs:h-[35%] h-[25%] sm:h-[25%] flex max-xs:flex-col max-xs:gap-[10%] max-xs:text-[2vw] text-[0.54rem] md:text-[0.54rem] mdlg:text-[0.66rem] lg:text-[0.76rem] xl:text-[0.95rem]">
                        <div className="max-xs:w-[65%] w-[50%] sm:w-[50%]">
                            <h3
                                className="uppercase text-text1 flex items-center max-xs:gap-1 max-xs:mb-2 gap-1 mb-1 md:gap-1 md:mb-1 lg:gap-2 lg:mb-2"
                            >
                                <span
                                    className="max-xs:w-[1.8vw] max-xs:h-[1.8vw] w-[9px] h-[9px] md:w-[9px] md:h-[9px] mdlg:w-[11px] mdlg:h-[11px] lg:w-[15px] lg:h-[15px] rounded-full bg-[linear-gradient(94deg,rgba(217,217,217,1)_99%,rgba(115,115,115,1)_100%)]"
                                />
                                <span className="max-xs:text-[2vw] text-[0.6rem] md:text-[0.6rem] mdlg:text-[0.9rem] lg:text-[1rem]">contact</span>

                            </h3>
                            <p className="uppercase text-text1 flex gap-1">
                                <span>📞</span>
                                <span>Corporate office</span>: <span>[Your Address]</span>
                            </p>
                            <p className="uppercase text-text1 flex gap-1">
                                <span>📞</span>
                                <span>Phone</span>: <span>+91-XXXX-XXXX-XX</span>
                            </p>
                            <p className="uppercase text-text1 flex gap-1">
                                <span>📞</span>
                                <span>Email</span>: <span>info@yourcampany.com</span>
                            </p>
                        </div>
                        <div className="flex justify-center items-center max-xs:w-[65%] w-[50%] sm:w-[50%] h-full">
                            <p className="text-text1">
                                © 2026 [Company Name]. All Rights Reserved. <br /> Privacy Policy | Terms & Conditions | Cookies Policy
                            </p>
                        </div>
                    </div>

                </div>

                <div className="max-xs:absolute max-xs:bottom-[0vh] max-xs:right-[5%] flex w-[30%] max-xs:h-auto h-full justify-center" >

                    <img
                        src={Logo}
                        alt=''
                        className="w-full"
                        style={{
                            objectFit: "contain"
                        }}
                        loading="lazy"
                    />
                </div>

            </div>

        </div>
    );
}

export default Footer;
