import { Typography, Box, Divider } from "@mui/material";
import React, { FC } from "react";
import FooterButtom from "./footer-bottom";

const services = [
  {
    title: "Shipment Tracking",
    description:
      "Track your shipment status in real-time from origin to arrival, with instant notifications of updates.",
  },
  {
    title: "Order Management",
    description:
      "Comprehensive order management enables you to easily organize shipments, modify details, and track execution.",
  },
  {
    title: "Technical Support",
    description:
      "A technical support team is available to serve you around the clock to solve any problem you encounter quickly and efficiently.",
  },
  {
    title: "Offers & Discounts",
    description:
      "Take advantage of our regular offers and special discounts that we constantly provide to our customers.",
  },
  {
    title: "Employee Registration",
    description:
      "A flexible employee registration system ensures smooth and efficient performance tracking and task allocation.",
  },
];

const Footer: FC = () => {
  return (
    <Box
      component="footer"
      id ='footer'
      sx={{
        bgcolor: "#0118D8",
        width: "100%",
        py: 8,
        px: 4,
        color: "#fff",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "flex-start" },
          gap: 4,
          mb: 6,
        }}
      >
        <Box sx={{ minWidth: "250px" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold", fontSize: "2.5rem" }}>
            Services
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 700 , fontSize:'20px',color:"#ece9e9" }}>
            we provide you
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 4,
            flex: 1,
          }}
        >
          {services.slice(0, 2).map((service, idx) => (
            <Box
              key={idx}
              sx={{
                border: "1px solid #fff",
                borderRadius: "16px",
                p: 3,
                flex: "1 1 300px",
                bgcolor: "#0118D8",
                boxShadow: 3,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                <span style={{ marginRight: 8 }}>»</span>
                {service.title}
              </Typography>
              <Typography sx={{ fontSize: 14 }}>{service.description}</Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        {services.slice(2).map((service, idx) => (
          <Box
            key={idx}
            sx={{
              border: "1px solid #fff",
              borderRadius: "16px",
              p: 3,
              flex: "1 1 300px",
              bgcolor: "#0118D8",
              boxShadow: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
              <span style={{ marginRight: 8 }}>»</span>
              {service.title}
            </Typography>
            <Typography sx={{ fontSize: 14 }}>{service.description}</Typography>
          </Box>
        ))}
      </Box>
      <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.5)' }} />
       <FooterButtom/> 
      
    </Box>
  );
};

export default Footer;
