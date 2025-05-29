import { Card, CardMedia, CardContent, Box, Typography, Avatar, Stack } from "@mui/material";
import { FC } from "react";
import { serviceCards } from "./service-content";
import Icon from '@mui/material/Icon';

const ServicesSection: FC = () => {
  return (
    <Box sx={{ py: 4, background: '#fff' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 4, ml: 5 }}>
        <img src="/service2.png" style={{ width: 40, height: 40, marginRight: 1 }} alt="service icon" />
        <Typography variant="h5" sx={{ fontWeight: 700, ml: 2, color: '#0118D8', fontSize: '40px', lineHeight: '100%' }}>
          Features of our services
        </Typography>
      </Box>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={4}
        justifyContent="center"
        alignItems="stretch"
      >
        {serviceCards.map((card, idx) => (
          <Box key={idx} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Card
              sx={{
                width: 340,
                height: 510,
                borderRadius: 4,
                boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 0,
                overflow: 'visible',
                background: '#fff',
              }}
            >
              <CardMedia
                component="img"
                image={card.image}
                alt={card.title}
                sx={{
                  width: '100%',
                  height: '75%',
                  objectFit: 'cover',
                  borderTopLeftRadius: 16,
                  borderTopRightRadius: 16,
                }}
              />
              <Avatar
                sx={{
                  width: 56,
                  height: 56,
                  bgcolor: '#f5f7fa',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                  position: 'relative',
                  top: -28,
                  mb: -2,
                  border: '4px solid #fff',
                }}
              >
                <Icon sx={{ color: '#2196f3', fontSize: 32 }}>{card.icon}</Icon>
              </Avatar>
              <CardContent sx={{ pt: 0.1, textAlign: 'center', flexGrow: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default ServicesSection;