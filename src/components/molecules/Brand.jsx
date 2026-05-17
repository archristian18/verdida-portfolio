import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import BrandMark from "../atoms/BrandMark.jsx";

export default function Brand() {
  return (
    <Link
      href="/#home"
      aria-label="AVerdida home"
      underline="none"
      color="inherit"
      sx={{ alignItems: "center", display: "inline-flex", gap: 1.5 }}
    >
      <BrandMark />
      <Stack spacing={-0.5} sx={{ lineHeight: 1 }}>
        <Typography component="strong" sx={{ fontWeight: 850, lineHeight: 1.05, fontSize: { xs: "2.25rem", sm: "2.5rem", padding: 0 } }}>
          AVerdida
        </Typography>
        <Typography component="small" color="text.secondary" sx={{ fontSize: "1.78rem", marginTop: -0.5, padding: 0 }}>
          Surveying & Realty Services
        </Typography>
      </Stack>
    </Link>
  );
}
