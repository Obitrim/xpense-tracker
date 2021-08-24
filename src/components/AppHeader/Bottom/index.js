import React from 'react';

import "./Bottom.css";
import Container from "../../Container";

const Bottom = (props) => {
  return (
    <Container className="HeaderBottom">
    	<button className="HeaderBottom__Tab HeaderBottom__Tab--Active">
    		Dashboard
    		<span></span>
    		<span></span>
    	</button>
    	<button className="HeaderBottom__Tab">
    		Accounts
    		<span></span>
    		<span></span>
    	</button>
    	<button className="HeaderBottom__Tab">
    		Loans
    		<span></span>
    		<span></span>
    	</button>
    	<button className="HeaderBottom__Tab">
    		Learn
    		<span></span>
    		<span></span>
    	</button>
    </Container>
  )
}

export default Bottom;