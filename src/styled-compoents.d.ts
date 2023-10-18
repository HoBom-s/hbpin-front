import "styled-components";

declare module "styled-components" {
  /**
   * ThemeProvider에 들어갈 Theme type 정의
   *
   * border, fontSize, screenSize, etc...
   */
  export interface DefaultTheme {
    // 반응형에 필요한 ScreenSize type 정의
    screenSize: {
      sm: string;
      md: string;
      lg: string;
    };

    // HoBom에 사용될 공통 Border 정의
    border: {
      radius: {
        none: string;
        sm: string;
        md: string;
        lg: string;
      };
    };

    // HoBom 색상 정의
    colors: {
      black600: string;
      black700: string;
      black900: string;
      white700: string;
    };

    // HoBom font weight & size 정의
    font: {
      weight: {
        fw100: string;
        fw200: string;
        fw400: string;
        fw700: string;
      };
    };
  }
}
