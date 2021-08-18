import React from 'react';
import PropTypes from "prop-types";

import "./Feature.css";

const Feature = ({emoji, title, text, ...props}) => {
  return (
    <article className="Feature">
    	<div className="Feature__Icon">
    		<span>{emoji}</span>
    	</div>
    	<div className="Feature__Content">
    		<h3>{title}</h3>
    		<p>{text}</p>
    	</div>
    </article>
  )
}

Feature.propTypes = {
	emoji: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string
}

Feature.defaultProps = {
	title: "Card title",
	text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi quia ad maxime"
}

export default Feature;