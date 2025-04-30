import React from "react";
import SideBar from "../../admin/components/sideBar/sideBar";
import { Box } from "@mui/material";
import Header from "../../admin/components/header/Header";

export default function AdminDashboard() {
    return (
        <Box sx={{ width: '100%', height: "100vh" }}>
            <Header />

            <Box sx={{ mt: 2 }}>
                <SideBar />
            </Box>
        </Box>
    );
}
