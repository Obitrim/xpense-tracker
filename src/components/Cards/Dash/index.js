import React from 'react';
import BaseCard from "../BaseCard.js"
import "./Dash.css";

const Dash = (props) => {
  return (
   	<BaseCard className="DashCard">
   		<h2 className="DashCard__Title">Account Balance</h2>
   		<p className="DashCard__Value">GH$ <span>3000</span></p>
   		<p className="DashCard__Info">
   			<strong>Income:</strong> GH$3300&nbsp;-&nbsp; 
   			<strong>Expense:</strong> Gh$3000</p>
   	</BaseCard>
  )
}

export default Dash;