import React, { useEffect, useRef } from 'react';
// import {Chart} from "chart.js";

import BaseCard from "../Cards/BaseCard";

const canvasStyles = {
	width: "100%",
	backgroundColor: "white",
	borderRadius: "var(--b-radius)"
}

const GraphCanvas = (props) => {
	const canvas = useRef(null);

	// useEffect(() => {
	// 	new Chart(canvas.current, {
	// 	    type: 'bar',
	// 	    data: {
	// 	        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	// 	        datasets: [{
	// 	            label: '# of Votes',
	// 	            data: [12, 19, 3, 5, 2, 3],
	// 	            backgroundColor: [
	// 	                'rgba(255, 99, 132, 0.2)',
	// 	                'rgba(54, 162, 235, 0.2)',
	// 	                'rgba(255, 206, 86, 0.2)',
	// 	                'rgba(75, 192, 192, 0.2)',
	// 	                'rgba(153, 102, 255, 0.2)',
	// 	                'rgba(255, 159, 64, 0.2)'
	// 	            ],
	// 	            borderColor: [
	// 	                'rgba(255, 99, 132, 1)',
	// 	                'rgba(54, 162, 235, 1)',
	// 	                'rgba(255, 206, 86, 1)',
	// 	                'rgba(75, 192, 192, 1)',
	// 	                'rgba(153, 102, 255, 1)',
	// 	                'rgba(255, 159, 64, 1)'
	// 	            ],
	// 	            borderWidth: 1
	// 	        }]
	// 	    },
	// 	    options: {
	// 	        scales: {
	// 	            y: {
	// 	                beginAtZero: true
	// 	            }
	// 	        }
	// 	    }
	// })
	// }, []);

	return (
		<BaseCard>
			<canvas style={canvasStyles} ref={canvas}></canvas>
		</BaseCard>
	)
}

export default GraphCanvas;