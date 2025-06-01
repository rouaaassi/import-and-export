import { Box } from "@mui/material";
import { FC } from "react";

const ImageSection: FC = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "50%" },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: { xs: 4, md: 0 },
      }}
    >
      <Box
        component="img"
        src="/service.png"
        alt="Service centers map"
        sx={{
          width: { xs: "100%", sm: 400, md: 520 },
          height: "auto",
          borderRadius: 6,
          boxShadow: "0 8px 32px rgba(1,24,216,0.10)",
          objectFit: "contain",
        }}
      />
    </Box>
  );
};

export default ImageSection;
