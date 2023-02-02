
import AppBar from "@mui/material/AppBar";
import React from "react";
import { NavLink } from "react-router-dom";

import Container from "@mui/material/Container";




import { Box } from "@mui/system";
import { Stack, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

function Navmui() {



    return (
        <Box>
            <Box height={200} width={'100%'} sx={{backgroundColor:'rgb(63 81 181)'}} >

            <Container sx={{ height: '50px' }}>
                <Stack direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={0}
                        padding={0}>
                            <Box paddingTop={0}>
                                <Typography variant="h1"sx={{color:'white'}}>< MenuIcon sx={{display:{xs:"block",sm:"none"},padding:2}}/>LoGo</Typography>
                        </Box></Stack></Container>

            </Box>
            <AppBar position="static" sx={{display:{xs:"none",sm:"block"},backgroundColor:'rgb(63 81 181)',height:45}} >
                <Container>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={0}
                        padding={1}
                        height={45}
                    >
                        <Box  ><NavLink to= '/'><Toolbar ><Typography variant="h6" sx={{ alignItems: "center", justifyContent: "center" }}>
                            HOME</Typography></Toolbar></NavLink></Box>
                        <Box  ><NavLink to= '/user-list'> <Toolbar >USERLIST</Toolbar></NavLink></Box>
                        <Box  ><NavLink to="/add-user"> <Toolbar >ADDUSER</Toolbar></NavLink></Box>
                        <Box  ><NavLink to='/edit-user/:id'> <Toolbar >EDITUSER</Toolbar></NavLink></Box>
                    </Stack>
                </Container>

            </AppBar></Box>
    )
}
export default Navmui;