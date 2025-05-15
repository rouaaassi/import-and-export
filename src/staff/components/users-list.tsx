import { ArrowForwardIos } from "@mui/icons-material";
import { Avatar, AvatarGroup, Box, Card, IconButton, Typography } from "@mui/material";
import React, { FC } from "react";

const UserList: FC = () => {
    return (
        <Card
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                maxWidth: '750px',
                height: "120px",
                borderRadius: "30px",
                px: 4,
                py: 2,
                backgroundColor: '#fff',
                boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
                transition: 'all 0.3s ease-in-out'
            }}
        >
            <AvatarGroup
                total={24}
                componentsProps={{
                    additionalAvatar: {
                        sx: {
                            fontWeight: 'bold',
                            fontSize: '14px',
                            color: '#CC2431',
                            backgroundColor: '#FFEDEE'
                        }
                    }
                }}
            >
                <Avatar alt="Remy Sharp" src="/1.png" />
                <Avatar alt="Travis Howard" src="/2.png" />
                <Avatar alt="Agnes Walker" src="/3.png" />
                <Avatar alt="Trevor Henderson" src="/4.png" />
            </AvatarGroup>

            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    ml: 4
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 600,
                        fontSize: { xs: '14px', sm: '16px' },
                        color: '#333',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        maxWidth: { xs: '150px', sm: '400px' }
                    }}
                >
                    New users have logged in today. Please check them out.
                </Typography>

                <IconButton
                    sx={{
                        bgcolor: "#64DB96",
                        borderRadius: "50%",
                        width: "48px",
                        height: "48px",
                        color: "#0E3056",
                        ml: 2,
                        '&:hover': {
                            bgcolor: "#52c284"
                        }
                    }}
                >
                    <ArrowForwardIos sx={{ fontSize: "16px" }} />
                </IconButton>
            </Box>
        </Card>
    );
};

export default UserList;
