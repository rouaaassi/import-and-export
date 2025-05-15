import React from "react";
import {
    Box,
    Typography,
    Container,
    useTheme,
    useMediaQuery
} from "@mui/material";
import Greeting from "../../../staff/components/header/Greeting";
import CardsContent from "../../../staff/components/cards/cards-content";
import UserList from "../../../staff/components/users-list";
import CentersList from "../../../staff/components/centers/centers-list";
import TaskSection from "../../../staff/components/task-section/task";
import LayoutDashboard from "../../../staff/components/sideBar/layouts/dashboardLayout/layout";

export default function StaffDashboard() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <LayoutDashboard>
            <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <Container
                    maxWidth="xl"
                    sx={{ py: 0, position: "relative", left: "85px",pt:5 }}
                >
                    <Box>
                        <Greeting />
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: isMobile ? "column" : "row",
                            width: "100%",
                            gap: {xs:5 , md: 5, lg:20}
                        }}
                    >
                        <Box sx={{display:"flex" , gap:4,flexDirection:'column'}}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: "1.5rem", md: "2rem" },
                                    color: "text.primary",
                                    pl: 3
                                }}
                            >
                                Dashboard Overview
                            </Typography>

                            <CardsContent />

                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: "1.5rem", md: "2rem" },
                                    color: "text.primary",
                                    pl: 3
                                }}
                            >
                                See all users
                            </Typography>
                            <Box
                                sx={{
                                    overflowX: "auto",
                                    width: "100%",
                                    pl: 3,
                                    "&::-webkit-scrollbar": {
                                        height: "8px"
                                    },
                                    "&::-webkit-scrollbar-track": {
                                        background: "#f1f1f1",
                                        borderRadius: "4px"
                                    },
                                    "&::-webkit-scrollbar-thumb": {
                                        background: "#888",
                                        borderRadius: "4px"
                                    }
                                }}
                            >
                                <UserList />
                            </Box>

                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: 700,
                                    fontSize: { xs: "1.5rem", md: "2rem" },
                                    color: "text.primary",
                                    pl: 3
                                }}
                            >
                                Services Centers
                            </Typography>
                            <Box
                                sx={{
                                    overflowX: "auto",
                                    width: "100%",
                                    pl: 3,
                                    "&::-webkit-scrollbar": {
                                        height: "8px"
                                    },
                                    "&::-webkit-scrollbar-track": {
                                        background: "#f1f1f1",
                                        borderRadius: "4px"
                                    },
                                    "&::-webkit-scrollbar-thumb": {
                                        background: "#888",
                                        borderRadius: "4px"
                                    }
                                }}
                            >
                                <CentersList />
                            </Box>
                        </Box>
                        <Box sx={{ width: isMobile ? "100%" : "350px" }}>
                            <TaskSection />
                        </Box>
                    </Box>
                </Container>
            </Box>
        </LayoutDashboard>
    );
}
