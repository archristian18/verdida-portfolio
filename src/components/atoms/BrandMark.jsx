import Box from "@mui/material/Box";
import logoUrl from "../../../logo.jpg";

export default function BrandMark() {
  return (
    <Box
      component="img"
      src={logoUrl}
      alt="AVerdida Surveying & Realty Services logo"
      sx={{
        borderRadius: 1,
        flex: "0 0 auto",
        height: { xs: 72, sm: 100 },
        objectFit: "contain",
        width: { xs: 72, sm: 100 },
      }}
    />
  );
}
