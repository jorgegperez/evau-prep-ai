type IFontWeight =
  | "bold"
  | "normal"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

interface ITheme {
  colors: {
    textPrimary: string;
    textSecondary: string;
    primary: string;
    secondary: string;
    background: string;
    white: string;
    
    success: string;
    error: string;
    warning: string;
    link: string;
  };
  fontSizes: {
    body: number;
    header: number;
    subheading: number;
  };
  fonts: {
    main: string;
  };
  fontWeights: {
    normal: IFontWeight;
    bold: IFontWeight;
  };
}

export const theme: ITheme = {
  colors: {
    textPrimary: "black",
    textSecondary: "white",
    primary: "#0366d6",
    secondary: "#586069",
    background: "#f0f0f0",
    white: "white",
    
    success: '#52C41A',
    error: '#FF4D4F',
    warning: '#FEB816',
    link: '#1890FF',
  },
  fontSizes: {
    body: 14,
    header: 20,
    subheading: 16,
  },
  fonts: {
    main: "System",
  },
  fontWeights: {
    normal: "400",
    bold: "600",
  },
};
