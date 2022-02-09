import React from "react";
import SummaryCardList from "./SummaryCardList";
import BreakDown from "./BreakDown";
import {
  summaryData,
  portfolioData,
  stockData,
  cryptoData,
} from "./componentData";
import {sortStocks, sortCryptos} from "../helpers/sort.js"

//MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import ChartDataLabels from "chartjs-plugin-datalabels";

//Router
import { Link } from "react-router-dom";

//Charts
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

//Styles
import { dashboardStyles } from "./styles";

//Registering Charts
ChartJS.register(ArcElement, Tooltip, Legend);
//ChartJS.register(ChartDataLabels);


export default function Dashboard(props) {

  const stockList = sortStocks(portfolioItems);
  const cryptoList = sortCryptos(portfolioItems);

  const { portfolioItems } = props;
  
  return (
    <Box sx={dashboardStyles.box}>
      <h1>Dashboard</h1>
      <SummaryCardList summaryData={summaryData} link={"/portfolio"} />
      <Grid container spacing={2} sx={dashboardStyles.gridCharts}>
        <BreakDown data={portfolioData} link={"/portfolio"} pieChart={false} />
        <BreakDown data={stockData} link={"/portfolio"} pieChart={true} />
        <BreakDown data={cryptoData} link={"/portfolio"} pieChart={true} />
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={6} md={8} sx={dashboardStyles.watchList}>
          <Link to={"/watchlist"} style={{ textDecoration: "none" }}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <h1>
                  Watch List: <span>10 Stocks, 7 Crypto</span>
                </h1>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
