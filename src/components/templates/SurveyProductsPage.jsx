import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ArrowLeft } from "lucide-react";
import backgroundImage from "../../../background.jpg";
import logoImage from "../../../logo.jpg";
import Header from "../organisms/Header.jsx";
import Footer from "../organisms/Footer.jsx";
import { services } from "../../data/siteContent.js";

const surveyImages = [
  {
    title: "Office Service Banner",
    text: "Sample display for AVerdida Surveying & Realty Services.",
    src: backgroundImage,
  },
  {
    title: "Company Survey Mark",
    text: "AVerdida Surveying & Realty Services brand sample.",
    src: logoImage,
  },
];

export default function SurveyProductsPage() {
  return (
    <>
      <Header />
      <main>
        <Box
          component="section"
          sx={{
            bgcolor: "#000966",
            color: "#FFFFFF",
            px: "clamp(18px, 5vw, 78px)",
            py: "clamp(48px, 8vw, 86px)",
          }}
        >
          <Button
            component="a"
            href="/#home"
            startIcon={<ArrowLeft size={18} aria-hidden="true" />}
            variant="outlined"
            sx={{
              borderColor: "rgba(255, 255, 255, 0.55)",
              color: "#FFFFFF",
              mb: 4,
              "&:hover": { borderColor: "#FFFFFF", bgcolor: "rgba(255, 255, 255, 0.1)" },
            }}
          >
            Back Home
          </Button>
          <Typography component="h1" variant="h1" sx={{ fontSize: "clamp(2.4rem, 7vw, 4.5rem)", maxWidth: 900 }}>
            Surveying
          </Typography>
        </Box>

        <Box
          component="section"
          sx={{
            px: "clamp(18px, 5vw, 78px)",
            py: "clamp(54px, 8vw, 92px)",
          }}
        >
          <Box
            aria-label="Survey product images"
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
            }}
          >
            {surveyImages.map((image) => (
              <Box
                key={image.title}
                sx={{
                  border: "1px solid rgba(0, 9, 102, 0.14)",
                  borderRadius: 1,
                  boxShadow: "0 16px 46px rgba(0, 9, 102, 0.08)",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={image.src}
                  alt={image.title}
                  sx={{
                    aspectRatio: "16 / 10",
                    display: "block",
                    objectFit: "cover",
                    width: "100%",
                  }}
                />
                <Box sx={{ p: 2.5 }}>
                  <Typography component="h2" variant="h5" sx={{ fontWeight: 850, mb: 1 }}>
                    {image.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {image.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>

          <Typography component="h2" variant="h2" sx={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", mt: 7, mb: 3 }}>
            Survey Services
          </Typography>
          <Box
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, minmax(0, 1fr))",
                lg: "repeat(3, minmax(0, 1fr))",
              },
            }}
          >
            {services.map((service) => (
              <Box
                key={service.title}
                sx={{
                  bgcolor: "rgba(0, 166, 192, 0.08)",
                  border: "1px solid rgba(0, 9, 102, 0.12)",
                  borderRadius: 1,
                  p: 2.5,
                }}
              >
                <Typography component="h3" variant="h6" sx={{ fontWeight: 850, mb: 1 }}>
                  {service.title}
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  {service.text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </main>
      <Footer />
    </>
  );
}
