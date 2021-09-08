import React from 'react';
import PropTypes from "prop-types";

import "./BaseCard.css";

const Card = ({children, radius, className, flat, ...props}) => {
  return (
    <article 
    	className={`BaseCard ${flat && "BaseCard--Flat"} ${className}`}
    	style={{
    		borderRadius: radius
    	}}
    >{children}</article>
  )
}

Card.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
	className: PropTypes.string,
	flat: PropTypes.bool,
	radius: PropTypes.string
}

Card.defaultProps = {
	className: "",
	flat: false,
	radius: "5px"
}

export default Card;