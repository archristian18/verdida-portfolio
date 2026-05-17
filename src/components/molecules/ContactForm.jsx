import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Send } from "lucide-react";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [toast, setToast] = useState({ open: false, severity: "success", message: "" });

  const showToast = (severity, message) => {
    setToast({ open: true, severity, message });
  };

  const closeToast = (_, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setToast((currentToast) => ({ ...currentToast, open: false }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setStatus("submitting");

    const formData = new FormData(event.currentTarget);
    formData.set("access_key", accessKey || "");
    formData.set("subject", "Contact inquiry from AVerdida Surveying & Realty Services website");

    try {
      if (!accessKey) {
        throw new Error("Contact form is not configured yet.");
      }

      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        body: formData,
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Unable to send your message right now.");
      }

      event.currentTarget.reset();
      setStatus("success");
      showToast("success", "Message sent to email. We will get back to you soon.");
    } catch (error) {
      setStatus("error");
      showToast("error", error.message || "Unable to send your message right now.");
    }
  };

  return (
    <>
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
        <input type="hidden" name="access_key" value={accessKey || ""} />
        <input type="hidden" name="subject" value="Contact inquiry from AVerdida Surveying & Realty Services website" />
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
      <Snackbar
        open={toast.open}
        autoHideDuration={5000}
        onClose={closeToast}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={closeToast} severity={toast.severity} variant="filled" sx={{ width: "100%" }}>
          {toast.message}
        </Alert>
      </Snackbar>
    </>
  );
}
