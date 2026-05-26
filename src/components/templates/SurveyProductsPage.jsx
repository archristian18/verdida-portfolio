import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ArrowLeft } from "lucide-react";
import { surveyHighlights } from "../../data/siteContent.js";
import image1 from "../../images/highlights/image_1.jpg";
import image2 from "../../images/highlights/image_2.jpg";
import image3 from "../../images/highlights/image_3.jpg";
import image4 from "../../images/highlights/image_4.jpg";
import image5 from "../../images/highlights/image_5.jpg";
import image6 from "../../images/highlights/image_6.jpg";
import image7 from "../../images/highlights/image_7.jpg";
import image8 from "../../images/highlights/image_8.jpg";
import Footer from "../organisms/Footer.jsx";
import Header from "../organisms/Header.jsx";

const highlightImages = {
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
};

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
            aria-label="Survey highlights"
            sx={{
              display: "grid",
              gap: 2,
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, minmax(0, 1fr))",
                xl: "repeat(3, minmax(0, 1fr))",
              },
            }}
          >
            {surveyHighlights.map((highlight) => {
              const highlightImage = highlightImages[highlight.imageKey];

              return (
                <Box
                  key={highlight.link}
                  sx={{
                    bgcolor: "#FFFFFF",
                    border: "1px solid rgba(0, 9, 102, 0.14)",
                    borderRadius: 1,
                    boxShadow: "0 16px 46px rgba(0, 9, 102, 0.08)",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  {highlight.embedSrc ? (
                    <Box
                      component="iframe"
                      title={highlight.subtitle}
                      src={highlight.embedSrc}
                      scrolling="no"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      sx={{
                        border: 0,
                        display: "block",
                        height: 250,
                        overflow: "hidden",
                        width: "100%",
                      }}
                    />
                  ) : (
                    <Box
                      component="a"
                      href={highlight.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ display: "block", lineHeight: 0 }}
                    >
                      <Box
                        component="img"
                        src={highlightImage}
                        alt={highlight.subtitle}
                        sx={{
                          aspectRatio: "16 / 10",
                          display: "block",
                          objectFit: "cover",
                          width: "100%",
                        }}
                      />
                    </Box>
                  )}

                  <Box
                    sx={{
                      display: "flex",
                      flex: 1,
                      flexDirection: "column",
                      p: 2.5,
                    }}
                  >
                    {highlight.title ? (
                      <Typography
                        component="p"
                        sx={{
                          color: "secondary.main",
                          fontSize: "0.85rem",
                          fontWeight: 850,
                          mb: 0.75,
                        }}
                      >
                        {highlight.title}
                      </Typography>
                    ) : null}

                    <Typography component="h2" variant="h5" sx={{ fontWeight: 850, mb: 1 }}>
                      {highlight.subtitle}
                    </Typography>

                    <Typography color="text.secondary" sx={{ lineHeight: 1.6, whiteSpace: "pre-line" }}>
                      {highlight.text}
                    </Typography>

                    <Button
                      component="a"
                      href={highlight.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ alignSelf: "flex-start", mt: "auto", p: 0, pt: 2 }}
                    >
                      View Post
                    </Button>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </main>
      <Footer />
    </>
  );
}
