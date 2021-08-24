import React from 'react';
import { Link } from "react-router-dom";

import "./Top.css";
import Container from "../../Container";
import logo from "../../../assets/images/logo.gif";
import LayeredButton from "../../Buttons/LayeredButton";

const Top = (props) => {
  return (
    <Container className="Flex-V-Center HeaderTop">
    	<Link to="/" className="HeaderTop__LogoWrapper">
    		<img className="HeaderTop__Logo" src={logo} alt="logo" />
    	</Link>
    	<LayeredButton 
            type="button" 
            text="🔑&nbsp;Logout" 
        />
    </Container>
  )
}

export default Top;