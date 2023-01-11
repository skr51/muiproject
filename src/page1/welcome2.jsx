import { Card, CardActionArea, CardContent, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Welcome from '../img/welcome.jpg'



function WelcomeTwo() {

  return (

    <Box paddingTop={4}>

      <Stack direction={{ xs: "column", sm: 'row' }}
        justifyContent="space-between"
        alignItems="center"
        spacing={2} >

        <Box paddingBottom={{ sx: 2 }} sx={{ width: { sm: '25%', xs: "100%" }, height: 300, boxShadow: 3 }}>
          <Paper elevation={3}>
            <Box sx={{
              backgroundImage: `url(${Welcome})`,
              backgroundRepeat: 'no-repeat',
              backgroundColor: "black",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              height: 300,
              width: '100',

            }}></Box></Paper></Box >

        <Box sx={{ width: { sm: "74%", xs: "100" }, height: { sm: 300,  }, backgroundColor: "gray"}}>
          <Paper elevation={3}>
            <Box sx={{
              width: '100%',
              backgroundColor: "white",height:50
            }}>
              <Typography variant="h4" sx={{ color: "black", padding: "5px", }}>
                Introduection
              </Typography></Box>
            <Box sx={{
              width: '100%',
              backgroundColor: "white",height:200
            }}>
              <Typography sx={{ color: "black", padding: "5px", }}>
                Headquartered in Idiazabal, Spain, and founded in 1964, AMPO Poyam has been
                entrusted with the largest international projects by the world's
                leading engineering construction and end-user companies.
              </Typography>

            </Box><Box sx={{
              width: '100%',
              backgroundColor: "white",height:50
            }}>
              <Typography variant='h6' sx={{ color: "black", padding: "5px" }}>DOWNLOAD</Typography>

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