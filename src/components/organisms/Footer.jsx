import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "text.primary",
        color: "rgba(255, 255, 255, 0.78)",
        display: "flex",
        flexWrap: "wrap",
        fontSize: "0.92rem",
        gap: 1.5,
        justifyContent: "space-between",
        px: "clamp(18px, 5vw, 78px)",
        py: 3.25,
      }}
    >
      <Typography component="span" sx={{ fontSize: "inherit" }}>
        2026 AVerdida Surveying & Realty Services
      </Typography>
      <Typography component="span" sx={{ fontSize: "inherit" }}>
        Designed and Developed by Archristian
      </Typography>
    </Box>
  );
}
