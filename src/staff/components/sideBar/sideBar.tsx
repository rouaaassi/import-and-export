import { Avatar, Box, Button, IconButton, Tooltip, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import SortRoundedIcon from '@mui/icons-material/SortRounded';
import WidgetsIcon from '@mui/icons-material/Widgets';
import Groups2Icon from '@mui/icons-material/Groups2';
import StarsRoundedIcon from '@mui/icons-material/StarsRounded';
import AddLocationAltRoundedIcon from '@mui/icons-material/AddLocationAltRounded';
import LogoutIcon from '@mui/icons-material/Logout';
import Profile from "../../../components/profileModel";
import { useNavigate } from "react-router-dom";
import PATH from "../../../../routes/route";
import Logo from "../../../components/navbar/logo";
import HomeIcon from '@mui/icons-material/Home';

interface SideBarProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export default function SideBar({ open, setOpen }: SideBarProps) {
    const theme = useTheme();
    const [activePage, setActivePage] = useState("Dashboard");
    const navigate = useNavigate();
    const [profileOpen, setProfileOpen] = useState(false);

    const pages = [
        { label: "Dashboard", icon: <WidgetsIcon sx={{color:'#0118D8'}} />, href: PATH.dasboardstaff },
        { label: "Parcels", icon: <img src='/parcels.png' style={{ width: 24, height: 24 }} />, href: PATH.parcels },
        { label: "Users", icon: <Groups2Icon />, href: PATH.parcels },
        { label: "Ratings Management", icon: <StarsRoundedIcon />, href: PATH.dasboardstaff },
        { label: "Services Centers", icon: <AddLocationAltRoundedIcon />, href: PATH.dasboardstaff },
        { label: "Back Home", icon: <HomeIcon />, href: PATH.home },
    ];

    return (
        <Box
            sx={{
                width: open ? '305px' : '80px',
                height: '100vh',
                bgcolor: theme.palette.mode === 'dark' ? 'rgb(18, 24, 57)' : '#0118D8',
                position: 'fixed',
                top: 0,
                left: 0,
                p: 2,
                boxShadow: 3,
                zIndex: 1300,
                transition: 'width 0.3s',
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
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    borderBottom: '1px solid #fff',
                    pb: 1,
                    mb: 2
                }}>
                    <Logo color='#fff' />
                    <Typography sx={{ color: '#fff', pt: 5 }}> Employee Dashboard</Typography>
                </Box>
            )}

            <Box display="flex" flexDirection="column" gap={1} mt={open ? 4 : 10} sx={{ borderBottom: "1px solid #fff" }}>
                {open && (
                    <Typography sx={{ color: '#fff', fontSize: '12px', textTransform: 'uppercase' }}>Main Menu</Typography>
                )}
                {pages.map((page, index) => (
                    <Tooltip title={!open ? page.label : ""} placement="right" key={index}>
                        <Button
                            onClick={() => {
                                setActivePage(page.label);
                                navigate(page.href);
                            }}
                            sx={{
                                color: '#fff',
                                justifyContent: open ? 'flex-start' : 'center',
                                backgroundColor: activePage === page.label ? '#ffffff33' : 'transparent',
                                borderRadius: '12px',
                                textTransform: 'none',
                                fontWeight: activePage === page.label ? 'bold' : 'normal',
                                minWidth: 0,
                                px: open ? 2 : 1,
                                transition: 'background 0.2s',
                                backdropFilter: activePage === page.label ? 'blur(6px)' : 'none',
                                '&:hover': {
                                    backgroundColor: '#ffffff22',
                                    backdropFilter: 'blur(4px)',
                                },
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
                    left: 14,
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
                            px: open ? 1 : 1
                        }}
                        onClick={() => setProfileOpen(true)}
                    >
                        {open ? (<><Avatar sx={{mr:2 , width:'22px', height:'22px'}}/> Profile </>): <Avatar/>}
                    </Button>
                </Tooltip>
                <Profile open={profileOpen} onClose={() => setProfileOpen(false)} />
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
