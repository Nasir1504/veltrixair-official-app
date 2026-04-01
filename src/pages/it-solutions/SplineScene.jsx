import Spline from "@splinetool/react-spline";
import { memo, useState } from "react";

// imgs
import { VeltrixairIcon } from "../../assets/imgs/home";

const SplineScene = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-full">
      {/*  Simple Loader (non-blocking) */}
      {!loaded && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-bg1 text-white">
          <img src={VeltrixairIcon} alt="logo" />
          <p>Loading...</p>
        </div>
      )}

      <Spline
        className="w-full h-full"
        scene="https://prod.spline.design/h8AQ9ukR8w2Bk7MQ/scene.splinecode"
        renderOnDemand={true}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default memo(SplineScene);