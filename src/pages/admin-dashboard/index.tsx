import React from "react";
import SideBar from "../../admin/sideBar/sideBar";
import { Box, Typography } from "@mui/material";
import SearchBar from "../../admin/search/searchAdmin";
export default function AdminDashboard(){
    return(
        <>
        <Box sx={{width:'100%',height:"100vh"}}>
            <SearchBar/>
            {/* TODO:need to Authentication */}
            <Typography>Welcome user  name </Typography>
            <SideBar/>
        </Box>
        </>
    )
}