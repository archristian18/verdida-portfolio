import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ArrowLeft } from "lucide-react";
import Header from "../organisms/Header.jsx";
import Footer from "../organisms/Footer.jsx";
import image1 from "../../images/image_1.jpg";
import image2 from "../../images/image_2.jpg";
import image3 from "../../images/image_3.jpg";
import image4 from "../../images/image_4.jpg";

const surveyImages = [
  {
    title: "Thank you Sir Tony",
    text: `We truly appreciate those people who prepare themselves for the future. Having their land subdivided among their children, 
    buying raw lots for investments and securing the correct boundaries before any construction and development inside their property.`,
    link: "https://www.facebook.com/averdidasurveying/posts/pfbid0LQxifKjVK21bQ2iNVxAQ9BjhW3sWfXuBRDu6yctt38jpGmPqy6r65Kecc9yT8n1rl",
    image: image1,
  },
  {
    title: " Geodetic Engineering Society - USPF Chapter",
    text: "We the AVERDIDA SURVEYING & Realty Services supports our Alma Mater Uspf Cea - Geodetic Engineering Society - USPF Chapter ✅️💯💪",
    link: "https://www.facebook.com/averdidasurveying/posts/pfbid0ubMSVmZHxHbXd4S3WnUoLKcgc5jm2ocphMYqCd5mHKX6SFeo5r5rx1sBA3vCZrt5l",
    image: image2,
  },
  {
    title: "Thank you to our dear clients 🙏",
    text: "Highlight of our March",
    link: "https://www.facebook.com/averdidasurveying/posts/pfbid0oFCrC74pjupt4yAS8zVXBQN7NGgkvThMhWgqggwfYphk5wqWb1oXmjn4L46gHGp7l",
    image: image3,
  },
  {
    title: "Thank you Maam Sheney Provida",
    text: "You may reach us anytime to discuss about your plans and other concerns. 🏆",
    link: "https://www.facebook.com/averdidasurveying/posts/pfbid02zhXhCBVvG43mcMhPQrsDA8S7amegmrhEVWPL4PXHzcvDDXk14YfK5czh7fe5yS72l",
    image: image4,
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
              "&:hover": {
                borderColor: "#FFFFFF",
                bgcolor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            Back Home
          </Button>

          <Typography
            component="h1"
            variant="h1"
            sx={{
              fontSize: "clamp(2.4rem, 7vw, 4.5rem)",
              maxWidth: 900,
            }}
          >
            Surveying Highlights
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
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(4, minmax(0, 1fr))",
              },
            }}
          >
            {surveyImages.map((image) => (
              <Box
                key={image.title}
                sx={{
                  border: "1px solid rgba(0, 9, 102, 0.14)",
                  borderRadius: 1,
                  boxShadow: "0 16px 46px rgba(0, 9, 102, 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  overflow: "hidden",
                  bgcolor: "#FFFFFF",
                }}
              >
                <Box
                  component="a"
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ display: "block", lineHeight: 0 }}
                >
                  <Box
                    component="img"
                    src={image.image}
                    alt={image.title}
                    sx={{
                      aspectRatio: "16 / 10",
                      display: "block",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "column",
                    p: 2.5,
                  }}
                >
                  <Typography
                    component="h2"
                    variant="h5"
                    sx={{ fontWeight: 850, mb: 1 }}
                  >
                    {image.title}
                  </Typography>

                  <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {image.text}
                  </Typography>

                  {image.link && (
                    <Button
                      component="a"
                      href={image.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ alignSelf: "flex-start", mt: "auto", p: 0, pt: 2 }}
                    >
                      View Post
                    </Button>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </main>
      <Footer />
    </>
  );
}
