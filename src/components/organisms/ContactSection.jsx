import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SectionHeading from "../atoms/SectionHeading.jsx";
import ContactForm from "../molecules/ContactForm.jsx";
import ContactMethod from "../molecules/ContactMethod.jsx";
import { contactMethods } from "../../data/siteContent.js";

export default function ContactSection() {
  const leftContactMethods = contactMethods.filter((method) => method.column !== "right");
  const rightContactMethods = contactMethods.filter((method) => method.column === "right");

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        bgcolor: "#FFFFFF",
        px: "clamp(18px, 5vw, 70px)",
        py: "clamp(54px, 9vw, 20px)",
      }}
    >
      <SectionHeading title="Contact Information" />

      <Box
        sx={{
          display: "grid",
          gap: "clamp(24px, 5vw, 25px)",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: { xs: "1fr", md: "minmax(0, 1.25fr) minmax(0, 1fr)" },
          }}
        >
          <Stack
            spacing={1.75}
            sx={{
              alignContent: "start",
              bgcolor: "background.gray",
              border: "1px solid rgba(0, 9, 102, 0.13)",
              borderRadius: 1,
              boxShadow: "0 16px 46px rgba(0, 9, 102, 0.08)",
              p: { xs: 2.5, sm: 3.25 },
            }}
          >
            {leftContactMethods.map((method) => (
              <ContactMethod key={method.label} {...method} />
            ))}
          </Stack>

          <Stack
            spacing={1.75}
            sx={{
              alignContent: "start",
              bgcolor: "background.gray",
              border: "1px solid rgba(0, 9, 102, 0.13)",
              borderRadius: 1,
              boxShadow: "0 16px 46px rgba(0, 9, 102, 0.08)",
              p: { xs: 2.5, sm: 3.25 },
            }}
          >
            {rightContactMethods.map((method) => (
              <ContactMethod key={method.label} {...method} />
            ))}
          </Stack>
        </Box>

        <ContactForm />
      </Box>
    </Box>
  );
}
