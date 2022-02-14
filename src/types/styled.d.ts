import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    name: string;
    colors: {
      default: {
        "500": string;
        "700": string;
      };
      background: string;
      button: string;
      primary: {
        "500": string;
        "600": string;
        "700": string;
        "800": string;
      };
      secondry: {
        "500": string;
        "700": string;
      };
      success: {
        "100": string;
        "500": string;
      };
      error: {
        "100": string;
        "500": string;
        "700": string;
      };
      grey: {
        "50": string;
        "100": string;
        "200": string;
        "300": string;
        "400": string;
        "500": string;
        "600": string;
        "700": string;
        "800": string;
        "900": string;
      };
      white: string;
      black: string;
    };
    sizes: {
      remUnit: number;
      toRem: (px: number) => string;
      typography: {
        h1: number;
        h2: number;
        h3: number;
        h4: number;
        h5: number;
        h6: number;
        body1: number;
        body2: number;
      };
    };
    animation: {
      transition: number;
    };
  }
}
