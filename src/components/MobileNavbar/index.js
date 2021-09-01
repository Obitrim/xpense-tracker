import React from 'react';
import { NavLink } from "react-router-dom";

import "./MobileNavbar.css";

const MobileNavbar = (props) => {
  return (
   	<nav className="MobileNavbar">
   		<NavLink className="MobileNavbar__NavItem" to="/app"  activeClassName="MobileNavbar__NavItem--Active" exact>🏠</NavLink>
   		<NavLink className="MobileNavbar__NavItem" to="/app/accounts" activeClassName="MobileNavbar__NavItem--Active" >🏦</NavLink>
   		<button className="MobileNavbar__NavItem MobileNavbar__NavItem--Add">➕</button>
   		<NavLink className="MobileNavbar__NavItem" to="/app/loans" activeClassName="MobileNavbar__NavItem--Active" >💸</NavLink>
   		<NavLink className="MobileNavbar__NavItem" to="/app/learn" activeClassName="MobileNavbar__NavItem--Active" >📚</NavLink>
   	</nav>
  )
}

export default MobileNavbar;