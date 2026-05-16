import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Send } from "lucide-react";

const contactEmail = "archristian.cv@gmail.com";

export default function ContactForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() || "Website visitor";
    const email = formData.get("email")?.toString().trim() || "Not provided";
    const message = formData.get("message")?.toString().trim() || "";
    const subject = `Contact inquiry from ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ].join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Stack
      component="form"
      onSubmit={handleSubmit}
      spacing={2}
      sx={{
        bgcolor: "background.paper",
        border: "1px solid rgba(0, 9, 102, 0.13)",
        borderRadius: 1,
        boxShadow: "0 16px 46px rgba(0, 9, 102, 0.08)",
        p: { xs: 2.5, sm: 3.25 },
      }}
    >
      <TextField label="Full Name" name="name" placeholder="Your name" fullWidth required />
      <TextField label="Email Address" name="email" type="email" placeholder="you@example.com" fullWidth required />
      <TextField label="Message" name="message" placeholder="How can we help?" rows={5} multiline fullWidth required />
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        endIcon={<Send size={18} aria-hidden="true" />}
        sx={{ alignSelf: { xs: "stretch", sm: "flex-start" }, px: 2.5 }}
      >
        Send Message
      </Button>
    </Stack>
  );
}
