import { Box, Typography, Button } from "@mui/material";
import { FC } from "react";
import serviceText from "../../constants/serviceContent";

const TextSection: FC = () => {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: "50%" },
        display: "flex",
        flexDirection: "column",
        alignItems: { xs: "center", md: "flex-start" },
        textAlign: { xs: "center", md: "left" },
        gap: 3,
        position: "relative",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
        <img src="/Location.png" alt="location icon" style={{ width: 44, height: 44 }} />
        <Typography
          sx={{
            color: "#0118D8",
            fontWeight: 700,
            fontSize: { xs: 28, md: 40 },
            lineHeight: "100%",
            textShadow: "0 4px 16px #bfcfff",
          }}
        >
          {serviceText.title}
        </Typography>
      </Box>
      <Typography sx={{ fontSize: { xs: 16, md: 18 }, color: "#222", mb: 1 }}>
        {serviceText.description1}
      </Typography>
      <Typography sx={{ fontSize: { xs: 15, md: 17 }, color: "#444", mb: 2 }}>
        {serviceText.description2}
      </Typography>
      <Box sx={{ position: "relative", width: "100%", minHeight: 140, mt: 2 }}>
        <Button
          sx={{
            position: "absolute",
            left: { xs: 0, md: -70 },
            top: { xs: 0, md: 30 },
            width: { xs: 180, sm: 220, md: 260 },
            height: { xs: 48, md: 60 },
            textTransform: "none",
            color: "#fff",
            bgcolor: "#0118D8",
            borderRadius: "50px",
            fontSize: { xs: 18, md: 28 },
            fontWeight: "bold",
            boxShadow: "0 4px 15px rgba(1, 24, 216, 0.15)",
            transition: "all 0.3s ease",
            zIndex: 2,
            "&:hover": {
              bgcolor: "#0035cc",
              transform: "scale(1.05)",
              boxShadow: "0 6px 20px rgba(1, 24, 216, 0.22)",
            },
          }}
        >
          {serviceText.buttonLabel}
        </Button>
      </Box>
    </Box>
  );
};

export default TextSection;
