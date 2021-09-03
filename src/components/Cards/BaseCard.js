import React from 'react';
import PropTypes from "prop-types";

import "./BaseCard.css";

const Card = ({children, className, flat, ...props}) => {
  return (
    <article className={`BaseCard ${flat && "BaseCard--Flat"} ${className}`}>{children}</article>
  )
}

Card.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
	className: PropTypes.string,
	flat: PropTypes.bool
}

Card.defaultProps = {
	className: "",
	flat: false
}

export default Card;