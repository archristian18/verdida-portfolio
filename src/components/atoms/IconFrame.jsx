import Box from "@mui/material/Box";

export default function IconFrame({ icon: Icon, color = "primary.main", size = 28 }) {
  return (
    <Box
      component={Icon}
      aria-hidden="true"
      size={size}
      sx={{ color, flex: "0 0 auto" }}
    />
  );
}
