import { Avatar, Button, Paper, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

function WelcomeFour() {

    return (
        <Box padding='28px 0px' sx={{backgroundColor:"rgb(238 238 238)"}}>
            <Box>
                <Stack direction={{ xs: "column", sm: 'row' }}
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}>

                    <Box sx={{  width: { xs: '100%', sm: '65%' } }}>
                        <Paper elevation={3} >
                            <Box sx={{display: 'flex'}}  ><Typography variant="h5" padding={2}>Testimonials</Typography> </Box>

                            <Box  sx={{ display: 'flex', gap:{sm:2,xs:1}, padding:{sm:3,xs:1} //,height:100 
                         }}>
                                <Avatar />
                                <Typography variant="h6">Amazing people, always ready to help!</Typography>
                            </Box>
                            <Box  sx={{ display: 'flex',gap:{sm:2,xs:1}, padding:{sm:3,xs:1} //,height:100 
                         }}>
                                <Avatar />
                                <Typography variant="h6">Amazing people, always ready to help!</Typography>
                            </Box> </Paper>
                    </Box>



                    <Box sx={{ width: { sm: "35%", xs: "100" },  }}>
                        <Paper elevation={3} >

                            <Box padding={2} sx={{
                                width: '100%',
                                backgroundColor:'rgb(25 118 210)'// height:200
                            }}>
                                <Typography variant="h4" sx={{marginBottom:"33px"}}>Featured event:
                                    Community Meetup May 24, 2018
                                    7-11pm</Typography>
                            </Box><hr className="hr" /><Box padding={1} sx={{
                                width: '100%',
                                backgroundColor:'rgb(25 118 210)', height:50
                            }}>

                                <Button variant="contained"><Typography variant={{ sm: "h5", xs: "h6" }} >ADD TO CALENDER
                                </Typography></Button>


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

/* <Box  sx={{ height: 300, width: { xs: '100%', sm: '373.33PX' } }}>
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
          </Box>*/