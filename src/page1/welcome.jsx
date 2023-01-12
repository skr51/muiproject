import * as React from 'react';
import Welcome from '../img/welcome.jpg'
import { Box } from '@mui/system';
import { Paper, Typography } from '@mui/material';
import Button from '@mui/material/Button';

export default function WelcomeOne() {
  return (
    <Box paddingTop={3} paddingBottom={1} >
      <Paper elevation={3}>
        <Box sx={{
          backgroundImage: `url(${Welcome})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: "black",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          height: 293,
          width: '100%',

        }}>
        </Box><Box sx={{
          width: '100%',
          backgroundColor: "white",// height: 50
        }}>
          <Typography sx={{ color: "black", padding:2, }}>
            Demo of Material Design Portfolio Template by TemplateFlip. Click on "Download" button below to download the template.
          </Typography>

        </Box><hr className='hr'></hr>
        <Box sx={{
          width: '100%',
          backgroundColor: "white",// height: 53
        }}><Box padding={1}>
          <Button variant="text" size="medium" sx={{color:'rgb(255 64 129)'}}>
           DOWNLOAD</Button></Box>

        </Box>
      </Paper></Box>
    // section

  );
}
/** <Typography variant='h6'
              font-weight={500} font-size={14}
              text-transform={'uppercase'} letter-spacing={0}
              sx={{ color: "black", padding: "8px" }}> </Typography>*/
             /* import * as React from 'react';
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

    </Box><hr sx={{margin:null}}></hr><Box sx={{
      width:'100%',
      backgroundColor:"white",
    }}>
      <Typography variant='h6' sx={{color:"black",padding:"5px"}}>DOWNLOAD</Typography>

    </Box>
    </Paper></Box>*/