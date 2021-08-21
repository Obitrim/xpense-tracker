import React from 'react';

import "./DeveloperFooter.css";
import Container from "../Container";
import profileImg from "../../assets/images/profile.jpg";

const DeveloperFooter = (props) => {
  return (
    <footer className="DeveloperFooter">
    	<Container>
    		<div className="DeveloperFooter__Profile">
    			<div className="ImgBox">
    				<img src={profileImg} alt="developer's image" />
    			</div>
    		</div>
    		<article className="DeveloperFooter__Info">
    			<h2>Developer</h2>
    			<p>Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Deleniti, nobis.</p>
    			<p>Lorem ipsum dolor sit, amet, consectetur adipisicing elit. Deleniti, nobis. icing elit. Deleniti, nobis lorem5 </p>
    			<strong>
    				<span>Have a work for me?</span>&nbsp;
    				<a href="#" className="EmailMeBtn">Email Me</a>
    			</strong>
    			<div className="SocialMedia">
    				<a href="#">Facebook</a>&nbsp;.&nbsp;
    			    <a href="#">Twitter</a>&nbsp;.&nbsp;
    			    <a href="#">LinkedIn</a>
    			</div>
    		</article>
    	</Container>
    </footer>
  )
}

export default DeveloperFooter;