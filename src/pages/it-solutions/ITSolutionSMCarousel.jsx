import { useState, useEffect } from "react";
import { useScreen } from "../../components/useScreen";
import { InfrastructureCard } from "../../components";
import { Stickyroll } from "@stickyroll/react";

// imgs
import {
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
    Img14,
    Img15,

} from "../../assets/imgs/it-solutions";

// ------------------ DATA ---------------

const INFRASTRUCTURE_CARD_DATA = [
    {
        heading: "Enterprise-grade web, mobile, & business applications using modern frameworks and secure architectures.",
        subHeading: "Custom Software & Applications",
        concent: "Services Include:",
        subContent: "NET, PHP, Python, JavaScript, Android/iOS, React/Angular, Salesforce, UX Design.",
        imgURL: Img1,
        bgColor: "072765",
        linkTo: "/###",
        // videoLink: ConstructionHomepageCard
    },
    {
        heading: "Design, deployment, & management of secure enterprise networks.",
        subHeading: "Network Infrastructure Services",
        concent: "Services Include:",
        subContent: "LAN/WAN/Wi-Fi, routers & firewalls, VPN, SD-WAN, bandwidth optimization.",
        imgURL: Img2,
        bgColor: "072765",
        linkTo: "/###",
        // videoLink: ITHomepageCard
    },
    {
        heading: "Secure surveillance & structured cabling infrastructure.",
        subHeading: "Network & CCTV Solutions",
        concent: "Services Include:",
        subContent: "CCTV design, fiber cabling, structured networks, troubleshooting & maintenance.",
        imgURL: Img3,
        bgColor: "072765",
        linkTo: "/###",
        // videoLink: ConsultancyHomepageCard
    },

    {
        heading: "High-speed internet connectivity for remote and critical environments.",
        subHeading: "Internet Connectivity Solutions",
        concent: "Services Include:",
        subContent: "Dedicated Internet Access (DIA), P2P links, satellite internet.",
        imgURL: Img4,
        bgColor: "072765",
        linkTo: "/###",
        // videoLink: ConsultancyHomepageCard
    },
    {
        heading: "Designing scalable, secure IT environments.",
        subHeading: "Infrastructure Architecture & Design",
        concent: "Services Include:",
        subContent: "Data centers, cloud architectures, DR planning, HA systems.",
        imgURL: Img5,
        bgColor: "072765",
        linkTo: "/###",
        // videoLink: ConsultancyHomepageCard
    },
    {
        heading: "Design, build, optimize, & manage enterprise data centers.",
        subHeading: "Data Center Services",
        concent: "Services Include:",
        subContent: "Server rooms, cooling, power, rack systems, monitoring.",
        imgURL: Img6,
        bgColor: "072765",
        linkTo: "/###",
        // videoLink: ConsultancyHomepageCard
    },

    {
        heading: "Provisioning and managing enterprise compute environments.",
        subHeading: "Server Infrastructure Services",
        concent: "Services Include:",
        subContent: "Physical/virtual servers, VMware/Hyper-V, patching, DNS/DHCP.",
        imgURL: Img7,
        bgColor: "072765",
        linkTo: "/###",
        // videoLink: ConsultancyHomepageCard
    },
    {
        heading: "High-performance & cloud-integrated storage architectures.",
        subHeading: "Storage Solutions",
        concent: "Services Include:",
        subContent: "SAN/NAS/DAS, cloud storage, backup systems, storage virtualization.",
        imgURL: Img8,
        bgColor: "072765",
        linkTo: "/###",
        // videoLink: ConsultancyHomepageCard
    },
    {
        heading: "Cloud adoption, migration, & optimization.",
        subHeading: "Cloud Infrastructure Services",
        concent: "Services Include:",
        subContent: "AWS, Azure, GCP, hybrid cloud, CI/CD, cost optimization.",
        imgURL: Img9,
        bgColor: "072765",
        linkTo: "/###",
        // videoLink: ConsultancyHomepageCard
    },

    {
        heading: "Enterprise-grade security protection layers.",
        subHeading: "Cybersecurity Infrastructure",
        concent: "Services Include:",
        subContent: "Firewalls, EDR, SIEM, email/web security, IPS/IDS.",
        imgURL: Img10,
        bgColor: "072765",
        linkTo: "/###",
        // videoLink: ConsultancyHomepageCard
    },
    {
        heading: "Business continuity through robust DR systems.",
        subHeading: "Backup & Disaster Recovery",
        concent: "Services Include:",
        subContent: "DR planning, automated backups, failover testing, offsite recovery.",
        imgURL: Img11,
        bgColor: "072765",
        linkTo: "/###",
        // videoLink: ConsultancyHomepageCard
    },
    {
        heading: "Enterprise process automation platforms.",
        subHeading: "ERP Solutions",
        concent: "Services Include:",
        subContent: "HRMS, payroll, finance, procurement, inventory, asset management.",
        imgURL: Img12,
        bgColor: "072765",
        linkTo: "/###",
        // videoLink: ConsultancyHomepageCard
    },

    {
        heading: "24/7 technical support & managed IT services.",
        subHeading: "Helpdesk & Managed IT Support",
        concent: "Services Include:",
        subContent: "L1/L2/L3 support, remote helpdesk, onsite engineers, SLA-driven support.",
        imgURL: Img13,
        bgColor: "072765",
        linkTo: "/###",
        // videoLink: ConsultancyHomepageCard
    },
    {
        heading: "Secure business communication infrastructure.",
        subHeading: "Professional Email & Domain Services",
        concent: "Services Include:",
        subContent: "Microsoft 365, Google Workspace, domain registration, migrations.",
        imgURL: Img14,
        bgColor: "072765",
        linkTo: "/###",
        // videoLink: ConsultancyHomepageCard
    },
    {
        heading: "Growth-focused digital visibility solutions.",
        subHeading: "Digital Marketing Services",
        concent: "Services Include:",
        subContent: "SEO, SEM, social media marketing, content marketing, CRM/email campaigns.",
        imgURL: Img15,
        bgColor: "072765",
        linkTo: "/###",
        // videoLink: ConsultancyHomepageCard
    },
]

