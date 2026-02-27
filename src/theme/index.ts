import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import { typography } from "./typography";

export const theme = createTheme({
  palette: {
    primary: palette.primary,
    text: {
      primary: palette.text.primary,
      secondary: palette.text.secondary,
    },
    background: palette.background,
    grey: palette.grey as any,
  },
  typography: typography as any,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  shape: {
    borderRadius: 12,
  },

  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Manrope, Roboto, Helvetica, Arial, sans-serif',
          fontWeight: 400,
          lineHeight: 1.6,
          letterSpacing: 0,
          "@media (max-width:600px)": {
            textAlign: "center",
          },
          "@media (min-width:600px)": {
            textAlign: "inherit",
          },
        },
        h1: {
          fontSize: "56px",
          fontWeight: 700,
          lineHeight: 1.1,
        },
        h2: {
          fontSize: "48px",
          fontWeight: 700,
          lineHeight: 1.2,
        },
        h3: {
          fontSize: "40px",
          fontWeight: 600,
          lineHeight: 1.3,
        },
        h4: {
          fontSize: "32px",
          fontWeight: 600,
          lineHeight: 1.4,
        },
        h5: {
          fontSize: "24px",
          fontWeight: 600,
          lineHeight: 1.5,
        },
        h6: {
          fontSize: "20px",
          fontWeight: 600,
          lineHeight: 1.5,
        },
        body1: {
          fontSize: "18px",
          fontWeight: 400,
          lineHeight: 1.7,
        },
        body2: {
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: 1.7,
        },
        subtitle1: {
          fontSize: "20px",
          fontWeight: 700,
        },
        subtitle2: {
          fontSize: "14px",
          fontWeight: 600,
        },
        button: {
          fontSize: "16px",
          fontWeight: 600,
          textTransform: "none",
          lineHeight: 1.5,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "none",
          padding: "12px 24px",
          fontWeight: 600,
          fontSize: "16px",
          "@media (max-width:600px)": {
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
          },
          "@media (min-width:600px)": {
            marginLeft: "inherit",
            marginRight: "inherit",
            display: "inline-flex",
          },
        },
      },
    },
  },
});
