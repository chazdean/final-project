import React from "react";
import SummaryCard from "./SummaryCard";
import BreakDown from "./BreakDown";

//Helpers
import { sortStocks, sortCryptos } from "../../helpers/sort";
import { totalValue, totalPercent } from "../../helpers/totals";
import { chartData } from "../../helpers/charts";

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
  const { portfolioItems } = props;

  const stockList = sortStocks(portfolioItems);
  const cryptoList = sortCryptos(portfolioItems);

  const totalPortfolioValue = totalValue(portfolioItems);
  const totalStockValue = totalValue(stockList);
  const totalCryptoValue = totalValue(cryptoList);

  const stockChartData = chartData(stockList)
  const cryptoChartData = chartData(cryptoList)


  return (
    <Box sx={dashboardStyles.box}>
      <h1>Dashboard</h1>
      <Grid container spacing={2}>
        <SummaryCard
          title={"Total Investments"}
          total={totalPortfolioValue}
          link={"/portfolio"}
        />
        <SummaryCard
          title={"Total Stocks"}
          total={totalStockValue}
          link={"/portfolio"}
        />
        <SummaryCard
          title={"Total Crypto"}
          total={totalCryptoValue}
          link={"/portfolio"}
        />
      </Grid>
      <Grid container spacing={2} sx={dashboardStyles.gridCharts}>
        {/* <BreakDown data={portfolioItems} link={"/portfolio"} pieChart={false} /> */}
        <BreakDown data={stockChartData} link={"/portfolio"} pieChart={true} />
        <BreakDown data={cryptoChartData} link={"/portfolio"} pieChart={true} />
      </Grid>
      {/* <Grid container spacing={2}>
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
      </Grid> */}
    </Box>
  );
}
