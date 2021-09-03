import React from 'react';
import DashCard from "../../../components/Cards/Dash";

const Dashboard = (props) => {
  return (
  	<>
  		<section className="Dashboard__Dashes">
	    	<DashCard />
	    	<DashCard />
	    	<DashCard />
	    </section>
	    {/*Graph*/}
	    {/*Accounts*/}
  	</>
  )
}

export default Dashboard;