import React from "react";
import SummaryCardList from "./SummaryCardList";
import DashboardBreakDownItem from "./DashboardBreakDownItem";
//MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  summaryData,
  portfolioData,
  stockData,
  cryptoData,
} from "./componentData";

//Charts
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

//Styles
import { dashboardStyles } from "./styles";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.register(ChartDataLabels);

export default function Dashboard() {
  return (
    <Box sx={dashboardStyles.box}>
      <SummaryCardList summaryData={summaryData} />
      <Grid container spacing={2} sx={dashboardStyles.gridCharts}>
        <DashboardBreakDownItem data={portfolioData} pieChart={false} />
        <DashboardBreakDownItem data={stockData} pieChart={true} />
        <DashboardBreakDownItem data={cryptoData} pieChart={true} />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8} sx={dashboardStyles.watchList}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <h1>
                Watch List: <span>10 Stocks, 7 Crypto</span>
              </h1>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
