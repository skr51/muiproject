import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";

import Portfolio1 from '../img/portfolio1.jpg'
import Portfolio2 from '../img/portfolio2.jpg'
import Portfolio3 from '../img/portfolio3.jpg'

function WelcomeTree() {
    return (
       <Box >
        <Box padding={"8px 0px "} margin={"0px 0px 28px 0px"}>
          <Stack        
       direction={{xs:"column", sm:'row' }}
       justifyContent="space-between"
       alignItems="center"
       spacing={2}
     >
        <Box sx={{boxShadow:3}}>
         <Box sx={{
      backgroundImage:`url(${Portfolio1})`,
      backgroundRepeat:'no-repeat',
      backgroundColor:"black",
      backgroundPosition:'center',
      backgroundSize:'cover',
      height:200,
      width:'100%',
      
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

    </Box><Box sx={{
      width:'100%',
      backgroundColor:"white",
    }}>
      <Typography variant='h6' sx={{color:"black",padding:"10px"}}>DOWNLOAD</Typography>

    </Box></Box>
    <Box sx={{boxShadow:3}}>
    <Box sx={{
      backgroundImage:`url(${Portfolio2})`,
      backgroundRepeat:'no-repeat',
      backgroundColor:"black",
      backgroundPosition:'center',
      backgroundSize:'cover',
      height:200,
      width:'100%',
      
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

    </Box><Box sx={{
      width:'100%',
      backgroundColor:"white",
    }}>
      <Typography variant='h6' sx={{color:"black",padding:"10px"}}>DOWNLOAD</Typography>

    </Box></Box>
    <Box sx={{boxShadow:3}}>
    <Box sx={{
      backgroundImage:`url(${Portfolio3})`,
      backgroundRepeat:'no-repeat',
      backgroundColor:"black",
      backgroundPosition:'center',
      backgroundSize:'cover',
      height:200,
      width:'100%',
      
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

    </Box><Box sx={{
      width:'100%',
      backgroundColor:"white",
    }}>
      <Typography variant='h6' sx={{color:"black",padding:"10px"}}>DOWNLOAD</Typography>

    </Box></Box>
     </Stack></Box>
     <Box padding={'8px'} marginBottom={'28px'}>
      <Stack  justifyContent="center" alignItems="center">
        <Box> <Button variant="contained" sx={{justifyContent:'center',background:'rgb(255 64 129)'}} >
          <Typography sx={{variant:{xs:"h6",sm:"h5"}}}>VIEW PORTPOLIO</Typography></Button></Box>
      </Stack >
    
     </Box>
     </Box>
    )
}
export default WelcomeTree;