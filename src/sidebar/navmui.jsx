
import AppBar from "@mui/material/AppBar";
import React from "react";
import { NavLink } from "react-router-dom";

import Container from "@mui/material/Container";




import { Box } from "@mui/system";
import { Stack, Typography } from "@mui/material";
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
                    >
                        <Box  ><NavLink to= '/'><toolbar><Typography variant="h6" sx={{ alignItems: "center", justifyContent: "center" }}>HOME</Typography></toolbar></NavLink></Box>
                        <Box  ><NavLink to= '/user-list'> <toolbar>USERLIST</toolbar></NavLink></Box>
                        <Box  ><NavLink to="/add-user"> <toolbar>ADDUSER</toolbar></NavLink></Box>
                        <Box  ><NavLink to='/edit-user/:id'> <toolbar>EDITUSER</toolbar></NavLink></Box>
                    </Stack>
                </Container>

            </AppBar></Box>
    )
}
export default Navmui;