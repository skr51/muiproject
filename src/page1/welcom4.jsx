import { Avatar, Button,  Paper, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

function WelcomeFour() {

    return (
        <Box>
            <Box>
                <Stack direction={{ xs: "column", sm: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}>

                    <Box sx={{ height: 300 ,width:{xs:'100%',sm:'65%'} }}>
                        <Paper elevation={3} >
                            <Box><Typography variant="h4" padding={1}>Testimonials</Typography> </Box>
                            <Box></Box>
                            <Box sx={{ display: 'flex', gap: 2, padding: 3 }}>
                                <Avatar />
                                <Typography variant="h6">Amazing people, always ready to help!</Typography>
                            </Box>                     <Box sx={{ display: 'flex', gap: 2, padding: 3 }}>
                                <Avatar />
                                <Typography variant="h6">Amazing people, always ready to help!</Typography>
                            </Box> </Paper>
                    </Box>

                    <Box  sx={{ height: 300, width: { xs: '100%', sm: '373.33PX' } }}>
                        <Paper elevation={3} >
                            <Box SX={{height: 250, padding:1}}>
                                <Typography variant="h4">Featured event:
                                    Community Meetup May 24, 2018
                                    7-11pm</Typography>
                            </Box>
                            <Box SX={{height: 50}}>
                                <Button variant="contained"><Typography variant={{sm:"h5",xs:"h6"}}>ADD TO CALENDER</Typography></Button>
                            </Box>
                        </Paper>
                    </Box>
                </Stack>
            </Box>


        </Box>
    )
}
export default WelcomeFour;
/*<Stack>
                            <Box></Box>
                            <Box><Typography variant="h6">Amazing people, always ready to help!</Typography></Box>
                            </Stack>*/

                            /*            <Box sx={{ height: '100px', Width: '100%', backgroundColor: "black" }} >
                <Typography variant="h6" align="center" padding={4} sx={{ color: "white", justifyContent: "center" }}>
                    © Unitiled. Design: <u>TemplateFlip</u>.   <i sx={{ Color: grey }}>Privacy & Terms</i></Typography>
            </Box>*/