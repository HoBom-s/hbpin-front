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
      sm: "6px",
      md: "8px",
      lg: "10px",
    },
  },
};
