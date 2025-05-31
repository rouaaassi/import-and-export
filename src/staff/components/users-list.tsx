import { ArrowForwardIos, PersonAdd } from "@mui/icons-material";
import { Avatar, AvatarGroup, Box, Card, IconButton, Typography, Button } from "@mui/material";
import React, { FC } from "react";

const UserList: FC = () => {
    return (
        <Box sx={{ width: "100%" }}>
            <Box 
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 3
                }}
            >
                <Typography
                    sx={{
                        fontSize: '14px',
                        color: '#666',
                        fontWeight: 500
                    }}
                >
                    Last 24 hours
                </Typography>
                <Button
                    variant="outlined"
                    startIcon={<PersonAdd />}
                    sx={{
                        textTransform: 'none',
                        borderRadius: '8px',
                        borderColor: '#E3E8FF',
                        color: '#0118D8',
                        '&:hover': {
                            borderColor: '#0118D8',
                            backgroundColor: '#F5F7FF'
                        }
                    }}
                >
                    View All Users
                </Button>
            </Box>

            <Card
                sx={{
                    borderRadius: "16px",
                    backgroundColor: '#fff',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                    p: 3
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        mb: 3
                    }}
                >
                    <Box>
                        <Typography
                            sx={{
                                fontSize: '24px',
                                fontWeight: 700,
                                color: '#1A1A1A',
                                mb: 1
                            }}
                        >
                            24 New Users
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: '14px',
                                color: '#666',
                                fontWeight: 500
                            }}
                        >
                            New users have logged in today
                        </Typography>
                    </Box>
                    <IconButton
                        sx={{
                            bgcolor: "#F5F7FF",
                            borderRadius: "12px",
                            width: "48px",
                            height: "48px",
                            color: "#0118D8",
                            '&:hover': {
                                bgcolor: "#E3E8FF"
                            }
                        }}
                    >
                        <ArrowForwardIos sx={{ fontSize: "16px" }} />
                    </IconButton>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2,
                        bgcolor: '#F5F7FF',
                        borderRadius: '12px'
                    }}
                >
                    <AvatarGroup
                        total={24}
                        sx={{
                            '& .MuiAvatar-root': {
                                border: '2px solid #fff',
                                width: 40,
                                height: 40,
                                fontSize: '14px'
                            }
                        }}
                        componentsProps={{
                            additionalAvatar: {
                                sx: {
                                    fontWeight: 600,
                                    fontSize: '14px',
                                    color: '#0118D8',
                                    backgroundColor: '#E3E8FF'
                                }
                            }
                        }}
                    >
                        <Avatar alt="Remy Sharp" src="/1.png" />
                        <Avatar alt="Travis Howard" src="/2.png" />
                        <Avatar alt="Agnes Walker" src="/3.png" />
                        <Avatar alt="Trevor Henderson" src="/4.png" />
                    </AvatarGroup>
                    <Typography
                        sx={{
                            fontSize: '14px',
                            color: '#666',
                            fontWeight: 500
                        }}
                    >
                        New users have joined the platform
                    </Typography>
                </Box>
            </Card>
        </Box>
    );
};

export default UserList;
