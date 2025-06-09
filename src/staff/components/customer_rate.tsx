import { Box, Typography, LinearProgress } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import React from "react";

const ratingData = [
  { stars: 5, percent: 60 },
  { stars: 4, percent: 25 },
  { stars: 3, percent: 10 },
  { stars: 2, percent: 3 },
  { stars: 1, percent: 2 },
];

const average = 4.2;

const CustomerRating = () => (
  <Box sx={{ width: {xs:'100%', md :'70%'}, bgcolor: 'background.paper', p: 3, borderRadius: 2 }}>
    <Typography variant="h6" fontWeight={700}>Customer Rating</Typography>
    <Typography variant="body2" color="text.secondary" mb={2}>
      Average service ratings this month
    </Typography>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
      {[1,2,3,4,5].map(i =>
        i <= Math.floor(average)
          ? <StarIcon key={i} sx={{ color: "#FFD600" }} />
          : i - average < 1
            ? <StarIcon key={i} sx={{ color: "#FFD600", opacity: 0.5 }} />
            : <StarBorderIcon key={i} sx={{ color: "#FFD600" }} />
      )}
      <Typography variant="h5" fontWeight={700} ml={1}>{average}</Typography>
      <Typography color="text.secondary" ml={0.5}>out of 5</Typography>
    </Box>
    {ratingData.map((row) => (
      <Box key={row.stars} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
        <Typography sx={{ width: 24 }}>{row.stars}★</Typography>
        <Box sx={{ flex: 1, mx: 1 }}>
          <LinearProgress
            variant="determinate"
            value={row.percent}
            sx={{
              height: 8,
              borderRadius: 5,
              background: "#e3e8ff",
              "& .MuiLinearProgress-bar": {
                background: "#0014b3"
              }
            }}
          />
        </Box>
        <Typography sx={{ width: 32, textAlign: 'right' }}>{row.percent}%</Typography>
      </Box>
    ))}
  </Box>
);

export default CustomerRating; 