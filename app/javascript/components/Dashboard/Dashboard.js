import React from "react";
import DashboardSummaryItem from "./DashboardSummaryItem";
import DashboardBreakDownItem from "./DashboardBreakDownItem";
//MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

//Charts
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

//Styles
import { dashboardStyles } from "./styles";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  // will need fake data and will have to see if I can run through an array of items
  // need to make one first to see if it will work.
  // store totals in state
  // axious request to the backend
  const total = {
    investment: "$24,6798.93",
    stock: "$155,333.65",
    crypto: "$91,465.28",
  };

  const portfolioData = {
    labels: ["Stocks", "Crypto"],
    datasets: [
      {
        data: [10, 8],
        backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
        borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const stockData = {
    labels: ["NFLX", "AAPL", "TSLA", "SQ", "GOOGL", "UBER"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const cryptoData = {
    labels: ["SHIB/USD", "ETH/USD", "BTC/USD", "DOGE/USD"],
    datasets: [
      {
        label: "# of Votes",
        data: [5, 2, 10, 16],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
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
        <DashboardBreakDownItem data={portfolioData} pieChart={false} />
        <DashboardBreakDownItem data={stockData} pieChart={true} />
        <DashboardBreakDownItem data={cryptoData} pieChart={true} />
      </Grid>
    </Box>
  );
}
