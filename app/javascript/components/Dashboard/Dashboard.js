import React from "react";
import DashboardSummaryItem from "./DashboardSummaryItem";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { dashboardStyles } from "./styles";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import DougnutChart from "../charts/DoughnutChart";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import PieChart from "../charts/PieChart";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  // will need fake data and will have to see if I can run through an array of items
  // need to make one first to see if it will work.
  // store totals in state
  // axious request to the backend
  const total = {
    investment: "24,6798.93",
    stock: "155,333.65",
    crypto: "91,465.28",
  };

  return (
    <Box sx={dashboardStyles.box}>
      <Grid container spacing={2}>
        <DashboardSummaryItem
          title={"Total Investments"}
          total={total.investment}
        />
        <DashboardSummaryItem title={"Total Stocks"} total={total.stock} />
        <DashboardSummaryItem title={"Total Crypto"} total={total.crypto} />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <DougnutChart />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={4}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <PieChart />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
