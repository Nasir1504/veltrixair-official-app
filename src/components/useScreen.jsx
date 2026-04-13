import { useState, useEffect } from "react";

export const useScreen = () => {
  const [screen, setScreen] = useState("xxs");

  useEffect(() => {
    const breakpoints = {
      xxxs: 365,
      xxs: 440,
      xs: 653,
      sm: 900,
      md: 1024,
      mdlg: 1250,
      lg: 1500,
      xl: 1900,
    };

    const update = () => {
      const width = window.innerWidth;

      if (width >= breakpoints.xl) setScreen("xl");
      else if (width >= breakpoints.lg) setScreen("lg");
      else if (width >= breakpoints.md) setScreen("mdlg");
      else if (width >= breakpoints.md) setScreen("md");
      else if (width >= breakpoints.sm) setScreen("sm");
      else if (width >= breakpoints.xs) setScreen("xs");
      else if (width >= breakpoints.xxs) setScreen("xxs");
      else setScreen("xxxs");
    };

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return screen;
};