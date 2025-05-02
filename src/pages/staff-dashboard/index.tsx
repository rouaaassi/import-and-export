import React from "react";
import SideBar from "../../staff/components/sideBar/sideBar";
import { Box, Typography } from "@mui/material";
import Header from "../../staff/components/header/Header";
import Greeting from "../../staff/components/header/Greeting";
import CardsContent from "../../staff/components/cards/cards-content";
import UserList from "../../staff/components/users-list";
import CentersList from "../../staff/components/centers/centers-list";
import TaskSection from "../../staff/components/task-section/task";

export default function StaffDashboard() {
    return (
        <Box sx={{ display: 'flex', height: "100vh", width: '100%' }}>
            <SideBar />
            <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', px: 2, pt: 1 }}>
                <Header />
                <Box sx={{ mt: 3, ml: 0.5 }}>
                    <Greeting />
                </Box>
                <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', px: 2, pt: 1, ml: 1 }}>
                    <Typography sx={{ fontWeight: 700, fontSize: "24px", py: 4, lineHeight: '100%' }}>
                        Overview Cards</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', gap: 2 }}>
                        <Box sx={{ flex: 1 }}>
                            <CardsContent />
                        </Box>
                        <TaskSection />
                    </Box>
                    <Typography sx={{ fontWeight: 700, fontSize: "22px", py: 4, lineHeight: '100%' }}>
                        See all users
                    </Typography>
                    <UserList />
                    <Typography sx={{ fontWeight: 700, fontSize: "22px", py: 2, lineHeight: '100%' }}>
                        Services Centers
                    </Typography>
                    <CentersList />
                </Box>
            </Box>

        </Box>
    );
}