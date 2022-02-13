import * as React from "react";
//MUI
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from 'react-router-dom';

//Charts
import DougnutChart from "../charts/DoughnutChart";
import PieChart from "../charts/PieChart";

export default function BreakDown(props) {
  return (
    <Grid item xs={6} md={4}>
      <Link to={props.link}> 
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {props.pieChart ? (
            <PieChart data={props.data} options={props.options} />
          ) : (
            <DougnutChart data={props.data} options={props.options} />
          )}
        </CardContent>
      </Card>
      </Link>
    </Grid>
  );
}
