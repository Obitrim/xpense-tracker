import React from 'react';

import "./LayeredButton.css";
import PropTypes from "prop-types";

const LayeredButton = ({ text, className, ...props }) => {
  return (
    <button 
    	className={`LayeredButton ${className}`}
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