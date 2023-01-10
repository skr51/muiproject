
import AppBar from "@mui/material/AppBar";
import React from "react";

import Container from "@mui/material/Container";



import styled from "@emotion/styled";
import { Box } from "@mui/system";
import { Stack, Typography } from "@mui/material";

function Navmui() {

    const menubox = styled(Box)({
        display: "flex",
        gap: 30,
    });

    return (
        <AppBar position="static" >
            <Container sx={{ height:'50px'}}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={0}
                    padding={1}
                >
                    <Box><toolbar><Typography variant="h6"sx={{alignItems:"center",justifyContent:"center"}}>HOME</Typography></toolbar></Box>
                    <toolbar>PORTFOLIO</toolbar>
                    <toolbar>CONTACT US</toolbar>
                    <toolbar>ABOUT</toolbar>
                </Stack>
            </Container>

        </AppBar>
    )
}
export default Navmui;