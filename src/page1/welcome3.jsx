import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import Welcome from '../img/welcome.jpg'

function WelcomeTree() {
    return (
       <Box paddingTop={5}>
        <Stack
       direction={{xs:"column", sm:'row'}}
       justifyContent="space-between"
       alignItems="center"
       spacing={2}
     >
        <Box>
         <Box sx={{
      backgroundImage:`url(${Welcome})`,
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
    <Box>
    <Box sx={{
      backgroundImage:`url(${Welcome})`,
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
    <Box>
    <Box sx={{
      backgroundImage:`url(${Welcome})`,
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
     </Stack>
     <Box padding={3} >
     <Button variant="contained" justifyContent={"center"} ><Typography variant="h4" justifyContent={"center"}>VIEW PORTPOLIO</Typography></Button>
     </Box>
     </Box>
    )
}
export default WelcomeTree;