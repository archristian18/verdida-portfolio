import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SectionHeading from "../atoms/SectionHeading.jsx";

const statements = [
  {
    title: "Our Mission",
    text: "To provide fast, easy & reliable surveying & realty services to the community with integrity & professionalism. Taking the work to its most innovative & convenient way to cater the needs of our every client.",
  },
  {
    title: "Our Vision",
    text: "To be a brand of the country with an outstanding record of service and significance to each development that we will be involve.",
  },
];

export default function MissionVisionSection() {
  return (
    <Box
      component="section"
      id="mission-vision"
      sx={{
        bgcolor: "rgba(0, 198, 211, 0.08)",
        px: "clamp(18px, 5vw, 78px)",
        py: "clamp(64px, 9vw, 104px)",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "grid",
          gap: "clamp(32px, 5vw, 72px)",
          gridTemplateColumns: "1fr",
          mx: "auto",
          maxWidth: 980,
        }}
      >
        <Box>
          <SectionHeading eyebrow="The purpose behind our work" title="Mission & Vision" />
          <Stack spacing={2.25} sx={{ mt: 4 }}>
            {statements.map((statement) => (
              <Box
                key={statement.title}
                sx={{
                  bgcolor: "#FFFFFF",
                  border: "1px solid rgba(0, 9, 102, 0.12)",
                  borderRadius: 1,
                  p: { xs: 2.25, sm: 3 },
                  boxShadow: "0 18px 54px rgba(0, 9, 102, 0.08)",
                }}
              >
                <Typography
                  component="h3"
                  variant="h3"
                  sx={{
                    color: "primary.main",
                    fontSize: "clamp(1.25rem, 2vw, 1.55rem)",
                    mb: 1.25,
                  }}
                >
                  {statement.title}
                </Typography>
                <Typography
                  sx={{
                    color: "text.secondary",
                    fontSize: "1rem",
                    lineHeight: 1.75,
                  }}
                >
                  {statement.text}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
