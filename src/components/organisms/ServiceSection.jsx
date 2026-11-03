import Box from "@mui/material/Box";
import SectionHeading from "../atoms/SectionHeading.jsx";
import ServiceCard from "../molecules/ServiceCard.jsx";
import { techStack } from "../../data/siteContent.js";

export default function ServiceSection() {
  return (
    <Box 
      component="section"
      id="tech-stack" 
      sx= {{ 
        bgcolor: "text.primary",
        color: "white",
        px: "clamp(18px, 5vw, 78px)", 
        py: "clamp(64px, 9vw, 110px)" 
      }} 
    >
      <SectionHeading title="TECH STACK" />

      <Box
        aria-label="Tech Stack"
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
        {techStack.map((tech) => (
          <ServiceCard key={tech.title} {...tech} />
        ))}
      </Box>
    </Box>
  );
}
