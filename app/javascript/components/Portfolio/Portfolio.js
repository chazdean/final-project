import React from 'react'

//Components
import PortfolioForm from './PortfolioForm';
import PortfolioList from './PortfolioList';
import SummaryCard from './SummaryCard';
import { Box, Typography, Paper } from '@mui/material';
import ShowChartIcon from '@mui/icons-material/ShowChart';

//Constants
import { sortStocks, sortCryptos } from '../../helpers/sort'

//Styles
import { portfolioStyles } from "./styles"


export default function Portfolio(props) {

  const { assetsList, portfolioItems, addPortfolioItem, updatePortfolioItem, deleteItem } = props;

  const stockList = sortStocks(portfolioItems);
  const cryptoList = sortCryptos(portfolioItems);

  return (
    <Box sx={portfolioStyles.box}>

      <Typography gutterBottom variant='h3' sx={portfolioStyles.title}>
        <ShowChartIcon sx={portfolioStyles.icon} />
        PORTFOLIO
      </Typography>

      <Box>
        <Paper elevation={3} sx={portfolioStyles.headPaper}>
          <SummaryCard
            stockList={stockList}
            cryptoList={cryptoList}
          />
          <PortfolioForm
            assetsList={assetsList}
            addPortfolioItem={addPortfolioItem}
          />
        </Paper>
      </Box>

      <Box mt={6}>
        <Typography variant="h6" mb={2}>Stocks</Typography>
        <PortfolioList
          data={stockList}
          deleteItem={deleteItem}
          updatePortfolioItem={updatePortfolioItem}
        />
      </Box>

      <Box mt={6} mb={6}>
        <Typography variant="h6" mb={2}>Cryptocurrency</Typography>
        <PortfolioList
          data={cryptoList}
          deleteItem={deleteItem}
          updatePortfolioItem={updatePortfolioItem}
        />
      </Box>

    </Box>
  );
}