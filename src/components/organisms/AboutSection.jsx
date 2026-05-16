import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SectionHeading from "../atoms/SectionHeading.jsx";
import ServiceCard from "../molecules/ServiceCard.jsx";
import { services, values } from "../../data/siteContent.js";

export default function AboutSection() {
  return (
    <Box component="section" id="about" sx={{ px: "clamp(18px, 5vw, 78px)", py: "clamp(64px, 9vw, 110px)" }}>
      <SectionHeading
        eyebrow="About Us"
        title="Property work backed by local service and clear communication."
      />

      <Box
        sx={{
          display: "grid",
          gap: "clamp(24px, 5vw, 62px)",
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.9fr) minmax(320px, 1.1fr)" },
        }}
      >
        <Stack spacing={2} sx={{ color: "text.secondary", fontSize: "1.08rem", lineHeight: 1.8 }}>
          <Typography sx={{ fontSize: "inherit", lineHeight: "inherit" }}>
            AVerdida Surveying & Realty Services helps clients advertise, present, and manage real
            estate opportunities with a practical focus on trust, documentation, and market
            readiness.
          </Typography>
          <Typography sx={{ fontSize: "inherit", lineHeight: "inherit" }}>
            We support property owners, buyers, sellers, and businesses with listing promotion,
            survey-related coordination, and realty assistance designed to make each transaction
            easier to understand.
          </Typography>
        </Stack>

        <Stack spacing={2}>
          {values.map(({ icon: Icon, title, text }) => (
            <ServiceCard key={title} icon={Icon} title={title} text={text} />
          ))}
        </Stack>
      </Box>

      <Box
        aria-label="Services"
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, minmax(0, 1fr))",
            lg: "repeat(4, minmax(0, 1fr))",
          },
          mt: 4.75,
        }}
      >
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </Box>
    </Box>
  );
}
