import React from 'react';
import Graph from "../../../components/GraphCanvas";
import DashCard from "../../../components/Cards/Dash";
import BaseCard from "../../../components/Cards/BaseCard";

import "./Dashboard.css";

const Dashboard = (props) => {
  return (
  	<>
  		<h1 className="Dashboard__Title">Dashboard</h1>
  		<section className="Dashboard__Section Dashboard__Dashes">
	    	<DashCard />
	    	<DashCard />
	    	<DashCard />
	    </section>
	    {/*Graph*/}
  		<h1 className="Dashboard__Title">Statistics</h1>
  		<div className="Dashboard__FilterBar">
  			<button className="Active">Today</button>
  			<button>Weekly</button>
  			<button>Monthly</button>
  			<button>Yearly</button>
  		</div>
	    <section className="Dashboard__Section Dashboard__Stats">
	    	<Graph />
	    	<Graph />
	    </section>
	    {/*Transactions*/}
  		<h1 className="Dashboard__Title">Transactions</h1>
  		<BaseCard className="Dashboard__Section TableResponsive">
  			<table>
	  			<thead>
	  				<tr>
	  					<th>header</th>
	  					<th>header</th>
	  					<th>header</th>
	  					<th>header</th>
	  					<th>header</th>
	  				</tr>
	  			</thead>
	  			<tbody>
	  				<tr>
	  					<td>data</td>
	  					<td>data</td>
	  					<td>data</td>
	  					<td>data</td>
	  					<td>data</td>
	  				</tr>
	  				<tr>
	  					<td>data</td>
	  					<td>data</td>
	  					<td>data</td>
	  					<td>data</td>
	  					<td>data</td>
	  				</tr>
	  				<tr>
	  					<td>data</td>
	  					<td>data</td>
	  					<td>data</td>
	  					<td>data</td>
	  					<td>data</td>
	  				</tr>
	  				<tr>
	  					<td>data</td>
	  					<td>data</td>
	  					<td>data</td>
	  					<td>data</td>
	  					<td>data</td>
	  				</tr>
	  				<tr>
	  					<td>data</td>
	  					<td>data</td>
	  					<td>data</td>
	  					<td>data</td>
	  					<td>data</td>
	  				</tr>
	  				<tr>
	  					<td>data</td>
	  					<td>data</td>
	  					<td>data</td>
	  					<td>data</td>
	  					<td>data</td>
	  				</tr>
	  				<tr>
	  					<td>data</td>
	  					<td>data</td>
	  					<td>data</td>
	  					<td>data</td>
	  					<td>data</td>
	  				</tr>
	  			</tbody>
	  		</table>
  		</BaseCard>
  	</>
  )
}

export default Dashboard;