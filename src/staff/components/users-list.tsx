import { ArrowForwardIos } from "@mui/icons-material";
import { Avatar, AvatarGroup, Box, Card, IconButton, Typography } from "@mui/material";
import React, { FC } from "react";

const UserList: FC = () => {
    return (
        <>
            <Card
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 3,
                    width: "765px",
                    height: "116px",
                    borderRadius: "40px",
                    alignItems: "center",
                    paddingLeft: 2,
                    px: 3,
                    boxShadow: '0 14px 30px rgba(0, 0, 0, 0.4)',
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
                            }
                        }
                    }}
                >
                    <Avatar alt="Remy Sharp" src="/1.png" />
                    <Avatar alt="Travis Howard" src="/2.png" />
                    <Avatar alt="Agnes Walker" src="/3.png" />
                    <Avatar alt="Trevor Henderson" src="/4.png" />
                </AvatarGroup>

                <Box sx={{ display: "flex", gap: 30 }}>
                    <Typography sx={{ fontWeight: 700, fontSize: '16px' }}>
                        New users have logged in today. Please check them out.
                    </Typography>
                    <IconButton
                        sx={{
                            bgcolor: "#64DB96",
                            borderRadius: "50px",
                            width: "50px",
                            height: '50px',
                            display: "flex",
                            alignItems: "center",
                            color: "#0E3056",
                            '&:hover': {
                                bgcolor: "#52c284"
                            }
                        }}
                    >
                        <ArrowForwardIos sx={{ width: "14px", height: "14px" }} />
                    </IconButton>
                </Box>
            </Card>
        </>
    )
}

export default UserList;
