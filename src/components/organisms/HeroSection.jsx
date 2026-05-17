import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import backgroundImage from "../../../background.jpg";
import backgroundImage2 from "../../../background1.jpg";
import CustomButton from "../atoms/CustomButton.jsx";

const bannerImages = [
  {
    src: backgroundImage,
    alt: "AVerdida Surveying and Realty Services office frontage",
    title: "Office Location",
  },
  {
    src: backgroundImage2,
    alt: "Surveying equipment sample",
    title: "GPS",
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentIndex((index) => (index + 1) % bannerImages.length);
    }, 3500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <Box
      component="section"
      id="home"
      sx={{
        alignItems: "center",
        bgcolor: "rgba(0, 198, 211, 0.08)",
        color: "#FFFFFF",
        display: "grid",
        gap: "clamp(32px, 5vw, 76px)",
        gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 1.05fr) minmax(320px, 0.95fr)" },
        minHeight: { xs: "auto", lg: "calc(100vh - 79px)" },
        px: "clamp(18px, 5vw, 78px)",
        py: { xs: 6.75, md: "clamp(58px, 8vw, 104px)" },
      }}
    >
      <Box sx={{ maxWidth: 720 }}>
        <Typography
          component="h1"
          variant="h1"
          sx={{
            fontSize: "clamp(3rem, 7vw, 3.7rem)",
            maxWidth: 850,
            color: "primary.main",
            mb: 2.75,
          }}
        >
          AVerdida Surveying & Realty Services
        </Typography>
        <Typography
          sx={{
            color: "rgba(0, 0, 0, 0.92)",
            fontSize: "clamp(1.05rem, 2vw, 1.35rem)",
            lineHeight: 1.6,
            maxWidth: 750,
            mb: 4,
          }}
        >
          We provide FAST, RELIABLE & SUFFICIENT Surveying and Realty Services
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
          <CustomButton component="a" href="#contact" type={undefined}>
            Contact Us
          </CustomButton>
          <CustomButton component="a" href="/survey-products" type={undefined}>
            Learn More
          </CustomButton>
        </Box>
      </Box>

      <Box aria-label="Company images" sx={{ alignSelf: "center", display: "grid", gap: 1.5 }}>
        <Box
          sx={{
            aspectRatio: { xs: "4 / 3", sm: "16 / 10" },
            borderRadius: 1,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "100%",
              transform: `translateX(-${currentIndex * (100 / bannerImages.length)}%)`,
              transition: "transform 0.6s ease",
              width: `${bannerImages.length * 100}%`,
            }}
          >
            {bannerImages.map((image) => (
              <Box
                key={image.title}
                component="img"
                src={image.src}
                alt={image.alt}
                sx={{
                  flex: `0 0 ${100 / bannerImages.length}%`,
                  height: "100%",
                  objectFit: "cover",
                  width: `${100 / bannerImages.length}%`,
                }}
              />
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            display: "grid",
            gap: 1.5,
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, minmax(0, 1fr))" },
          }}
        >
          {bannerImages.map((image) => (
            <Box
              key={image.title}
              sx={{
                alignItems: "center",
                bgcolor: "rgba(255, 254, 254, 0.92)",
                border: "1px solid rgba(14, 2, 2, 0.18)",
                borderRadius: 1,
                display: "grid",
                gap: 1.25,
                gridTemplateColumns: "88px minmax(0, 1fr)",
                minHeight: 96,
                overflow: "hidden",
                p: 1,
                boxShadow: "0 24px 70px rgba(0, 0, 0, 0.22)",
              }}
            >
              <Box
                component="img"
                src={image.src}
                alt={image.alt}
                sx={{
                  aspectRatio: "1 / 1",
                  borderColor: "rgba(0, 0, 0, 0.2)",
                  borderRadius: 0.75,
                  display: "block",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
              <Typography sx={{ color: "#000000", fontWeight: 800, lineHeight: 1.25 }}>
                {image.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
