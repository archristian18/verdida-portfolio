import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Brand from "../molecules/Brand.jsx";
import { navItems } from "../../data/siteContent.js";

export default function Header() {
  return (
    <AppBar
      position="sticky"
      color="transparent"
      elevation={0}
      sx={{
        backdropFilter: "blur(16px)",
        bgcolor: "rgba(255, 255, 255, 0.94)",
        borderBottom: "1px solid rgba(0, 9, 102, 0.12)",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          alignItems: { xs: "flex-start", sm: "center" },
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 1.5, sm: 3 },
          justifyContent: "space-between",
          minHeight: "auto",
          px: "clamp(5px, 4vw, 20px)",
          py: 1,
        }}
      >
        <Brand />
        <Box
          component="nav"
          aria-label="Main navigation"
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            gap: { xs: 0.5, sm: 0.75, md: 1.25, lg: 2 },
            justifyContent: { xs: "space-between", sm: "flex-end" },
            width: { xs: "100%", sm: "auto" },
          }}
        >
          {navItems.map((item) => (
            <Button
              key={item.href}
              component="a"
              href={item.href}
              variant="text"
              color="inherit"
              sx={{
                color: "text.primary",
                minWidth: 0,
                px: { xs: 0.5, sm: 1, md: 1.1, lg: 1.5 },
                fontSize: { xs: "0.82rem", sm: "0.88rem", md: "0.94rem", lg: "1rem" },
                whiteSpace: "nowrap",
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
