import React from "react";

//Components
import SummaryCard from "./SummaryCard";
import BreakDown from "./BreakDown";
import WatchList from "./WatchList";

//Helpers
import { sortStocks, sortCryptos } from "../../helpers/sort";
import { totalValue, totalPercent, percentOfAsset } from "../../helpers/totals";
import { assetChartData, totalPercentChartData, chartOptions } from "../../helpers/charts";

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

  //List of Assets
  const stockList = sortStocks(portfolioItems);
  const cryptoList = sortCryptos(portfolioItems);

  // Total Value for Top Totals
  const totalPortfolioValue = totalValue(portfolioItems);
  const totalStockValue = totalValue(stockList);
  const totalCryptoValue = totalValue(cryptoList);

  //Percent of that Asset
  const totalCryptoPercent = percentOfAsset(cryptoList, totalCryptoValue);
  const totalStockPercent = percentOfAsset(stockList, totalStockValue)

  // Percent of Stock vs Crypto for whole portfolio
  const portfolioStockPercentage = Math.round(totalStockValue/totalPortfolioValue * 100)
  const portfolioCryptoPercentage = Math.round(totalCryptoValue/totalPortfolioValue * 100)

  // Chart Data
  const portfolioChartData = totalPercentChartData(portfolioStockPercentage, portfolioCryptoPercentage);
  const stockChartData = assetChartData(stockList, totalStockPercent);
  const cryptoChartData = assetChartData(cryptoList, totalCryptoPercent);

  //Chart Options
  const portfolioChartOptions = chartOptions(portfolioChartData)
  const stockChartOptions = chartOptions(stockChartData)
  const cryptoChartOptions = chartOptions(cryptoChartData)

  
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
          options={portfolioChartOptions}
          link={"/portfolio"} 
          pieChart={false} 
        />
        <BreakDown 
          data={stockChartData}
          options={stockChartOptions} 
          link={"/portfolio"} 
          pieChart={true} 
        />
        <BreakDown 
          data={cryptoChartData}
          options={cryptoChartOptions}
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
