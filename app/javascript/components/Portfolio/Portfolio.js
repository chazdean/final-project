import React from 'react'

//Components
import PortfolioForm from './PortfolioForm';
import PortfolioList from './PortfolioList';
import SummaryCard from './SummaryCard';
import { Box, Typography, Paper } from '@mui/material';
import ShowChartIcon from '@mui/icons-material/ShowChart';

//Constants
import { sortStocks, sortCryptos } from '../../helpers/sort'
import { assets } from '../../constants/assetsArray'  //remove once database call is working

//Styles
import { portfolioStyles } from "./styles"


export default function Portfolio(props) {

  const { portfolioItems, addPortfolioItem, updatePortfolioItem, deleteItem } = props;

  const stockList = sortStocks(portfolioItems);
  const cryptoList = sortCryptos(portfolioItems);

  return (
    <Box sx={portfolioStyles.box}>

      <Typography gutterBottom variant='h3' sx={portfolioStyles.title}>
        <ShowChartIcon sx={portfolioStyles.icon} />
        Portfolio
      </Typography>

      <Box>
        <Paper elevation={3} sx={portfolioStyles.headPaper}>
          <SummaryCard
            stockList={stockList}
            cryptoList={cryptoList}
          />
          <PortfolioForm
            assetsList={assets}
            addPortfolioItem={addPortfolioItem}
          />
        </Paper>
      </Box>

      <Box mt={8}>
        <Typography color="secondary" variant="subtitle1" mb={2}>Stocks</Typography>
        <PortfolioList
          data={stockList}
          deleteItem={deleteItem}
          updatePortfolioItem={updatePortfolioItem}
        />
      </Box>

      <Box mt={8}>
        <Typography color="secondary" variant="subtitle1" mb={2}>Cryptocurrency</Typography>
        <PortfolioList
          data={cryptoList}
          deleteItem={deleteItem}
          updatePortfolioItem={updatePortfolioItem}
        />
      </Box>

    </Box>
  );
}