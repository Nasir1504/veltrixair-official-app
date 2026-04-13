import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import ShutterContent from "./ShutterContent";
import WhyChoose from "./WhyChoose";
import { Footer } from "../../../components";
import BuildInfrastructure from "../BuildInfrastructure";
import {
    FloatingBlob,
    StackOfCards
} from "../../../components";


const Services = ({
    Item
}) => {
    const [trigger, setTrigger] = useState(false);

    useEffect(() => {
        let handler = setTimeout(() => {
            setTrigger(true);
        }, 800);

        return () => clearTimeout(handler);
    }, []);
    return (
        <div className='relative z-1 services-main bg-bg8'>


            <Helmet>
                <title>{Item.metaTitle}</title>
                <meta name="description" content={Item.metaDescription} />

            </Helmet>
            <div className="fixed z-1 max-xs:top-[-35vw] max-xs:left-[10%] top-[-40%] mdlg:top-[-32%] lg:top-[-32%] xl:top-[-34%] left-[39%]">
                <FloatingBlob
                    BGColor={trigger && "#375CA5"}

                />
            </div>

            <div className="fixed z-1 max-xs:bottom-[-35vw] max-xs:left-[10%] bottom-[-40%] mdlg:bottom-[-32%] lg:bottom-[-32%] xl:bottom-[-34%] left-[39%]">
                <FloatingBlob
                    BGColor={trigger && "#375CA5"}

                />
            </div>
            {/* ------------------------------------------------- */}

            <div className="relative z-2">

                <ShutterContent
                    Trigger={trigger}
                    Heading1={Item.headingPart1}
                    Heading2={Item.headingPart2}
                    SubHeading={Item.subHeading}

                />
                <StackOfCards
                    SolutionWeProvide={Item.solutionWeProvide}
                />
                <WhyChoose />
                <BuildInfrastructure />
                <Footer />
            </div>
        </div>
    );
}

export default Services;
