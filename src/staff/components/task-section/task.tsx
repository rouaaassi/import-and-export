import React, { FC } from "react";
import StaticDate from "./date";
import { Box, Card, Typography } from "@mui/material";
import { ArrowBack, ArrowBackIos } from "@mui/icons-material";

const TaskSection: FC = () => {
    const ButtonContent = [' Parcels awaiting a status update', 'Parcels not updated in more than X hours', 'Rejected or problematic parcels']
    return (
        <Box
            sx={{
                width: 400,
                borderRadius: "30px",
                border: "2px solid #A9D6FF",
                p: 2,
                bgcolor: "#fff",
                display: "flex",
                flexDirection: "column",
                gap: 2,
                ml: 3,
                right: 120,
                top: 100,
                position: "absolute"
            }}
        >
            <Box sx={{
                border: "2px solid #A9D6FF",
                p: 2,
                borderRadius: "30px",
            }}>
                <StaticDate />
            </Box>


            <Typography sx={{ fontWeight: 700, fontSize: "20px", mt: 1 }}>
                Urgent tasks
            </Typography>
            {ButtonContent.map((text, index) => (
                <Card sx={{ bgcolor: "#FE4238C4", color: "#fff", p: 2, display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: "30px", width: "374px", height: "82px", cursor: "pointer", fontWeight: 400, fontSize: '18px' }}>
                    {text}
                    <ArrowBackIos sx={{ color: "#000", width: "14px", height: "14px" }} />
                </Card>
            ))}
        </Box>
    );
};

export default TaskSection;
