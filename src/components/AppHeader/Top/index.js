import React from 'react';

import "./Top.css";
import Container from "../../Container";
import logo from "../../../assets/images/logo.gif";

const Top = (props) => {
  return (
    <Container className="Top">
    	<img className="Top__Logo" src={logo} alt="logo" />
    	<button type="button" className="LayeredButton">
    		<span>🔑&nbsp;Logout</span>
    	</button>
    </Container>
  )
}

export default Top;