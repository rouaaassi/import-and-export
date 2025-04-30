import React from "react";
import SearchBar from "../search/searchAdmin";
import { Box, Button, Typography } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from "react-router";
import PATH from "../../../../routes/route";
import Profile from "../profile/main";
import Greeting from "./Greeting";

export default function Header() {
    return (
        <Box
            sx={{
                width: '100%',
                display: 'flex',
                position: "fixed",
                justifyContent: 'center',
                alignItems: 'center',
                gap: 5,
                px: 4,
                py: 0.1,
            }}
        >
            <Greeting />
            <SearchBar />

            <Button
                component={Link}
                to={PATH.home}
                variant="outlined"
                startIcon={<img src="/back.png" style={{ width: 24, height: 24 }} />}
                sx={{ whiteSpace: 'nowrap', borderRadius: "36px", bgcolor: "#0118D8", color: "#fff" }}
            >
                Back to Home
            </Button>
            <Button
                startIcon={<img src="/reminder.png" style={{ width: 24, height: 24 }} />}
                sx={{ textTransform: "none", color: "#333" }}
                endIcon={<img src="/Vector.png" style={{ width: 24, height: 24 }} />}>reminder</Button>
            <Profile />
        </Box>
    );
}
