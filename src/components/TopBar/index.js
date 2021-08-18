import React from 'react';
import { Link } from "react-router-dom";

import "./TopBar.css";
import Container from "../Container";
import logo from "../../assets/images/logo.gif";

const TopBar = (props) => {
  return (
    <section className="TopBar">
    	<Container>
    		<Link to="/" className="TopBar__LogoWrapper">
    			<img src={logo} alt="logo" className="TopBar__Img" />
    		</Link>
    		<div className="TopBar__AuthButtons">
    			<Link to="/auth/login" className="TopBar__AuthButton">Login</Link>
    			<Link to="/auth/register" className="TopBar__AuthButton TopBar__AuthButtons--Register">Register</Link>
    		</div>
    	</Container>
    </section>
  )
}

export default TopBar;