import React from "react";
import { Doughnut } from "react-chartjs-2"

const data = {
  labels: ["Stocks", "Crypto"], 
  datasets: [{
    data: [10, 8], 
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
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
