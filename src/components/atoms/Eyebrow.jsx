import Typography from "@mui/material/Typography";

export default function Eyebrow({ children, color = "secondary.main" }) {
  return (
    <Typography
      component="p"
      sx={{
        color,
        fontSize: "0.78rem",
        fontWeight: 850,
        letterSpacing: 0,
        mb: 1.75,
        textTransform: "uppercase",
      }}
    >
      {children}
    </Typography>
  );
}
