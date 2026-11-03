import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import CustomButton from "../atoms/CustomButton.jsx";
import {
  contactFormContent,
  techStack,
} from "../../data/siteContent.js";

const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const municipalityMenuProps = {
  slotProps: {
    paper: {
      sx: {
        maxHeight: "128px !important",
        overflowY: "auto",
      },
    },
    list: {
      dense: true,
      sx: {
        maxHeight: "128px !important",
        overflowY: "auto",
        py: 0,
      },
    },
  },
};

const compactMenuItemSx = {
  fontSize: "0.8125rem",
  minHeight: 32,
  py: 0.25,
};

const submissionDateFormatter = new Intl.DateTimeFormat("en-PH", {
  dateStyle: "long",
  timeZone: "Asia/Manila",
});

const submissionTimeFormatter = new Intl.DateTimeFormat("en-PH", {
  hour: "numeric",
  minute: "2-digit",
  second: "2-digit",
  timeZone: "Asia/Manila",
  timeZoneName: "short",
});

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [selectedService, setSelectedService] = useState("");
  const [selectedMunicipality, setSelectedMunicipality] = useState("");
  const [toast, setToast] = useState({
    open: false,
    severity: "success",
    message: "",
  });
  const [contactNumberError, setContactNumberError] = useState("");

  const showToast = (severity, message) => {
    setToast({ open: true, severity, message });
  };

  const closeToast = (_, reason) => {
    if (reason === "clickaway") return;

    setToast((currentToast) => ({
      ...currentToast,
      open: false,
    }));
  };

  const handleContactNumberInput = (event) => {
    const input = event.currentTarget;
    const numbersOnly = input.value.replace(/\D/g, "");

    if (input.value !== numbersOnly) {
      setContactNumberError("Contact number must contain numbers only.");
    } else {
      setContactNumberError("");
    }

    input.value = numbersOnly;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const contactNumber = formData.get("Contact Number") || "";
    const selectedService = formData.get("Service") || contactFormContent.fallbackService;
    const selectedMunicipality =
      formData.get("Municipality / City in Cebu") || contactFormContent.fallbackMunicipality;

    if (!/^09\d{9}$/.test(contactNumber)) {
      setContactNumberError("Enter a valid 11-digit mobile number starting with 09.");
      return;
    }

    setStatus("submitting");

    const submittedAt = new Date();

    formData.set("access_key", accessKey || "");
    formData.set("subject", `AVS Inquiry: ${selectedService} - ${selectedMunicipality}`);
    formData.set("from_name", contactFormContent.fromName);
    formData.set("Date Submitted", submissionDateFormatter.format(submittedAt));
    formData.set("Time Submitted", submissionTimeFormatter.format(submittedAt));

    try {
      if (!accessKey) {
        throw new Error(contactFormContent.configurationError);
      }

      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        body: formData,
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || contactFormContent.submitError);
      }

      form.reset();
      setSelectedService("");
      setSelectedMunicipality("");
      setContactNumberError("");
      setStatus("success");
    } catch (error) {
      setStatus("error");
      showToast("error", error.message || contactFormContent.submitError);
    }
  };

  return (
    <>
      <Stack
        component="form"
        onSubmit={handleSubmit}
        spacing={2}
        sx={{
          bgcolor: "background.gray",
          border: "1px solid rgba(0, 9, 102, 0.13)",
          borderRadius: 1,
          boxShadow: "0 16px 46px rgba(0, 9, 102, 0.08)",
          p: { xs: 2.5, sm: 3.25 },
        }}
      >
        {status === "success" && (
          <Alert
            severity="success"
            variant="filled"
            onClose={() => setStatus("idle")}
          >
            {contactFormContent.successMessage}
          </Alert>
        )}

        <input type="hidden" name="access_key" value={accessKey || ""} />
        <input
          type="hidden"
          name="subject"
          value={contactFormContent.hiddenSubject}
        />
        <Box
          sx={{
            display: "grid",
            gap: 1,
          }}
        >
          <TextField
            label="Full Name"
            name="Full Name"
            placeholder="Your name"
            fullWidth
            required
          />
        </Box>
        <TextField
          label="Contact Number"
          name="Contact Number"
          type="text"
          placeholder="09XXXXXXXXX"
          fullWidth
          required
          error={Boolean(contactNumberError)}
          helperText={contactNumberError || "Numbers only. Example: 09123456789"}
          slotProps={{
            htmlInput: {
              inputMode: "numeric",
              maxLength: 11,
              pattern: "09[0-9]{9}",
              onInput: handleContactNumberInput,
            },
          }}
        />
        <TextField
          label="Message"
          name="Message"
          placeholder="How can we help?"
          rows={5}
          multiline
          fullWidth
        />
        <CustomButton disabled={status === "submitting"}>
          {status === "submitting" ? "Sending..." : "Send Message"}
        </CustomButton>
      </Stack>

      <Snackbar
        open={toast.open}
        autoHideDuration={5000}
        onClose={closeToast}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert
          onClose={closeToast}
          severity={toast.severity}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </>
  );
}