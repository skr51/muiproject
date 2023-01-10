import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box, Stack } from "@mui/system";
import React from "react";

function WelcomeFour() {

    return (
        <Box>
        <Box>
            <Stack direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}>
                <Box sx={{  padding:"24px" }}>
                    <Card sx={{ maxWidth: 500 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Box>

                <Box sx={{ backgroundColor: "gray", padding:"24px" }}>
                <Card sx={{ maxWidth: 800 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            </Stack>
        </Box>
        
        <Box  sx={{height:'100px',Width:'100%', backgroundColor:"black"}} >
            <Typography variant="h6" align="center" padding={4} sx={{color:"white", justifyContent:"center"}}>
                © Unitiled. Design: <u>TemplateFlip</u>.   <i sx={{Color:grey}}>Privacy & Terms</i></Typography>
        </Box>
        </Box>
    )
}
export default WelcomeFour;