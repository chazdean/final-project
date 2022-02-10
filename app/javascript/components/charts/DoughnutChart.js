import React from "react";
import { Doughnut } from "react-chartjs-2"

export default function DougnutChart(props) {
  return (
     <div>
       <div>
       <Doughnut data={props.data} options={props.options} />
       </div>
     </div>
  )
}
