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
        bgcolor: "rgba(247, 244, 238, 0.94)",
        borderBottom: "1px solid rgba(24, 32, 38, 0.12)",
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
          px: "clamp(18px, 4vw, 64px)",
          py: 2.25,
        }}
      >
        <Brand />
        <Box
          component="nav"
          aria-label="Main navigation"
          sx={{
            display: "flex",
            gap: { xs: 0.5, sm: 1.5, md: 3 },
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
              sx={{ color: "#33424c", minWidth: 0, px: { xs: 0.75, sm: 1.25 } }}
            >
              {item.label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
