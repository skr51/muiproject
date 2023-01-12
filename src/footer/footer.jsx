import { Typography } from "@mui/material";
import { Box } from "@mui/system"
import React from "react"

function Footer() {
    return(
        <Box sx={{backgroundColor:'rgb(66 66 66)',height:100,width:'100%'}}>
            <Box sx={{padding:'32px 16px',align:'center'}}>
            <Typography variant="36" sx={{color:'rgb(255 255 255)',align:'flex-end'}}>sk51</Typography></Box>

        </Box>

    )
    
}
export default Footer;