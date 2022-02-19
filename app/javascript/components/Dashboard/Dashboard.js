import React from "react";

//Components
import SummaryCard from "./SummaryCard";
import BreakDown from "./BreakDown";
import CountCard from "./CountCard";
import UserCard from "./UserCard";

//Helpers
import { sortStocks, sortCryptos } from "../../helpers/sort";
import { totalValue, percentOfAsset } from "../../helpers/totals";
import { stockChartData, cryptoChartData, totalPercentChartData, chartOptions } from "../charts/helpers/chartsData";

//MUI
import { Box, Grid, Typography } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import PersonIcon from '@mui/icons-material/Person';

//Charts
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

//Styles
import { dashboardStyles } from "./styles";

//Registering Charts
ChartJS.register(ArcElement, Tooltip, Legend);


export default function Dashboard(props) {

  const { portfolioItems, watchlistItems } = props;

  //List of Assets
  const stockList = sortStocks(portfolioItems);
  const cryptoList = sortCryptos(portfolioItems);
  const watchStockList = sortStocks(watchlistItems);
  const watchCryptoList = sortCryptos(watchlistItems);

  // Total Value for Top Totals
  const totalPortfolioValue = totalValue(portfolioItems);
  const totalStockValue = totalValue(stockList);
  const totalCryptoValue = totalValue(cryptoList);

  //Percent of that Asset
  const totalCryptoPercent = percentOfAsset(cryptoList, totalCryptoValue);
  const totalStockPercent = percentOfAsset(stockList, totalStockValue)

  // Percent of Stock vs Crypto for whole portfolio
  const portfolioStockPercentage = Math.round(totalStockValue / totalPortfolioValue * 100)
  const portfolioCryptoPercentage = Math.round(totalCryptoValue / totalPortfolioValue * 100)

  // Chart Data
  const portfolioChartData = totalPercentChartData(portfolioStockPercentage, portfolioCryptoPercentage);
  const stockChart = stockChartData(stockList, totalStockPercent);
  const cryptoChart = cryptoChartData(cryptoList, totalCryptoPercent);

  //Chart Options
  const portfolioChartOptions = chartOptions(portfolioChartData)
  const stockChartOptions = chartOptions(stockChart)
  const cryptoChartOptions = chartOptions(cryptoChart)


  return (
    <Box sx={dashboardStyles.box}>
      <Typography gutterBottom variant='h3' sx={dashboardStyles.title}>
        <DashboardIcon sx={dashboardStyles.icon} />
        DASHBOARD
      </Typography>

      <Grid container spacing={3} sx={dashboardStyles.gridBox}>
        <UserCard
          userName={"Bob Bobberton"}
          icon={<PersonIcon />}
        />
        <CountCard
          title={"Portfolio Assets"}
          stockCount={stockList.length}
          cryptoCount={cryptoList.length}
          link={"/portfolio"}
          icon={<ShowChartIcon />}
        />
        <CountCard
          title={"Watchlist Assets"}
          stockCount={watchStockList.length}
          cryptoCount={watchCryptoList.length}
          link={"/watchlist"}
          icon={<VisibilityIcon />}
        />
      </Grid>

      <Grid container spacing={3}>
        <SummaryCard
          title={"Total Investments"}
          total={totalPortfolioValue}
          link={"/portfolio"}
          name={"investments"}
        />
        <SummaryCard
          title={"Total Stocks"}
          total={totalStockValue}
          link={"/portfolio"}
          name={"stocks"}
        />
        <SummaryCard
          title={"Total Cryptocurrency"}
          total={totalCryptoValue}
          link={"/portfolio"}
          name={"crypto"}
        />
      </Grid>
      <Grid container spacing={3} sx={dashboardStyles.gridBox}>
        <BreakDown
          data={portfolioChartData}
          options={portfolioChartOptions}
          link={"/portfolio"}
          pieChart={false}
        />
        <BreakDown
          data={stockChart}
          options={stockChartOptions}
          link={"/portfolio"}
          pieChart={true}
        />
        <BreakDown
          data={cryptoChart}
          options={cryptoChartOptions}
          link={"/portfolio"}
          pieChart={true}
        />
      </Grid>
    </Box>
  );
}
