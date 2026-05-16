import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconFrame from "../atoms/IconFrame.jsx";

export default function ContactMethod({ icon, label, href }) {
  const content = (
    <Stack direction="row" alignItems="center" spacing={1.5}>
      <IconFrame icon={icon} size={21} />
      <Typography component="span" sx={{ color: "#33424c", fontWeight: 750 }}>
        {label}
      </Typography>
    </Stack>
  );

  if (href) {
    return (
      <Link href={href} underline="none" color="inherit">
        {content}
      </Link>
    );
  }

  return <div>{content}</div>;
}
