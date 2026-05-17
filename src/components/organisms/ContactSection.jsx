import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import SectionHeading from "../atoms/SectionHeading.jsx";
import ContactForm from "../molecules/ContactForm.jsx";
import ContactMethod from "../molecules/ContactMethod.jsx";
import { contactMethods } from "../../data/siteContent.js";

export default function ContactSection() {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        bgcolor: "rgba(0, 198, 211, 0.08)",
        px: "clamp(18px, 5vw, 78px)",
        py: "clamp(64px, 9vw, 110px)",
      }}
    >
      <SectionHeading eyebrow="Send for inquiries" title="Contact Us" />

      <Box
        sx={{
          display: "grid",
          gap: "clamp(24px, 5vw, 62px)",
          gridTemplateColumns: { xs: "1fr", md: "minmax(0, 0.9fr) minmax(320px, 1.1fr)" },
        }}
      >
        <Stack
          spacing={1.75}
          sx={{
            alignContent: "start",
            bgcolor: "background.paper",
            border: "1px solid rgba(0, 9, 102, 0.13)",
            borderRadius: 1,
            boxShadow: "0 16px 46px rgba(0, 9, 102, 0.08)",
            p: { xs: 2.5, sm: 3.25 },
          }}
        >
          {contactMethods.map((method) => (
            <ContactMethod key={method.label} {...method} />
          ))}
        </Stack>

        <ContactForm />
      </Box>
    </Box>
  );
}
