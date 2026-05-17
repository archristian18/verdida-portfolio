// components/SubmitButton.jsx

import Button from "@mui/material/Button";
import { Send } from "lucide-react";

export default function SubmitButton({
  children = "",
  sx = {},
  ...props
}) {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      endIcon={<Send size={18} aria-hidden="true" />}
      sx={{
        alignSelf: { xs: "stretch", sm: "flex-start" },
        px: 2.5,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}