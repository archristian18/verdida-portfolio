import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0f6b5f",
      dark: "#0a4c43",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#d89d3d",
      contrastText: "#182026",
    },
    background: {
      default: "#f7f4ee",
      paper: "#fffdf8",
    },
    text: {
      primary: "#182026",
      secondary: "#60707b",
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
