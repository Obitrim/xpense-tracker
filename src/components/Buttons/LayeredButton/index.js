import React from 'react';

import "./LayeredButton.css";
import PropTypes from "prop-types";

const LayeredButton = ({ text, ...props }) => {
  return (
    <button 
    	className="LayeredButton"
    	{...props}
    >
		<span>{text}</span>
	</button>
  )
}

LayeredButton.propTypes = {
	text: PropTypes.string
}

LayeredButton.defaultProps = {
	text: "Button"
}

export default LayeredButton;