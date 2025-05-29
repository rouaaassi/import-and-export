import { Box, Button, Card, Typography, Container } from "@mui/material";
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import React, { FC } from "react";
import VpnLockIcon from '@mui/icons-material/VpnLock';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import TelegramIcon from '@mui/icons-material/Telegram';

const AppSectionData = [
    {
        text: 'Send packages easily',
        icon: <PhonelinkIcon sx={{ color: '#0118D8', fontSize: 32 }} />,
    },
    {
        text: 'Parcel tracking, Facilitating the shipping process',
        icon: <TelegramIcon sx={{ color: '#0118D8', fontSize: 32 }} />,
    },
    {
        text: 'Ability to interact with the service',
        icon: <ChatBubbleIcon sx={{ color: '#0118D8', fontSize: 32 }} />,
    },
    {
        text: 'Monitoring ongoing shipments',
        icon: <VpnLockIcon sx={{ color: '#0118D8', fontSize: 32 }} />,
    },
];

const CustomerApp: FC = () => {
    return (
        <Box
        id ='download-app'
            sx={{
                width: "100%",
                height: { xs: "auto", md: "90vh" },
                minHeight: { xs: "100vh", md: "90vh" },
                position: "relative",
                bgcolor: "#fff",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                py: { xs: 4, md: 8 }
            }}
        >
            <Container maxWidth="xl" sx={{ height: "100%" }}>
                <Box sx={{
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                    gap: { xs: 4, lg: 8 },
                    alignItems: "center",
                    height: "100%",
                    position: "relative"
                }}>
                    {/* Left Section */}
                    <Box sx={{
                        width: { xs: "100%", lg: "50%" },
                        display: "flex",
                        flexDirection: "column",
                        gap: { xs: 2, md: 4 },
                        height: { xs: "auto", md: "100%" }
                    }}>
                        {/* Header */}
                        <Box sx={{
                            display: "flex",
                            flexDirection: { xs: "column", sm: "row" },
                            gap: { xs: 2, sm: 3 },
                            alignItems: { xs: "flex-start", sm: "center" },
                            height: { xs: "auto", md: "20%" }
                        }}>
                            <PhonelinkIcon sx={{
                                color: "#0118D8",
                                width: { xs: "40px", sm: "60px", md: "80px" },
                                height: { xs: "50px", sm: "70px", md: "90px" },
                                textShadow: '0 4px 16px #bfcfff'
                            }} />
                            <Box sx={{
                                display: 'flex',
                                flexDirection: "column",
                                gap: 1
                            }}>
                                <Typography sx={{
                                    color: "#0118D8",
                                    fontWeight: 700,
                                    fontSize: { xs: '28px', sm: '36px', md: '50px' },
                                    lineHeight: "100%",
                                    textShadow: '0 4px 16px #bfcfff'
                                }}>
                                    Customer App
                                </Typography>
                                <Typography sx={{
                                    fontWeight: 400,
                                    fontSize: { xs: '16px', sm: '18px', md: '22px' },
                                    color: '#222',
                                    textShadow: '0 2px 8px #e3e9f7'
                                }}>
                                    This application helps you choose the nearest center.
                                </Typography>
                            </Box>
                        </Box>

                        {/* Features Cards */}
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: { xs: 1.5, md: 2 },
                            width: '100%',
                            height: { xs: "auto", md: "80%" }
                        }}>
                            {AppSectionData.map((data, index) => (
                                <Card
                                    key={index}
                                    sx={{
                                        bgcolor: "#fff",
                                        color: "#222",
                                        p: { xs: 2, md: 3 },
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        gap: { xs: 2, md: 2.5 },
                                        borderRadius: "15px",
                                        width: "100%",
                                        height: { xs: "auto", md: "calc(25% - 8px)" },
                                        minHeight: { xs: "60px", md: "80px" },
                                        cursor: "pointer",
                                        fontWeight: 500,
                                        fontSize: { xs: '14px', sm: '16px', md: '18px' },
                                        boxShadow: '0 4px 20px rgba(1, 24, 216, 0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 8px 30px rgba(1, 24, 216, 0.15)',
                                            bgcolor: '#f8f9ff'
                                        },
                                    }}
                                >
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        minWidth: { xs: 32, md: 40 }
                                    }}>
                                        {data.icon}
                                    </Box>
                                    <Typography sx={{
                                        fontSize: { xs: '14px', sm: '16px', md: '18px' }
                                    }}>{data.text}</Typography>
                                </Card>
                            ))}
                        </Box>
                    </Box>

                    {/* Right Section */}
                    <Box sx={{
                        width: { xs: "100%", md: "30%" },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: { xs: 2, md: 3 },
                        height: { xs: "auto", md: "20%" },
                        pt: { xs: 4, md:0.1 },
                    }}>
                        {/* App Image */}
                        <Box sx={{
                            width: '50%',
                            height: { xs: "auto", md: "30%" },
                            display: 'flex',
                            alignItems: 'center',
                            mb : 1
                        }}>
                            <Box
                                component="img"
                                src="/app2.png"
                                alt="Customer App"
                                sx={{
                                    width: { xs: "80%", sm: "60%", md: "90%" },
                                    maxWidth: "620px",
                                    height: "auto",
                                    objectFit: 'contain',
                                    zIndex: 2,
                                }}
                            />
                        </Box>
                        {/* Description and Download */}
                        <Box sx={{ 
                            width: '100%', 
                            maxWidth: 400, 
                            textAlign: 'left', 
                            height: { xs: "auto", md: "40%" },
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            gap: { xs: 2, md: 1 },
                            mt : {md:10}
                        }}>
                            <Typography sx={{ 
                                fontWeight: 400, 
                                fontSize: { xs: '14px', md: '15px' }, 
                                color: '#222', 
                                mb: 0.5
                            }}>
                                Enjoy a seamless, integrated experience with our customer-friendly app for tracking shipments, and communicating instantly.
                            </Typography>
                            <Typography sx={{ 
                                color: "#0118D8", 
                                fontWeight: 700, 
                                fontSize: { xs: '18px', md: '20px' }, 
                                mb: 0
                            }}>
                                Download the App
                            </Typography>
                            <Typography sx={{ 
                                fontSize: { xs: '12px', md: '14px' }, 
                                mb: 1 
                            }}>
                                <span style={{ color: "#d53434", cursor: "pointer" }}>Click here</span> to download the employee app
                            </Typography>
                            <Box sx={{ 
                                display: 'flex', 
                                flexDirection: { xs: 'column', sm: 'row' }, 
                                gap: 1, 
                                justifyContent: 'flex-start',
                                width: '100%'
                            }}>
                                <Button
                                    startIcon={<img src="/play.png" style={{ width: 32, height: 32, marginRight: 4 }} alt="App Store" />}
                                    sx={{
                                        textTransform: 'none',
                                        color: "#222",
                                        borderRadius: '18px',
                                        border: "2px solid #0118D8",
                                        fontWeight: 600,
                                        fontSize: { xs: '16px', md: '18px' },
                                        px: 2,
                                        py: 0.5,
                                        width: { xs: '100%', sm: 'auto' },
                                        bgcolor: '#fff',
                                        boxShadow: '0 2px 8px rgba(1,24,216,0.07)',
                                        transition: 'all 0.2s',
                                        '&:hover': {
                                            bgcolor: '#f0f4ff',
                                            boxShadow: '0 4px 16px #bfcfff',
                                            borderColor: '#0035cc',
                                        },
                                    }}
                                >
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        <Typography sx={{ fontSize: { xs: '10px', md: '11px' }, color: '#888', fontWeight: 500 }}>13Download</Typography>
                                        <Typography sx={{ fontSize: { xs: '16px', md: '20px' }, fontWeight: 700 }}>App Store</Typography>
                                    </Box>
                                </Button>
                                <Button
                                    startIcon={<img src="/google.png" style={{ width: 32, height: 32, marginRight: 4 }} alt="Google Play" />}
                                    sx={{
                                        textTransform: 'none',
                                        color: "#222",
                                        borderRadius: '18px',
                                        border: "2px solid #0118D8",
                                        fontWeight: 600,
                                        fontSize: { xs: '16px', md: '18px' },
                                        px: 2,
                                        py: 0.5,
                                        width: { xs: '100%', sm: 'auto' },
                                        bgcolor: '#fff',
                                        boxShadow: '0 2px 8px rgba(1,24,216,0.07)',
                                        transition: 'all 0.2s',
                                        '&:hover': {
                                            bgcolor: '#f0f4ff',
                                            boxShadow: '0 4px 16px #bfcfff',
                                            borderColor: '#0035cc',
                                        },
                                    }}
                                >
                                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                        <Typography sx={{ fontSize: { xs: '10px', md: '11px' }, color: '#888', fontWeight: 500 }}>Https://App.com</Typography>
                                        <Typography sx={{ fontSize: { xs: '16px', md: '20px' }, fontWeight: 700 }}>Google Play</Typography>
                                    </Box>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default CustomerApp;