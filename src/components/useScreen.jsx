import { useState, useEffect } from "react";

export const useScreen = () => {
  const [screen, setScreen] = useState("xxs");

  useEffect(() => {
    const breakpoints = {
      xxxs: 355,
      xxs: 410,
      xs: 653,
      sm: 855,
      md: 1020,
      mdlg: 1240,
      lg: 1500,
      xl: 1900,
    };

    const update = () => {
      const width = window.innerWidth;

      if (width >= breakpoints.xl) setScreen("xl");
      else if (width >= breakpoints.lg) setScreen("lg");
      else if (width >= breakpoints.mdlg) setScreen("mdlg");
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