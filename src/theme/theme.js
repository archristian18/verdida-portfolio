import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#186600",
      dark: "#6e6e6e",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#6e6e6e",
      contrastText: "#186600",
    },
    background: {
      default: "#FFFFFF",
      gray: "#FFFFFF",
      colored: "rgba(5, 7, 5, 0.11)",
    },
    text: {
      primary: "#186600",
      secondary: "#186600",
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontWeight: 850,
      letterSpacing: 0,
      lineHeight: 0.94,
    },
    h2: {
      fontWeight: 800,
      letterSpacing: 0,
      lineHeight: 1.05,
    },
    h3: {
      fontWeight: 800,
      letterSpacing: 0,
    },
    button: {
      fontWeight: 800,
      textTransform: "none",
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          minHeight: 48,
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});
