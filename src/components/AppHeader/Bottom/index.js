import React from 'react';
import { NavLink } from "react-router-dom";

import "./Bottom.css";
import Container from "../../Container";

const Bottom = (props) => {
  return (
    <Container className="HeaderBottom">
    	<NavLink to="/app" exact className="HeaderBottom__Tab" activeClassName="HeaderBottom__Tab--Active">
    		🏠&nbsp;Dashboard
    		<span></span>
    		<span></span>
    	</NavLink>
    	<NavLink to="/app/accounts" className="HeaderBottom__Tab" activeClassName="HeaderBottom__Tab--Active">
    		🏦&nbsp;Accounts
    		<span></span>
    		<span></span>
    	</NavLink>
    	<NavLink to="/app/loans" className="HeaderBottom__Tab" activeClassName="HeaderBottom__Tab--Active">
    		💸&nbsp;Loans
    		<span></span>
    		<span></span>
    	</NavLink>
    	<NavLink to="/app/learn" className="HeaderBottom__Tab" activeClassName="HeaderBottom__Tab--Active">
    		📚&nbsp;Learn
    		<span></span>
    		<span></span>
    	</NavLink>
        <button className="HeaderBottom__Tab HeaderBottom__Tab--AddExpense">
            ➕&nbsp;Track
            <span></span>
            <span></span>
        </button>
    </Container>
  )
}

export default Bottom;