import Box from "@mui/material/Box";

export default function BrandMark() {
  return (
    <Box
      component="span"
      sx={{
        alignItems: "center",
        bgcolor: "primary.main",
        borderRadius: 1,
        color: "primary.contrastText",
        display: "grid",
        flex: "0 0 auto",
        fontWeight: 850,
        height: 42,
        placeItems: "center",
        width: 42,
      }}
    >
      A
    </Box>
  );
}
