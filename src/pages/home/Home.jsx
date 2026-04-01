import { Outlet } from "react-router-dom";

import {
  EngineeringFuture,
  SplineScene,
  InfrastructureOverview,
  BuildInfrastructure,
  Footer,
  HomeMission
} from ".";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

// styles
import "./styles.scss";


const Home = () => {

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const reset = () => {
      window.scrollTo(0, 0);
    };

    reset();

    setTimeout(reset, 50); // ensure after layout
  }, []);

  return (
    <div className="home-main bg-bg1">

      <Helmet>
        <title>IT Infrastructure & Industrial Engineering Solutions | Veltrixair</title>
        <meta name="description" content="Delivering integrated IT infrastructure, cloud systems and industrial construction services designed for reliability, compliance and long-term operational performance." />
      </Helmet>
      <Outlet />
      <EngineeringFuture />
      <InfrastructureOverview />


      {/* <div className="overflow-hidden relative z-1 max-xs:hidden">
        <SplineScene />
      </div> */}

      <HomeMission />
      <BuildInfrastructure PageName={"home"} />

      <Footer />
    </div>
  );
};

export default Home;
