import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SectionHeading from "../atoms/SectionHeading.jsx";
import avsVideo from "../../videos/avs video.mp4";

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
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      component="section"
      id="mission-vision"
      sx={{
        bgcolor: "FFFFFF",
        px: "clamp(18px, 5vw, 78px)",
        py: "clamp(64px, 9vw, 104px)",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "grid",
          gap: "clamp(32px, 5vw, 72px)",
          gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 0.95fr) minmax(320px, 1.05fr)" },
        }}
      >
        <Box sx={{ order: { xs: 2, lg: 2 } }}>
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

        <Box
          aria-label="AVS company video"
          sx={{
            bgcolor: "#FFFFFF",
            border: "1px solid rgba(0, 9, 102, 0.12)",
            borderRadius: 1,
            order: { xs: 1, lg: 1 },
            overflow: "hidden",
            boxShadow: "0 26px 80px rgba(0, 9, 102, 0.16)",
          }}
        >
          <Box
            component="video"
            ref={videoRef}
            src={avsVideo}
            controls
            playsInline
            preload="metadata"
            sx={{
              aspectRatio: "16 / 9",
              bgcolor: "#000000",
              display: "block",
              width: "100%",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
