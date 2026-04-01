import { useState, useEffect, useRef } from "react";
import { useLenis } from "lenis/react";

import { INFRASTRUCTURE_CARD_DATA } from "../pages/construction-page/Services";
import { Link, NavLink, useLocation } from "react-router-dom";

//imgs
import { VeltrixairIcon } from "../assets/imgs/home";
import VeltrixairIcon2 from "../assets/imgs/footer/veltrixair-logo-type-three.png";
import VeltrixairIcon3 from "../assets/imgs/footer/veltrixair-logo-type-two.png";
import PDFBtn from "../assets/imgs/navbar/pdf-btn.png";

const NavBar = ({
    Direction,
}) => {
    const [toggle, setToggle] = useState(false);
    const [subNavItem, setSubNavItem] = useState(0);
    const [navLinks, setNavLinks] = useState("/");
    const location = useLocation();

    const parts = location.pathname.split("/").filter(Boolean);
    const parent = parts[0] ? `/${parts[0]}` : "/";

    useEffect(() => {
        setSubNavItem(0)
    }, [toggle])

    useEffect(() => {
        setSubNavItem(0)
        setToggle(false)
    }, [Direction])

    useEffect(() => {
        if (location.pathname.startsWith("/construction-services-saudi-arabia")) {
            setSubNavItem(1);
        } else if (location.pathname.startsWith("/it-infrastructure-solutions")) {
            setSubNavItem(2);
        } else {
            setSubNavItem(0);
        }
        setNavLinks(parent);
    }, [location.pathname]);

    const peoplePath =
        navLinks === "/" || parent === "/people" || parent === "/about"
            ? "/people"
            : navLinks === "/construction-services-saudi-arabia"
                ? "/construction-services-saudi-arabia/people"
                : navLinks === "/it-infrastructure-solutions"
                    ? "/it-infrastructure-solutions/people"
                    : null;

    const aboutUsPath =
        navLinks === "/" || parent === "/people" || parent === "/about"
            ? "/about"
            : navLinks === "/construction-services-saudi-arabia"
                ? "/construction-services-saudi-arabia/about"
                : navLinks === "/it-infrastructure-solutions"
                    ? "/it-infrastructure-solutions/about"
                    : null;

    return (
        <div className={`flex flex-col select-none max-xs:hidden
                        ${toggle ? "h-[250px] md:h-[250px]  lg:h-[275px] xl:h-[300px]" : "h-[50px] md:h-[50px] lg:h-[55px] h-[60px]"}`}
        >
            <div className='w-full h-[60px] shrink-0 flex justify-center gap-[48%] items-center user'>
                <div className="relative w-[70px] h-full flex justify-start items-center ">
                    <div
                        className=" absolute w-[50%] h-[40%] bg-bg2 blur-[25px] rounded-full opacity-80"
                    />
                    <Link
                        className="top-0 left-0 z-1 absolute min-w-[260%] h-full cursor-pointer"
                        to={"/"}
                        onClick={() => setToggle(false)}
                    />

                    {toggle ?
                        <img
                            src={VeltrixairIcon2}
                            alt=''
                            className='min-w-[260%]'
                            style={{
                                objectFit: "contain"
                            }}
                        /> :
                        <img
                            src={VeltrixairIcon}
                            alt=''
                            className='w-full'
                            style={{
                                objectFit: "contain"
                            }}
                        />
                    }

                </div>
                <div className="font-[Saved_by_zero] uppercase w-[40%] flex items-center justify-center gap-[5%]
                                text-[0.85rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-[1rem]">

                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `shrink-0 text-text1 hover:underline ${isActive ? "underline" : ""}`
                        }
                    >Home</NavLink>

                    <button className="flex justify-center items-center gap-[2%] cursor-pointer text-text1"
                        onClick={() => setToggle(p => !p)}
                    >
                        <span
                            className={`
                            hover:underline
                         ${parent === "/construction-services-saudi-arabia" ||
                                    parent === "/it-infrastructure-solutions"
                                    ? "underline" : "none"}
                        `}
                        >Services</span>
                        <span className={`font-[Open_Sans] lowercase no-underline ${toggle ? "rotate-0 mb-[6%] md:mb-[6%] lg:mb-[4%] xl:mb-[2%]" : "rotate-180 md:mt-[4%] lg:mt-[0%] xl:mt-[4%]"}
                                            text-[0.8rem] md:text-[0.8rem] lg:text-[0.85rem] xl:text-[0.9rem]
                        `}>V</span>
                    </button>

                    {aboutUsPath && (
                        <NavLink
                            to={aboutUsPath}
                            className={({ isActive }) =>
                                `shrink-0 text-text1 hover:underline ${isActive ? "underline" : ""}`
                            }
                            onClick={() => setToggle(false)}
                        >
                            About Us
                        </NavLink>
                    )}

                    {peoplePath && (
                        <NavLink
                            to={peoplePath}
                            className={({ isActive }) =>
                                `shrink-0 text-text1 hover:underline ${isActive ? "underline" : ""}`
                            }
                            onClick={() => setToggle(false)}

                        >
                            People
                        </NavLink>
                    )}

                    <div className="w-[16%]">
                        <img
                            src={PDFBtn}
                            alt=""
                            style={{ objectFit: "contain" }}
                            className="w-full cursor-pointer"
                        />
                    </div>

                </div>
            </div>

            {/* ------------------------------------------- */}
            <div className='font-[saved_by_zero] w-full flex-1 shrink-0 flex justify-start items-center px-[5%] overflow-hidden'>
                <div className="flex flex-col justify-center items-start w-[20%] h-full gap-[6%]
                text-[0.7rem] md:text-[0.8rem] lg:text-[1.1rem] xl:text-[1.2rem]
                ">
                    <NavLink
                        to="/construction-services-saudi-arabia"
                        end
                        onClick={() => setToggle(false)}
                        onMouseEnter={() => { setSubNavItem(1) }}
                        className={({ isActive }) =>
                            `flex justify-center items-center cursor-pointer text-text1 ${isActive || parent === "/construction-services-saudi-arabia" ? "underline" : ""}`
                        }
                    >
                        <span>Construction</span>
                        <span className="text-[2rem] rotate-90">&#x2023;</span>
                    </NavLink>

                    <NavLink
                        to="/it-infrastructure-solutions"
                        end
                        onClick={() => setToggle(false)}
                        onMouseEnter={() => { setSubNavItem(2) }}
                        className={({ isActive }) =>
                            `flex justify-center items-center cursor-pointertext-text1 ${isActive || parent === "/it-infrastructure-solutions" ? "underline" : ""}`
                        }
                    >
                        <span>IT Infrastructure</span>
                        <span className="text-[2rem] rotate-90">&#x2023;</span>
                    </NavLink>

                    <button
                        className={`flex justify-center items-center cursor-pointer ${parent === "/advisory-service" ? "underline" : ""} text-text1`}
                        onMouseEnter={() => { setSubNavItem(3) }}
                    >
                        <span>Advisory service</span>
                        <span className="text-[2rem] rotate-90">&#x2023;</span>
                    </button>

                </div>
                {/* ---------------------------------------- */}
                <div className="w-[60%] h-[80%] flex items-center"
                    style={{
                        visibility: subNavItem < 1 && "hidden"
                    }}
                >
                    <div className={`relative w-[60%] bg-[linear-gradient(120deg,rgba(7,39,101,1)_51%,rgba(12,12,12,1)_100%)] rounded-[1.2rem] p-0.5
                                    ${subNavItem === 1 ? "h-[65%]" : subNavItem === 2 ? "h-[100%]" : "h-[50%]"}`}>
                        <div className="w-full h-full bg-[linear-gradient(120deg,rgba(18,18,18,1)_51%,rgba(115,115,115,1)_100%)]
                         rounded-[1rem] flex flex-col justify-start items-start gap-[5%] flex-wrap pl-[5%] pt-[2%] overflow-scroll">
                            <div className="absolute right-[2.5%] top-[5%] text-[1.2rem] cursor-pointer"
                                onClick={() => { setSubNavItem(0) }}
                            >&#x292C;</div>
                            {subNavItem === 1 &&
                                INFRASTRUCTURE_CARD_DATA.map((item, i) => {
                                    return <NavLink
                                        key={i}
                                        to={`/${item.linkTo}`}
                                        onClick={() => setToggle(false)}
                                        className={({ isActive }) =>
                                            `text-[0.7rem] md:text-[0.7rem] lg:text-[0.75rem] xl:text-[0.8rem] hover:underline text-text1 ${isActive ? "underline" : ""}`
                                        }
                                    >
                                        {item.subHeading}
                                    </NavLink>
                                })
                            }

                            {subNavItem === 2 &&
                                [...Array(15)].map((_, i) => {
                                    return <NavLink
                                        key={i}
                                        to="#"
                                        onClick={() => setToggle(false)}
                                        className={({ isActive }) =>
                                            `text-[0.7rem] md:text-[0.7rem] lg:text-[0.75rem] xl:text-[0.8rem] hover:underline text-text1 ${isActive ? "" : "underline"}`
                                        }
                                    >
                                        ITEM {i + 1}
                                    </NavLink>
                                })
                            }
                        </div>
                    </div>

                </div>
                {/* ---------------------------------------- */}

                <div className="h-[80%] w-[20%] bg-bg2 flex justify-center items-center">
                    <img
                        src={VeltrixairIcon3}
                        alt=""
                        className="w-[40%] drop-shadow-2xl object-contain"
                        style={{
                            objectFit: "contain"
                        }}
                    />
                </div>

            </div>

        </div>
    );
}


