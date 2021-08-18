import React from 'react';

import "./Features.css"
import Container from "../Container";
import FeatureCard from "../Cards/Feature";

const Features = (props) => {
  return (
    <section className="Features">
    	<Container>
    		<h2>Why use?</h2>
    		<div className="Features__Cards">
    			<FeatureCard emoji="〽️" />
	    		<FeatureCard emoji="💵" />
	    		<FeatureCard emoji="👨‍💼" />
    		</div>
    	</Container>
    </section>
  )
}

export default Features;