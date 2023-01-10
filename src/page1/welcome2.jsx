import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Paper, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import '../img/welcome.jpg'



function WelcomeTwo() {

  return (

    <Box paddingTop={4}>

      <Stack direction={{ xs: "column", sm: 'row' }} justifyContent="space-between"
        alignItems="center" spacing={2} >

        <Box paddingBottom={{ sx: 2 }} sx={{ width: { sm: '25%', xs: "100%" }, height: 300, }}>
          <Card sx={{ maxWidth: 500 }}>
           

              <CardMedia
                component="img"
                height="300"
                image='../img/welcome.jpg'
                alt="Paella dish"
              />

            
          </Card>

        </Box >
        <Box sx={{ width: { sm: "74%", xs: "100" }, height: { sm: 300, xs: 600 }, backgroundColor: "gray" }}>
        <Card sx={{height: { sm: 300, xs: 600 }}}>
        <CardContent sx={{padding:"5px"}}>
            <Typography variant="h5">
              Introduction
            </Typography>
            </CardContent>
          <CardContent sx={{padding:"5px"}}><Typography variant="h6">Efficiently unleash cross-media information without cross-media value.
  Quickly maximize timely deliverables for real-time schemas.
  Dramatically maintain clicks-and-mortar solutions without functional solutions.</Typography>
          </CardContent>
          <CardActionArea sx={{position:"-webkit-sticky"}}>
            <Typography variant="h5">WHATCH</Typography>
          </CardActionArea>
        </Card>
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