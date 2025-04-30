import { Avatar, Box, IconButton } from "@mui/material";
import React from "react";
export default function Profile (){
    const handelClickProfile =()=>{
        // edit this as a photo 
        console.log('profile')
    }
    return(
        <>
        <IconButton onClick={handelClickProfile}>
        <Avatar></Avatar>
        </IconButton>
       
        </>
    )
}