// ==================================== MOBILE =====================================


const NavBarMobile = ({
    SetToggle,
    Toggle,
    Direction
}) => {
    const [subNavItem, setSubNavItem] = useState(1);
    const [navLinks, setNavLinks] = useState("/");
    const location = useLocation();

    const parts = location.pathname.split("/").filter(Boolean);
    const parent = parts[0] ? `/${parts[0]}` : "/";

    // prevent scrolling Ref
    const ref = useRef(null);
    const lenis = useLenis();
    // useEffect(() => {
    //     setSubNavItem(0)
    // }, [toggle])

    // useEffect(() => {
    //     setSubNavItem(0)
    //     SetToggle({
    //         main: false,
    //         sub: false
    //     })
    // }, [Direction])

    useEffect(() => {
        if (location.pathname.startsWith("/construction-services-saudi-arabia")) {
            setSubNavItem(1);
        } else if (location.pathname.startsWith("/it-infrastructure-solutions")) {
            setSubNavItem(2);
        } else {
            setSubNavItem(0);
        }
        setNavLinks(parent);
    }, [location.pathname]);



    useEffect(() => {
        if (!ref.current || !lenis) return;

        if (Toggle.main) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    lenis.stop(); //stop scrolling
                } else {
                    lenis.start(); //resume scrolling
                }
            },
            {
                threshold: 0.6, // 60% visible
            }
        );

        observer.observe(ref.current);

        return () => {
            observer.disconnect();
            lenis.start(); // safety: always re-enable scroll
        };
    }, [lenis]);

    const peoplePath =
        navLinks === "/" || parent === "/people" || parent === "/about"
            ? "/people"
            : navLinks === "/construction-services-saudi-arabia"
                ? "/construction-services-saudi-arabia/people"
                : navLinks === "/it-infrastructure-solutions"
                    ? "/it-infrastructure-solutions/people"
                    : null;

    const aboutUsPath =
        navLinks === "/" || parent === "/people" || parent === "/about"
            ? "/about"
            : navLinks === "/construction-services-saudi-arabia"
                ? "/construction-services-saudi-arabia/about"
                : navLinks === "/it-infrastructure-solutions"
                    ? "/it-infrastructure-solutions/about"
                    : null;

    return (
        <div
            ref={ref}
            className={`flex flex-col justify-start items-start gap-[5%] pt-[25%] pl-[5%] select-none xs:hidden h-screen max-xxxs:text-[1.2rem] max-xxs:text-[1.4rem] max-xs:text-[1.6rem]
                        `} >
            {/* <BlockScrollSection /> */}

            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                    `shrink-0 text-text1 hover:underline ${isActive ? "underline" : ""}`
                }
                onClick={() => SetToggle(p => ({
                    main: false,
                    sub: false

                }))}

            >
                Home
            </NavLink>

            <button className="flex justify-between w-full items-center cursor-pointer text-text1 pr-[10%]"
                onClick={() => SetToggle(p => ({
                    main: p.main,
                    sub: true

                }))}
            >
                <span
                    className={`
                            hover:underline
                         ${parent === "/construction-services-saudi-arabia" ||
                            parent === "/it-infrastructure-solutions"
                            ? "underline" : "none"}
                        `}
                >Services</span>
                <span className={`font-[Open_Sans] lowercase no-underline
                                            
                        `}>&#x3e;</span>
            </button>

            {/* ---------------------------------------------------------------- */}


            <div className={`absolute flex flex-col justify-start items-start top-0 left-0 w-full h-screen pt-[25%] pl-[5%] gap-[2%] duration-150 ease-fluid bg-bg1 z-2
                            ${Toggle.sub ? "translate-x-[0%]" : "translate-x-[100%]"}`}
            >
                {/* BACK BUTTON */}
                <button
                    onClick={() => {
                        SetToggle(p => ({
                            main: p.main,
                            sub: false

                        }))
                        setSubNavItem(0)
                    }
                    }
                    className="absolute top-[2%] left-[4%] z-2 max-xxxs:text-[0.9rem] max-xxs:text-[1rem] flex max-xs:text-[1.1rem] gap-[10%] justify-center items-center"
                >
                    <span className="">&#x2190;</span><span>Back</span>


                </button>


                {/* Construction Nav */}
                <div className="w-full">
                    <button
                        className="relative flex justify-between w-full items-center cursor-pointer text-text1 pr-[10%]"

                    >
                        <span
                            onClick={() => setSubNavItem(1)}
                        >Construction</span> <span className={`font-[Open_Sans] lowercase no-underline
                                            text-[1rem]
                        `}>&#x3e;</span>
                        <span className={`absolute w-full h-full ${subNavItem === 1 ? "" : "hidden"}`}
                            onClick={() => setSubNavItem(0)}

                        />
                    </button>
                    <div className="flex flex-col text-[1rem] mt-[1rem]">


                        {
                            subNavItem === 1 &&
                            <div className="flex flex-col w-full gap-[1rem] bg-[#00000020] px-[5%] py-[4%]">
                                <NavLink
                                    to="/construction-services-saudi-arabia"
                                    end
                                    className={({ isActive }) =>
                                        `shrink-0 text-text1 hover:underline ${isActive ? "underline" : ""} capitalize`
                                    }
                                    onClick={() => SetToggle(p => ({
                                        main: false,
                                        sub: false

                                    }))}

                                >
                                    construction
                                </NavLink>{

                                    INFRASTRUCTURE_CARD_DATA.map((item, i) => {
                                        return <NavLink
                                            key={i}
                                            to={`/${item.linkTo}`}
                                            onClick={() => {
                                                setSubNavItem(0);
                                                SetToggle({
                                                    main: false,
                                                    sub: false
                                                })
                                            }}

                                            className={({ isActive }) =>
                                                `hover:underline text-text1 ${isActive ? "underline" : ""}`
                                            }
                                        >
                                            {item.subHeading}
                                        </NavLink>
                                    })}
                            </div>


                        }
                    </div>

                   
                </div>


                {/* It Infrastructure Nav */}
                <div className="w-full">
                    <button
                        className="relative flex justify-between w-full items-center cursor-pointer text-text1 pr-[10%]"

                    >
                        <span
                            onClick={() => setSubNavItem(2)}
                        >It Infrastructure</span>
                        <span className={`font-[Open_Sans] lowercase no-underline
                                            text-[1rem]
                        `}>&#x3e;</span>
                        <span className={`absolute w-full h-full ${subNavItem === 2 ? "" : "hidden"}`}
                            onClick={() => setSubNavItem(0)}

                        />
                    </button>
                    <div className="flex flex-col text-[1rem] mt-[1rem]">

                        {
                            subNavItem === 2 &&
                            <div className="flex flex-col w-full gap-[1rem] bg-[#00000020] px-[5%] py-[4%]">
                                <NavLink
                                    to="/it-infrastructure-solutions"
                                    end
                                    className={({ isActive }) =>
                                        `shrink-0 text-text1 hover:underline ${isActive ? "underline" : ""}`
                                    }
                                    onClick={() => {
                                        setSubNavItem(0);
                                        SetToggle({
                                            main: false,
                                            sub: false
                                        })
                                    }}

                                >
                                    It Infrastructure
                                </NavLink>
                                {subNavItem === 2 &&
                                    [...Array(15)].map((_, i) => {
                                        return <NavLink
                                            key={i}
                                            to="#"
                                            // onClick={() => SetToggle(false)}
                                            onClick={() => setSubNavItem(0)}

                                            className={({ isActive }) =>
                                                `text-[0.7rem] md:text-[0.7rem] lg:text-[0.75rem] xl:text-[0.8rem] hover:underline text-text1 ${isActive ? "" : "underline"}`
                                            }
                                        >
                                            ITEM {i + 1}
                                        </NavLink>
                                    })
                                }
                            </div>


                        }
                    </div>
                </div>

                {/* Advisory Nav */}
                <button>
                    Advisory
                </button>


            </div>


            {/* ------------------------------ */}
            {aboutUsPath && (
                <NavLink
                    to={aboutUsPath}
                    className={({ isActive }) =>
                        `shrink-0 text-text1 hover:underline ${isActive ? "underline" : ""}`
                    }
                    onClick={() => SetToggle(p => ({
                        main: false,
                        sub: false

                    }))}
                >
                    About Us
                </NavLink>
            )}

            {peoplePath && (
                <NavLink
                    to={peoplePath}
                    className={({ isActive }) =>
                        `shrink-0 text-text1 hover:underline ${isActive ? "underline" : ""}`
                    }
                    onClick={() => SetToggle(p => ({
                        main: false,
                        sub: false

                    }))}
                >
                    People
                </NavLink>
            )}



        </div>
    );
}


export default NavBar;
export { NavBarMobile };
