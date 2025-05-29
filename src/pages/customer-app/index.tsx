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
                minHeight: "100vh",
                position: "relative",
                bgcolor: "#fff",
                display: "flex",
                alignItems: "center",
                overflow: "hidden",
                py: { xs: 4, md: 8 }
            }}
        >
            <Container maxWidth="xl">
                <Box sx={{
                    display: "flex",
                    flexDirection: { xs: "column", lg: "row" },
                    gap: { xs: 4, lg: 8 },
                    alignItems: "flex-start",
                    position: "relative"
                }}>
                    {/* Left Section */}
                    <Box sx={{
                        width: { xs: "100%", lg: "50%" },
                        display: "flex",
                        flexDirection: "column",
                        gap: 4,
                        height: "100%"
                    }}>
                        {/* Header */}
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            gap: 3,
                            alignItems: "center"
                        }}>
                            <PhonelinkIcon sx={{
                                color: "#0118D8",
                                width: { xs: "60px", md: "80px" },
                                height: { xs: "70px", md: "90px" },
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
                                    fontSize: { xs: '36px', md: '50px' },
                                    lineHeight: "100%",
                                    textShadow: '0 4px 16px #bfcfff'
                                }}>
                                    Customer App
                                </Typography>
                                <Typography sx={{
                                    fontWeight: 400,
                                    fontSize: { xs: '18px', md: '22px' },
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
                            gap: 2,
                            width: '100%',
                            flex: 1
                        }}>
                            {AppSectionData.map((data, index) => (
                                <Card
                                    key={index}
                                    sx={{
                                        bgcolor: "#fff",
                                        color: "#222",
                                        p: 3,
                                        display: "flex",
                                        justifyContent: "flex-start",
                                        alignItems: "center",
                                        gap: 2.5,
                                        borderRadius: "15px",
                                        width: "100%",
                                        height: { xs: "80px", md: "90px" },
                                        cursor: "pointer",
                                        fontWeight: 500,
                                        fontSize: { xs: '16px', md: '18px' },
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
                                        minWidth: 40
                                    }}>
                                        {data.icon}
                                    </Box>
                                    <Typography>{data.text}</Typography>
                                </Card>
                            ))}
                        </Box>
                    </Box>

                    {/* Right Section */}
                    <Box sx={{
                        width: { xs: "100%", md: "50%" },
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                        pt: { xs: 4, md: 0 },
                    }}>
                        {/* App Image */}
                        <Box sx={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'flex-start',
                            justifyContent: 'center',
                            mb: 2,
                        }}>
                            <Box
                                component="img"
                                src="/app2.png"
                                alt="Customer App"
                                sx={{
                                    width: { xs: 180, sm: 200, md: 620 },
                                    height: { xs: 220, sm: 240, md: 360 },
                                    objectFit: 'contain',
                                    zIndex: 2,
                                }}
                            />
                        </Box>
                        {/* Description and Download - moved here under the image */}
                        <Box sx={{ width: '100%', maxWidth: 400, textAlign: 'left', mb: 2 }}>
                            <Typography sx={{ fontWeight: 400, fontSize: 15, color: '#222', mb: 1 }}>
                                Enjoy a seamless, integrated experience with our customer-friendly app for tracking shipments, and communicating instantly.
                            </Typography>
                            <Typography sx={{ color: "#0118D8", fontWeight: 700, fontSize: 20, mb: 0.5 }}>
                                Download the App
                            </Typography>
                            <Typography sx={{ fontSize: 14, mb: 2 }}>
                                <span style={{ color: "#d53434", cursor: "pointer" }}>Click here</span> to download the employee app
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flexWrap: 'wrap', mt: 2, justifyContent: 'flex-start' }}>
                                <Button
                                    startIcon={<img src="/play.png" style={{ width: 32, height: 32, marginRight: 4 }} alt="App Store" />}
                                    sx={{
                                        textTransform: 'none',
                                        color: "#222",
                                        borderRadius: '18px',
                                        border: "2px solid #0118D8",
                                        fontWeight: 600,
                                        fontSize: 18,
                                        px: 3,
                                        py: 1.5,
                                        minWidth: 170,
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
                                        <Typography sx={{ fontSize: 11, color: '#888', fontWeight: 500 }}>13Download</Typography>
                                        <Typography sx={{ fontSize: 20, fontWeight: 700 }}>App Store</Typography>
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
                                        fontSize: 18,
                                        px: 3,
                                        py: 1.5,
                                        minWidth: 170,
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
                                        <Typography sx={{ fontSize: 11, color: '#888', fontWeight: 500 }}>Https://App.com</Typography>
                                        <Typography sx={{ fontSize: 20, fontWeight: 700 }}>Google Play</Typography>
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