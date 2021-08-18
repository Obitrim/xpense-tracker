import React from 'react';
import TopBar from "../../components/TopBar";
import Banner from "../../components/Banner";
import Features from "../../components/Features";
import DeveloperFooter from "../../components/DeveloperFooter";

const AppHome = (props) => {
  return (
    <section>
    	<TopBar />
    	<Banner />
    	<Features />
    	<DeveloperFooter />
    </section>
  )
}

export default AppHome;