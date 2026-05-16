import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ArrowRight, Target } from "lucide-react";
import Eyebrow from "../atoms/Eyebrow.jsx";
import HighlightItem from "../molecules/HighlightItem.jsx";
import { highlights } from "../../data/siteContent.js";

export default function HeroSection() {
  return (
    <Box
      component="section"
      id="home"
      sx={{
        alignItems: "center",
        background:
          'linear-gradient(rgba(24, 32, 38, 0.62), rgba(24, 32, 38, 0.45)), url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=80") center / cover',
        color: "#fff",
        display: "grid",
        gap: "clamp(32px, 5vw, 76px)",
        gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1.05fr) minmax(320px, 0.95fr)" },
        minHeight: { xs: "auto", lg: "calc(100vh - 79px)" },
        px: "clamp(18px, 5vw, 78px)",
        py: { xs: 6.75, md: "clamp(58px, 8vw, 104px)" },
      }}
    >
      <Box sx={{ maxWidth: 720 }}>
        <Eyebrow>Advertising | Surveying | Realty</Eyebrow>
        <Typography
          component="h1"
          variant="h1"
          sx={{
            fontSize: "clamp(3rem, 7vw, 6.7rem)",
            maxWidth: 850,
            mb: 2.75,
          }}
        >
          AVerdida Surveying & Realty Services
        </Typography>
        <Typography
          sx={{
            color: "rgba(255, 255, 255, 0.9)",
            fontSize: "clamp(1.05rem, 2vw, 1.35rem)",
            lineHeight: 1.6,
            maxWidth: 650,
            mb: 4,
          }}
        >
          Practical property advertising and real estate support for owners, buyers, developers,
          and businesses that need their listings presented clearly and handled professionally.
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
          <Button
            component="a"
            href="#contact"
            variant="contained"
            color="secondary"
            endIcon={<ArrowRight size={18} aria-hidden="true" />}
            sx={{ px: 2.5, width: { xs: "100%", sm: "auto" } }}
          >
            Contact Us
          </Button>
          <Button
            component="a"
            href="#about"
            variant="outlined"
            sx={{
              borderColor: "rgba(255, 255, 255, 0.5)",
              color: "#fff",
              px: 2.5,
              width: { xs: "100%", sm: "auto" },
              "&:hover": { borderColor: "#fff", bgcolor: "rgba(255, 255, 255, 0.08)" },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>

      <Box aria-label="Featured advertising services" sx={{ alignSelf: "end", display: "grid", gap: 2 }}>
        <Box
          sx={{
            alignItems: "center",
            bgcolor: "rgba(15, 107, 95, 0.9)",
            border: "1px solid rgba(255, 255, 255, 0.18)",
            borderRadius: 1,
            boxShadow: "0 24px 70px rgba(0, 0, 0, 0.22)",
            display: "flex",
            gap: 2.5,
            justifyContent: "space-between",
            p: 3,
          }}
        >
          <Box>
            <Typography sx={{ color: "rgba(255, 255, 255, 0.75)", fontWeight: 750, mb: 0.5 }}>
              Featured Service
            </Typography>
            <Typography component="h2" variant="h2" sx={{ fontSize: "clamp(1.5rem, 3vw, 2.3rem)", mb: 0 }}>
              Property Campaign Planning
            </Typography>
          </Box>
          <Target size={34} aria-hidden="true" />
        </Box>
        <Box
          sx={{
            display: "grid",
            gap: 1.5,
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
          }}
        >
          {highlights.map((item) => (
            <HighlightItem key={item}>{item}</HighlightItem>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
