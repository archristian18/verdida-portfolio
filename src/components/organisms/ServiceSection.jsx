import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SectionHeading from "../atoms/SectionHeading.jsx";
import ServiceCard from "../molecules/ServiceCard.jsx";
import { services, values } from "../../data/siteContent.js";

export default function ServiceSection() {
  return (
    <Box component="section" id="services" sx={{ bgcolor: "rgba(0, 198, 211, 0.08)", px: "clamp(18px, 5vw, 78px)", py: "clamp(64px, 9vw, 110px)" }}>
      <SectionHeading
        eyebrow="Choose the service that fits your needs"
        title="SERVICES OFFERED:"
      />

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
