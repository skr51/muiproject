
import AppBar from "@mui/material/AppBar";
import React from "react";
import logo from '../img/images.jpg'
import Container from "@mui/material/Container";




import { Box } from "@mui/system";
import { Stack, Typography } from "@mui/material";

function Navmui() {



    return (
        <Box>
            <Box height={200} width={'100%'} sx={{backgroundColor:'rgb(63 81 181)'}} >
                <Stack direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={0}
                        padding={1}><Box sx={{
                            image:`url(${logo})`,
                            backgroundRepeat:'no-repeat',
                            backgroundColor:"black",
                            backgroundPosition:'center',
                            backgroundSize:'cover',
                            height:120,
                            width:120,
                            
                            
                          }}></Box></Stack>

            </Box>
            <AppBar position="static" sx={{backgroundColor:'rgb(63 81 181)'}} >
                <Container sx={{ height: '50px' }}>
                    <Stack
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        spacing={0}
                        padding={1}
                    >
                        <Box><toolbar><Typography variant="h6" sx={{ alignItems: "center", justifyContent: "center" }}>HOME</Typography></toolbar></Box>
                        <toolbar>PORTFOLIO</toolbar>
                        <toolbar>CONTACT US</toolbar>
                        <toolbar>ABOUT</toolbar>
                    </Stack>
                </Container>

            </AppBar></Box>
    )
}
export default Navmui;