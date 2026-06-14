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
      sx={{ alignItems: "center", display: "inline-flex", gap: { xs: 1, sm: 1.25, lg: 1.5 } }}
    >
      <BrandMark />
      <Stack spacing={-0.5} sx={{ lineHeight: 1 }}>
        <Typography
          component="strong"
          sx={{
            fontWeight: 850,
            lineHeight: 1.05,
            fontSize: { xs: "1.55rem", sm: "1.95rem", md: "2.1rem", lg: "2.5rem" },
            padding: 0,
          }}
        >
          AVerdida
        </Typography>
        <Typography
          component="small"
          color="text.secondary"
          sx={{
            fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem", lg: "1.78rem" },
            marginTop: -0.5,
            padding: 0,
          }}
        >
          Surveying & Realty Services
        </Typography>
      </Stack>
    </Link>
  );
}
