import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconFrame from "../atoms/IconFrame.jsx";

export default function ServiceCard({ icon, title, text }) {
  return (
    <Card
      variant="outlined"
      sx={{
        bgcolor: "background.paper",
        borderColor: "rgba(24, 32, 38, 0.13)",
        boxShadow: "0 16px 46px rgba(24, 32, 38, 0.08)",
        height: "100%",
      }}
    >
      <CardContent sx={{ p: 3, "&:last-child": { pb: 3 } }}>
        <IconFrame icon={icon} />
        <Typography component="h3" variant="h6" sx={{ mt: 1.75, mb: 1, fontWeight: 850 }}>
          {title}
        </Typography>
        <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
}
