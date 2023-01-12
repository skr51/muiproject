import { Card, CardActionArea, CardContent, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Welcome from '../img/welcome.jpg'
import Button from '@mui/material/Button';


function WelcomeTwo() {

  return (

    <Box padding={"8px 0px"} marginBottom={"28px"}>

      <Stack direction={{ xs: "column", sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2} >

        <Box  sx={{ width: { sm: '25%', xs: "100%" }, boxShadow: 3 }}>
          <Paper elevation={3}>
            <Box sx={{
              backgroundImage: `url(${Welcome})`,
              backgroundRepeat: 'no-repeat',
              backgroundColor: "black",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: 194.5,
              width: '100',

            }}></Box></Paper></Box >

        <Box  sx={{ width: { sm: "74%", xs: "100" },  backgroundColor: "gray"}}>
          <Paper elevation={3} >
            <Box sx={{
              width: '100%',
              backgroundColor: "white",padding:2
            }}>
              <Typography fontSize={'24px'} sx={{ color: "black"}}>
                Introduection
              </Typography></Box>

            <Box padding= {"16px"}  sx={{
              width: '90%',
              backgroundColor: "white"
            }}>
              <Typography fontSize={'14px'} sx={{ color: "black", }}>
                Headquartered in Idiazabal, Spain, and founded in 1964, AMPO Poyam has been
                entrusted with the largest international projects by the world's
                leading engineering construction and end-user companies.
              </Typography></Box>

            <Box sx={{
              width: '100%',
              backgroundColor: "white",
            }}>
             <Box padding={'8px'}>
          <Button variant="text" size="medium" sx={{color:'rgb(255 64 129)'}}>
           DOWNLOAD</Button></Box>

            </Box>
          </Paper>
        </Box>

      </Stack>
    </Box>
  )
}
export default WelcomeTwo;

/*<Box sx={{ width: "100%", height: 73, }}>
<Typography variant="h3" padding={1}>Introduction</Typography></Box>
<Box sx={{ width: "100%", height: 177, }}>
<Typography variant="h5" padding={1}>Efficiently unleash cross-media information without cross-media value.
  Quickly maximize timely deliverables for real-time schemas.
  Dramatically maintain clicks-and-mortar solutions without functional solutions.</Typography></Box>
<Box sx={{ alignItems: 'flex-end', width: "100%", height: 50, }}>
<Typography variant="h4" padding={1}>whatch</Typography></Box>*/
/*   <Card  sx={{ height: { sm: 300, xs: 600 },  }}>
            <CardContent sx={{ padding: "5px" }}>
              <Typography variant="h5">
                Introduction
              </Typography>
            </CardContent>
            <CardContent sx={{ padding: "5px" }}><Typography variant="h6">Efficiently unleash cross-media information without cross-media value.
              Quickly maximize timely deliverables for real-time schemas.
              Dramatically maintain clicks-and-mortar solutions without functional solutions.</Typography>
            </CardContent>
            <CardActionArea>
              <Typography variant="h5">WHATCH</Typography>
            </CardActionArea>
          </Card> */