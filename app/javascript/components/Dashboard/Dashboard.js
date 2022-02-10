import React from "react";

//Components
import SummaryCard from "./SummaryCard";
import BreakDown from "./BreakDown";
import WatchList from "./WatchList";

//Helpers
import { sortStocks, sortCryptos } from "../../helpers/sort";
import { totalValue, totalPercent } from "../../helpers/totals";
import { assetChartData, totalPercentChartData } from "../../helpers/charts";

//MUI
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

//Charts
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

//Styles
import { dashboardStyles } from "./styles";

//Registering Charts
ChartJS.register(ArcElement, Tooltip, Legend);


export default function Dashboard(props) {

  const { portfolioItems } = props;

  const stockList = sortStocks(portfolioItems);
  const cryptoList = sortCryptos(portfolioItems);


  const totalPortfolioValue = totalValue(portfolioItems);
  const totalStockValue = totalValue(stockList);
  const totalCryptoValue = totalValue(cryptoList);

  const totalStockPercent = totalPercent(stockList);
  const totalCryptoPercent = totalPercent(stockList);


  const portfolioStockPercentage = totalStockValue/totalPortfolioValue * 100
  const portfolioCryptoPercentage = totalCryptoValue/totalPortfolioValue * 100

  const portfolioChartData = totalPercentChartData(portfolioStockPercentage, portfolioCryptoPercentage);
  const stockChartData = assetChartData(stockList);
  const cryptoChartData = assetChartData(cryptoList);

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
        <BreakDown 
          data={portfolioChartData} 
          link={"/portfolio"} 
          pieChart={false} 
        />
        <BreakDown 
          data={stockChartData} 
          link={"/portfolio"} 
          pieChart={true} 
        />
        <BreakDown 
          data={cryptoChartData} 
          link={"/portfolio"} 
          pieChart={true} 
        />
      </Grid>
      <Grid container spacing={2}>
        <WatchList 
          stockCount={stockList.length}
          cryptoCount={cryptoList.length}
          link={"/watchlist"}
        />
      </Grid>
    </Box>
  );
}
