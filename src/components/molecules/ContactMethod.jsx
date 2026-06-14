import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconFrame from "../atoms/IconFrame.jsx";

export default function ContactMethod({ icon, label, href, text, items }) {
  const isExternalLink = href?.startsWith("http");
  const content = (
    <Stack direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
      <IconFrame icon={icon} size={21} />
      <Stack spacing={0.25}>
        <Typography component="span" sx={{ color: "text.primary", fontWeight: 750 }}>
          {label}
        </Typography>
        {text ? (
          <Typography component="span" sx={{ color: "text.secondary", lineHeight: 1.45 }}>
            {text}
          </Typography>
        ) : null}
        {items?.length ? (
          <Stack component="ul" sx={{ color: "text.secondary", m: 0, pl: 2 }}>
            {items.map((item) => (
              <Typography
                key={item}
                component="li"
                sx={{
                  color: "text.secondary",
                  fontSize: "0.93rem",
                  lineHeight: 1.45,
                  whiteSpace: "pre-line",
                }}
              >
                {item.trim()}
              </Typography>
            ))}
          </Stack>
        ) : null}
      </Stack>
    </Stack>
  );

  if (href) {
    return (
      <Link
        href={href}
        underline="none"
        color="inherit"
        target={isExternalLink ? "_blank" : undefined}
        rel={isExternalLink ? "noopener noreferrer" : undefined}
      >
        {content}
      </Link>
    );
  }

  return <div>{content}</div>;
}
