import React from "react";
import { Doughnut } from "react-chartjs-2"

const data = {
  labels: ["Stocks", "Crypto"], 
  datasets: [{
    data: [10, 8], 
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
    ],
    borderWidth: 1,
  }]
}
export default function DougnutChart() {
  
  return (
     <div>
       <h1>Portfolio Breakdown</h1>
       <div>
       <Doughnut data={data} />
       </div>
     </div>
  )
}
