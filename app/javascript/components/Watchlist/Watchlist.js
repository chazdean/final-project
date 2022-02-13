import React from 'react'

//Components
import SummaryCard from './SummaryCard';
import WatchlistForm from './WatchlistForm'
import WatchlistList from './WatchlistList'
import { Box, Typography, Paper } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

//Constants & Helpers
import { sortStocks, sortCryptos } from '../../helpers/sort'
import { assets } from '../../constants/assetsArray'  //remove once database call is working

//Styles
import { watchlistStyles } from "./styles"


export default function Watchlist(props) {

  const { watchlistItems, addWatchlistItem, deleteItem } = props;

  const stockList = sortStocks(watchlistItems);
  const cryptoList = sortCryptos(watchlistItems);

  return (
    <Box sx={watchlistStyles.box}>

      <Typography gutterBottom variant='h3' sx={watchlistStyles.title}>
        <VisibilityIcon sx={watchlistStyles.icon} />
        WATCHLIST
      </Typography>

      <Box>
        <Paper elevation={3} sx={watchlistStyles.headPaper}>
          <SummaryCard
            stockList={stockList}
            cryptoList={cryptoList}
          />
          <WatchlistForm
            assetsList={assets}
            addWatchlistItem={addWatchlistItem}
          />
        </Paper>
      </Box>

      <Box mt={8}>
        <Typography color="secondary" variant="subtitle1" mb={2}>Stocks</Typography>
        <WatchlistList
          data={stockList}
          deleteItem={deleteItem}
        />
      </Box>

      <Box mt={8}>
        <Typography color="secondary" variant="subtitle1" mb={2}>Cryptocurrency</Typography>
        <WatchlistList
          data={cryptoList}
          deleteItem={deleteItem}
        />
      </Box>

    </Box>
  );
}