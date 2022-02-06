import React from "react";
import DashboardSummaryItem from "./DashboardSummaryItem";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { dashboardStyles } from "./styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

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
        <DashboardSummaryItem 
          title={"Total Stocks"} 
          total={total.stock} 
        />
        <DashboardSummaryItem 
          title={"Total Crypto"} 
          total={total.crypto} 
        />
      </Grid>
    </Box>
  );
}
