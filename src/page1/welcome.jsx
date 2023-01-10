import * as React from 'react';
import Welcome from '../img/welcome.jpg'
import { Box } from '@mui/system';
import { Paper, Typography } from '@mui/material';

export default function WelcomeOne() {
    return (
      <Box paddingTop={3} >
      <Paper elevation={3}>
    <Box sx={{
      backgroundImage:`url(${Welcome})`,
      backgroundRepeat:'no-repeat',
      backgroundColor:"black",
      backgroundPosition:'center',
      backgroundSize:'cover',
      height:400,
      width:'100',
      
    }}>
    </Box><Box sx={{
      width:'100%',
      backgroundColor:"white",
    }}>
      <Typography sx={{color:"black", padding:"5px",}}>
      Headquartered in Idiazabal, Spain, and founded in 1964, AMPO Poyam has been
       entrusted with the largest international projects by the world's
       leading engineering construction and end-user companies. 
      </Typography>

    </Box><hr></hr><Box sx={{
      width:'100%',
      backgroundColor:"white",
    }}>
      <Typography variant='h6' sx={{color:"black",padding:"5px"}}>DOWNLOAD</Typography>

    </Box>
    </Paper></Box>
    // section
    
    );
}