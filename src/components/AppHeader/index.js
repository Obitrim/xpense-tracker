import React from 'react';

import "./AppHeader.css";
import HeaderTop from "./Top";
import HeaderBottom from "./Bottom";

const AppHeader = (props) => {
  return (
    <header className="AppHeader">
    	<HeaderTop />
    	<HeaderBottom />
    </header>
  )
}

export default AppHeader;