import React from "react";
import SearchBar from "../search/search";
import { Box, Button } from "@mui/material";
import { Link } from "react-router";
import PATH from "../../../../routes/route";
import Profile from "../../../components/profileModel";

export default function Header() {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 5,
                px: 4,
                py: 0.1,
            }}
        >

            <SearchBar />

            <Button
                component={Link}
                to={PATH.home}
                variant="outlined"
                startIcon={<img src="/back.png" style={{ width: 24, height: 24 }} />}
                sx={{
                    whiteSpace: 'nowrap', borderRadius: "36px", bgcolor: "#0118D8", color: "#fff",
                    '&:hover': {
                        boxShadow: "0px 0px 20px #0118D8",
                    },
                }}
            >
                Back to Home
            </Button>
            <Box sx={{ display: 'flex' }}>
                <Button
                    sx={{ textTransform: "none", color: "#333" }}
                    endIcon={<img src="/vector2.png" style={{ width: 34, height: 34 }} />}>reminder</Button>
                <Profile />
            </Box>
        </Box>

    );
}