const clamp = (min, max, val) => Math.max(min, Math.min(max, val));


const ITSolutionSMCarousel = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        setProgress({ Progress: 0, Page: 0 });
    }, [])
    const [progress, setProgress] = useState({
        Progress: 0,
        Page: 0,
    });
    const total = progress.Progress + progress.Page;
    const screen = useScreen();
    let scrollVal = 212;
    let scrollFactor = 280;

    useEffect(() => {
        if (screen === "xl") {
            scrollVal = 212;
            scrollFactor = 280;
        }
        else if (screen === "lg") {
            scrollVal = 300
        }
        else if (screen === "md") {
            scrollVal = 252;
            scrollFactor = 380;
        }
    }, [screen])



    return (

        <Stickyroll
            pages={1}
            factor={3}
            onProgress={(prog, page, _) => {
                setProgress({
                    Progress: prog,
                    Page: page,
                });
            }}
        >
            {/* <p className="fixed bg-[#00000030] top-0 flex flex-col text-yellow-800 z-5">
                <span>{progress.Progress}</span>
                <span>PAGE: {progress.Page}</span>
                <span>Total: {total}</span>
                <span>{clamp(0, 1, ((total - 1) * 20))}</span>
                <span>{screen}</span>

            </p> */}
            <div
                className="relative top-0 flex flex-col justify-center items-center w-full max-xs:h-[100vh] h-[520px] md:h-[520px] lg:h-[780px] xl:h-[920px] border border-white"
            >
                <div
                    className="absolute max-xxs:top-[-6%] max-xs:top-[-15%] top-[-20%] rounded-[100%] max-xs:w-[45%] w-[28%] aspect-2/1 bg-bg9 z-3 blur-[60px] lg:blur-[80px] xl:blur-[100px] duration-200 ease-in-out"
                    style={{
                        opacity: `${clamp(0, 1, ((total - 1) * 40))}`

                    }}

                />
                <div className="flex h-[32%] flex-col justify-end items-center gap-1.5 md:gap-1.5 lg:gap-2">
                    <h4
                        className="font-['Saved_By_Zero'] text-text2 text-[1rem] md:text-[1rem] lg:text-[1.4rem] xl:text-[1.8rem]
                            max-xs:text-[3.4vw]"
                    >
                        ENGINEERING
                    </h4>
                    <h2 className="text-white text-center font-bold text-[1.4rem] md:text-[1.4rem] lg:text-[1.9rem] xl:text-[2.1rem] leading-tight [text-shadow:0.06em_0.06em_2px_rgba(0,0,0,08)]
                              max-xs:text-[5.2vw]"
                    >
                        <span>Digital Systems</span>
                        <br />
                        <span>Physical Infrastructure</span>
                    </h2>
                    <p className="text-text2 text-[0.7rem] md:text-[0.7rem] lg:text-[0.9rem] xl:text-[1rem] capitalize
                            max-xs:text-[2.4vw] max-xs:text-center px-[16%] text-center"
                    >
                        From enterprise IT infrastructure to industrial construction
                        execution
                    </p>
                </div>
                <div className="relative w-full">
                    <div className="flex gap-[2%]"
                        style={{
                            // transform: `translateX(-${clamp(0, scrollVal, ((total - 1.1) * 350))}%)`
                            transform: `translateX(-${clamp(0, scrollVal, ((total - 1.1) * scrollFactor))}%)`

                        }}
                    >

                        {INFRASTRUCTURE_CARD_DATA.map((item, i) => (
                            <div
                                key={i}
                                className="shrink-0"
                            >
                                <p className="text-text1">{i}</p>
                                <InfrastructureCard
                                    key={i}
                                    Id={i}
                                    Heading={item.heading}
                                    SubHeading={item.subHeading}
                                    Concent={item.concent}
                                    SubContent={item.subContent}
                                    ImgURL={item.imgURL}
                                    BGColor={item.bgColor}
                                    LinkTo={item.linkTo}
                                    // VideoUrl={item.videoLink}
                                    showIcon={false}
                                    HoverEffect={false}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </Stickyroll>

    );
}

export default ITSolutionSMCarousel;
