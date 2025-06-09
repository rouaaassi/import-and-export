import React, { useState } from "react";
import SearchBar from "../search/search";
import { Box, Paper, IconButton, Badge, useTheme, useMediaQuery, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider, Typography } from "@mui/material";
import { Link } from "react-router";
import PATH from "../../../../routes/route";
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import DarkModeIcon from '@mui/icons-material/DarkMode';

interface HeaderProps {
  setDarkMode: (val: boolean) => void;
  darkMode: boolean;
}

export default function Header({ setDarkMode, darkMode }: HeaderProps) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <Paper
            elevation={1}
            sx={{
                width: '100%',
                bgcolor: theme.palette.mode === 'dark' ? 'rgb(18, 24, 57)' : 'background.paper',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    px: { xs: 12, sm: 4, md: 16 },
                    py: 1.5,
                }}
            >
                {isMobile ? (
                    // Mobile Layout
                    <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '50%',
                        gap: 2
                    }}>
                        {/* Search Bar */}
                        <Box sx={{ 
                            flex: 1,
                            maxWidth: '200px',
                            position: 'relative',
                            zIndex: 1
                        }}>
                            <SearchBar />
                        </Box>

                        {/* Menu Button */}
                        <IconButton
                            onClick={handleDrawerToggle}
                            sx={{
                                color: '#333',
                                width: 40,
                                height: 40,
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                ) : (
                    // Desktop Layout
                    <>
                        {/* Search Bar */}
                        <Box sx={{ 
                            flex: 1, 
                            maxWidth: { sm: '300px', md: '400px', lg: '600px' },
                            mr: { sm: 2, md: 3 },
                            position: 'relative',
                            zIndex: 1
                        }}>
                            <SearchBar />
                        </Box>

                        {/* Actions Section */}
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: { sm: 2, md: 3 },
                            }}
                        >
                            {/* Reminder Button */}
                            <IconButton
                                sx={{
                                    color: theme.palette.mode === 'dark' ? '#fff' : '#333',
                                    width: { sm: 40, md: 48 },
                                    height: { sm: 40, md: 48 },
                                    '&:hover': {
                                        bgcolor: 'rgba(1, 24, 216, 0.04)',
                                    },
                                    '& .MuiBadge-badge': {
                                        fontSize: { sm: '0.75rem', md: '0.875rem' },
                                        height: { sm: 20, md: 24 },
                                        minWidth: { sm: 20, md: 24 },
                                    },
                                }}
                            >
                                <Badge 
                                    badgeContent={3} 
                                    color="error"
                                    sx={{
                                        '& .MuiBadge-badge': {
                                            right: { sm: -4, md: -5 },
                                            top: { sm: -4, md: -5 },
                                        }
                                    }}
                                >
                                    <NotificationsIcon sx={{ 
                                        fontSize: { sm: '1.5rem', md: '1.75rem' },
                                        color: theme.palette.mode === 'dark' ? '#fff' : 'inherit'
                                    }} />
                                </Badge>
                            </IconButton>
                            {/* Dark Mode Toggle */}
                            <IconButton
                              onClick={() => setDarkMode(!darkMode)}
                              sx={{
                                color: darkMode ? '#FFD600' : '#333',
                                width: { sm: 40, md: 48 },
                                height: { sm: 40, md: 48 },
                                bgcolor: darkMode ? 'rgba(255,255,255,0.08)' : '#f5f7fa',
                                border: '2px solid',
                                borderColor: darkMode ? 'rgba(255,255,255,0.15)' : '#e3e8ff',
                                borderRadius: '50%',
                                boxShadow: darkMode ? '0 2px 8px rgba(0,0,0,0.12)' : '0 2px 8px rgba(1,24,216,0.08)',
                                transition: 'all 0.2s',
                                '&:hover': {
                                  bgcolor: darkMode ? 'rgba(255,255,255,0.18)' : '#e3e8ff',
                                },
                              }}
                              title=" change to dark mode "
                            >
                              <DarkModeIcon />
                            </IconButton>
                        </Box>
                    </>
                )}

                {/* Mobile Drawer */}
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                    PaperProps={{
                        sx: {
                            width: '100%',
                            bgcolor: 'background.paper',
                        }
                    }}
                >
                    <Box sx={{ p: 2 }}>
                        <Box sx={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center',
                            mb: 2
                        }}>
                            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                Menu
                            </Typography>
                            <IconButton onClick={handleDrawerToggle}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <Divider sx={{ mb: 2 }} />
                        <List>
                            {/* Home Button */}
                            <ListItem 
                                component={Link} 
                                to={PATH.home}
                                onClick={handleDrawerToggle}
                                sx={{ 
                                    py: 2,
                                    '&:hover': {
                                        bgcolor: '#F5F7FF',
                                    }
                                }}
                            >
                                <ListItemIcon>
                                    <HomeIcon sx={{ color: '#0118D8' }} />
                                </ListItemIcon>
                                <ListItemText 
                                    primary="Back to Home" 
                                    primaryTypographyProps={{
                                        sx: { color: '#0118D8', fontWeight: 500 }
                                    }}
                                />
                            </ListItem>

                            {/* Notifications */}
                            <ListItem 
                                onClick={handleDrawerToggle}
                                sx={{ 
                                    py: 2,
                                    cursor: 'pointer',
                                    '&:hover': {
                                        bgcolor: '#F5F7FF',
                                    }
                                }}
                            >
                                <ListItemIcon>
                                    <Badge badgeContent={3} color= "error">
                                        <NotificationsIcon />
                                    </Badge>
                                </ListItemIcon>
                                <ListItemText 
                                    primary="Notifications" 
                                    primaryTypographyProps={{
                                        sx: { fontWeight: 500 }
                                    }}
                                />
                            </ListItem>

                            {/* Profile */}
                            <ListItem 
                                onClick={handleDrawerToggle}
                                sx={{ 
                                    py: 2,
                                    cursor: 'pointer',
                                    '&:hover': {
                                        bgcolor: '#F5F7FF',
                                    }
                                }}
                            >
                                <ListItemIcon>
                                    <PersonIcon />
                                </ListItemIcon>
                                <ListItemText 
                                    primary="Profile" 
                                    primaryTypographyProps={{
                                        sx: { fontWeight: 500 }
                                    }}
                                />
                            </ListItem>
                        </List>
                    </Box>
                </Drawer>
            </Box>
        </Paper>
    );
}
