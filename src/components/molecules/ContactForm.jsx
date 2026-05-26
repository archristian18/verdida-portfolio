import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import CustomButton from "../atoms/CustomButton.jsx";
import {
  cebuMunicipalities,
  contactFormContent,
  services,
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

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [toast, setToast] = useState({
    open: false,
    severity: "success",
    message: "",
  });

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const selectedService = formData.get("Service") || contactFormContent.fallbackService;
    const selectedMunicipality =
      formData.get("Municipality / City in Cebu") || contactFormContent.fallbackMunicipality;

    setStatus("submitting");

    formData.set("access_key", accessKey || "");
    formData.set("subject", `AVS Inquiry: ${selectedService} - ${selectedMunicipality}`);
    formData.set("from_name", contactFormContent.fromName);

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
      setStatus("success");
      showToast("success", contactFormContent.successMessage);
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
          bgcolor: "background.paper",
          border: "1px solid rgba(0, 9, 102, 0.13)",
          borderRadius: 1,
          boxShadow: "0 16px 46px rgba(0, 9, 102, 0.08)",
          p: { xs: 2.5, sm: 3.25 },
        }}
      >
        <input type="hidden" name="access_key" value={accessKey || ""} />
        <input
          type="hidden"
          name="subject"
          value={contactFormContent.hiddenSubject}
        />

        <TextField
          label="Full Name"
          name="Full Name"
          placeholder="Your name"
          fullWidth
          required
        />

        <TextField
          label="Email Address"
          name="email"
          type="email"
          placeholder="you@example.com"
          fullWidth
          required
        />

        <TextField
          label="Contact Number"
          name="Contact Number"
          type="text"
          placeholder="09XXXXXXXXX"
          fullWidth
          required
          slotProps={{
            htmlInput: {
              inputMode: "numeric",
              pattern: "[0-9]*",
              onInput: (event) => {
                event.currentTarget.value = event.currentTarget.value.replace(/\D/g, "");
              },
            },
          }}
        />

        <Box
          sx={{
            display: "grid",
            gap: 2,
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, minmax(0, 1fr))" },
          }}
        >
          <TextField
            label="Service"
            name="Service"
            select
            defaultValue=""
            fullWidth
            required
            slotProps={{
              select: {
                MenuProps: municipalityMenuProps,
              },
            }}
          >
            {services.map((service) => (
              <MenuItem key={service.title} value={service.title} dense sx={compactMenuItemSx}>
                {service.title}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Municipality / City in Cebu"
            name="Municipality / City in Cebu"
            select
            defaultValue=""
            fullWidth
            required
            slotProps={{
              select: {
                MenuProps: municipalityMenuProps,
              },
            }}
          >
            {cebuMunicipalities.map((municipality) => (
              <MenuItem
                key={municipality}
                value={municipality}
                dense
                sx={compactMenuItemSx}
              >
                {municipality}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            label="Lot Area"
            name="Lot Area"
            placeholder="Lot area"
            fullWidth
            required
          />
        </Box>

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
