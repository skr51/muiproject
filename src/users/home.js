import { Container } from "@mui/system";
import React from "react";
import WelcomeFour from "../page1/WelcomeFour";
import WelcomeOne from "../page1/WelcomeOne";
import WelcomeTwo from "../page1/WelcomeTwo";
import WelcomeTree from "../page1/WelcomeTree";
import '../index.css';

import Footer from "../footer/Footer";



function Home() {

  return (
    <>
    <Container Padding={{xs:"0px 8px"}}>
      <WelcomeOne />
      <WelcomeTwo />
      <WelcomeTree/>
      <WelcomeFour/>
      </Container>
      <Footer />
    </>
  )
}
export default Home;