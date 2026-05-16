import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import BrandMark from "../atoms/BrandMark.jsx";

export default function Brand() {
  return (
    <Link
      href="#home"
      aria-label="AVerdida home"
      underline="none"
      color="inherit"
      sx={{ alignItems: "center", display: "inline-flex", gap: 1.5 }}
    >
      <BrandMark />
      <Stack spacing={0.35}>
        <Typography component="strong" sx={{ fontWeight: 850, lineHeight: 1.05 }}>
          AVerdida
        </Typography>
        <Typography component="small" color="text.secondary" sx={{ fontSize: "0.78rem" }}>
          Surveying & Realty Services
        </Typography>
      </Stack>
    </Link>
  );
}
