import { DefaultTheme } from "styled-components";

export const theme: DefaultTheme = {
  screenSize: {
    sm: "screen and (max-width: 640px)",
    md: "screen and (min-width: 641px) and (max-width: 1279px)",
    lg: "screen and (min-width: 1280px)",
  },
  border: {
    radius: {
      none: "none",
      sm: "3px",
      md: "4px",
      lg: "6px",
    },
  },
  colors: {
    black600: "#535353",
    black700: "#3C3C3C",
    black900: "#000000",
    white700: "#FFFFFF",
  },
  font: {
    weight: {
      fw100: "100",
      fw200: "200",
      fw400: "400",
      fw700: "700",
    },
  },
};
