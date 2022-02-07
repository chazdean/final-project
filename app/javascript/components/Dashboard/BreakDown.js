import * as React from "react";
//MUI
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

//Charts
import DougnutChart from "../charts/DoughnutChart";
import PieChart from "../charts/PieChart";

export default function BreakDown(props) {
  return (
    <Grid item xs={6} md={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          {props.pieChart ? (
            <PieChart data={props.data} />
          ) : (
            <DougnutChart data={props.data} />
          )}
        </CardContent>
      </Card>
    </Grid>
  );
}
