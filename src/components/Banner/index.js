import React from 'react';

import "./Banner.css";
import Container from "../Container";
import LayeredButton from "../Buttons/LayeredButton";
import chartImg from "../../assets/images/mobile-finance.png";

const Banner = (props) => {
  return (
    <section className="Banner">
    	<Container>
    		<article className="Banner__Info">
    			<h1>Know and Track</h1>
    			<h2>Your spending habit</h2>
    			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolore provident iure repellat magnam consequatur.</p>
    			<LayeredButton 
                    type="button" 
                    text="Start Tracking" 
                    className="LayeredButton--lg" 
                />
    		</article>
    		<div className="Banner__ChartWrapper">
    			<img src={chartImg} className="Banner__ChartWrapper__Img" alt="3d charts on mobile mockup" />
    		</div>
    	</Container>
    </section>
  )
}

export default Banner;