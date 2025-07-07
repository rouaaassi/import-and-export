import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
const CopyWritte :FC =()=>{
    return(
        <>
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center' ,mt:2, flexDirection:'row'}}>
            <Typography variant="body2" color="text.secondary" fontWeight={500}>All rights reserved @  {new Date().getFullYear()} Express Syria </Typography>
        </Box>
        </>
    )
}
export default CopyWritte;