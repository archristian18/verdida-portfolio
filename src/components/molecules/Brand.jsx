import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Brand() {
  return (
    <Link
      href="/#home"
      aria-label="home"
      underline="none"
      color="inherit"
      sx={{ alignItems: "center", display: "inline-flex", gap: { xs: 1, sm: 1.25, lg: 1.5 } }}
    >
      <Stack spacing={-0.5} sx={{ lineHeight: 1, height: { xs: 72, sm: 100 }, justifyContent: 'center' }} > 
        <Typography
          component="strong"
          sx={{
            fontWeight: 850,
            lineHeight: 1.05,
            fontSize: { xs: "1.55rem", sm: "1.95rem", md: "2.1rem", lg: "2.5rem" },
            padding: 0,
          }}
        >
          Project Portfolio
        </Typography>
      </Stack>
    </Link>
  );
}
