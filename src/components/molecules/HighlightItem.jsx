import Box from "@mui/material/Box";
import { CheckCircle2 } from "lucide-react";

export default function HighlightItem({ children }) {
  return (
    <Box
      component="span"
      sx={{
        alignItems: "center",
        bgcolor: "rgba(255, 255, 255, 0.14)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        borderRadius: 1,
        color: "rgba(255, 255, 255, 0.92)",
        display: "flex",
        fontWeight: 750,
        gap: 1.25,
        minHeight: 74,
        p: 2,
      }}
    >
      <CheckCircle2 size={18} aria-hidden="true" />
      {children}
    </Box>
  );
}
