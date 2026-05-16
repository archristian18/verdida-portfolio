import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Eyebrow from "./Eyebrow.jsx";

export default function SectionHeading({ eyebrow, title }) {
  return (
    <Box sx={{ maxWidth: 760, mb: 4.25 }}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <Typography
        component="h2"
        variant="h2"
        sx={{
          fontSize: "clamp(2rem, 4vw, 4rem)",
          m: 0,
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
