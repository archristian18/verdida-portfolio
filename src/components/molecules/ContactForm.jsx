import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Send } from "lucide-react";

export default function ContactForm() {
  return (
    <Stack
      component="form"
      spacing={2}
      sx={{
        bgcolor: "background.paper",
        border: "1px solid rgba(24, 32, 38, 0.13)",
        borderRadius: 1,
        boxShadow: "0 16px 46px rgba(24, 32, 38, 0.08)",
        p: { xs: 2.5, sm: 3.25 },
      }}
    >
      <TextField label="Full Name" name="name" placeholder="Your name" fullWidth />
      <TextField label="Email Address" name="email" type="email" placeholder="you@example.com" fullWidth />
      <TextField label="Message" name="message" placeholder="How can we help?" rows={5} multiline fullWidth />
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
