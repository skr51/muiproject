import { Container } from "@mui/system";
import React from "react";
import WelcomeFour from "./page1/welcom4";
import WelcomeOne from "./page1/welcome";
import WelcomeTwo from "./page1/welcome2";
import WelcomeTree from "./page1/welcome3";
import './index.css';
import Navmui from "./sidebar/navmui";


function App() {

  return (
    <><Navmui />
    <Container>
      <WelcomeOne />
      <WelcomeTwo />
      <WelcomeTree/>
      <WelcomeFour/>
      </Container>
    </>
  )
}
export default App;