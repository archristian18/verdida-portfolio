import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [notice, setNotice] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("submitting");
    setNotice("");

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() || "Website visitor";
    const email = formData.get("email")?.toString().trim() || "Not provided";
    const message = formData.get("message")?.toString().trim() || "";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message right now.");
      }

      event.currentTarget.reset();
      setStatus("success");
      setNotice("Message sent. We will get back to you soon.");
    } catch (error) {
      setStatus("error");
      setNotice(error.message || "Unable to send your message right now.");
    }
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
      {notice ? <Alert severity={status === "success" ? "success" : "error"}>{notice}</Alert> : null}
      <TextField label="Full Name" name="name" placeholder="Your name" fullWidth required />
      <TextField label="Email Address" name="email" type="email" placeholder="you@example.com" fullWidth required />
      <TextField label="Message" name="message" placeholder="How can we help?" rows={5} multiline fullWidth required />
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        disabled={status === "submitting"}
        endIcon={<Send size={18} aria-hidden="true" />}
        sx={{ alignSelf: { xs: "stretch", sm: "flex-start" }, px: 2.5 }}
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </Stack>
  );
}
