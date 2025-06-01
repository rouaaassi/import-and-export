import { Box, Container } from "@mui/material";
import React, { FC } from "react";
import TextSection from "./TextSection";
import ImageSection from "./ImageSection";

const Service: FC = () => {
  return (
    <Box
      id="service-center"
      sx={{
        width: "100%",
        bgcolor: "#F5F7FA",
        py: { xs: 6, md: 10 },
        position: "relative",
      }}
    >
      <Container maxWidth="xl" sx={{ position: "relative" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            gap: { xs: 6, md: 8 },
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <TextSection />
          <ImageSection />
        </Box>
      </Container>
    </Box>
  );
};

export default Service;
