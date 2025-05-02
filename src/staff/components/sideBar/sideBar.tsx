import { Box, Button, IconButton, Typography, Tooltip } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Groups2Icon from '@mui/icons-material/Groups2';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import AddLocationAltRoundedIcon from '@mui/icons-material/AddLocationAltRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import Profile from "../../../components/profileModel";

export default function SideBar() {
    const [open, setOpen] = useState(false);
    const [activePage, setActivePage] = useState("Dashboard");

    const pages = [
        { label: "Dashboard", icon: <WidgetsIcon /> },
        { label: "Parcels", icon: <img src='/parcels.png' style={{ width: 24, height: 24 }} /> },
        { label: "Users", icon: <Groups2Icon /> },
        { label: "Ratings Management", icon: <StarsRoundedIcon /> },
        { label: "Services Centers", icon: <AddLocationAltRoundedIcon /> },
    ];

    return (
        <Box
            sx={{
                width: open ? '305px' : '80px',
                height: '100vh',
                bgcolor: '#0118D8',
                borderRadius: "36px",
                position: 'relative',
                top: 0,
                left: 0,
                p: 2,
                boxShadow: 3,
                zIndex: 1300,
                transition: 'width 0.3s'
            }}
        >
            <IconButton
                onClick={() => setOpen(!open)}
                sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    color: '#fff',
                }}
            >
                {open ? <CloseIcon /> : <SortRoundedIcon />}
            </IconButton>

            {open && (
                <Typography color="#fff" sx={{ fontWeight: 700, paddingTop: "60px" }}>
                    Express Syria
                </Typography>
            )}

            <Box display="flex" flexDirection="column" gap={1} mt={open ? 4 : 10}>
                {pages.map((page, index) => (
                    <Tooltip title={!open ? page.label : ""} placement="right" key={index}>
                        <Button
                            onClick={() => setActivePage(page.label)}
                            sx={{
                                color: '#fff',
                                justifyContent: open ? 'flex-start' : 'center',
                                backgroundColor: activePage === page.label ? '#ffffff33' : 'transparent',
                                borderRadius: '12px',
                                textTransform: 'none',
                                fontWeight: activePage === page.label ? 'bold' : 'normal',
                                minWidth: 0,
                                px: open ? 2 : 1
                            }}
                            startIcon={open ? page.icon : null}
                        >
                            {open ? page.label : page.icon}
                        </Button>
                    </Tooltip>
                ))}
            </Box>

            {/* Bottom Buttons */}
            <Box
                sx={{
                    position: 'absolute',
                    bottom: 24,
                    left: 16,
                    right: 16,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1
                }}
            >
                <Tooltip title={!open ? "Profile" : ""} placement="right">
                    <Button
                        sx={{
                            color: '#fff',
                            justifyContent: open ? 'flex-start' : 'center',
                            borderRadius: '12px',
                            textTransform: 'none',
                            fontWeight: 800,
                            minWidth: 0,
                            px: open ? 2 : 1
                        }}
                    // startIcon={open ? <AccountCircleIcon /> : null}
                    >
                        {/* {open ? "Profile" : <AccountCircleIcon />} */}
                       <Profile/>
                    </Button>
                </Tooltip>

                <Tooltip title={!open ? "Logout" : ""} placement="right">
                    <Button
                        sx={{
                            color: '#fff',
                            justifyContent: open ? 'flex-start' : 'center',
                            borderRadius: '12px',
                            textTransform: 'none',
                            fontWeight: 800,
                            minWidth: 0,
                            px: open ? 2 : 1
                        }}
                        startIcon={open ? <LogoutIcon /> : null}
                    >
                        {open ? "Logout" : <LogoutIcon />}
                    </Button>
                </Tooltip>
            </Box>
        </Box>
    );
}
