import React from 'react'

//Components
import { Box, Typography } from '@mui/material';

//Styles
import { watchlistStyles } from "./styles"


export default function SummaryCard(props) {

  const { stockList, cryptoList } = props;

  return (
    <Box sx={watchlistStyles.summaryCard}>
      <Typography variant='h4' color='#9c27b0'>Total Watchlist - {stockList.length + cryptoList.length}</Typography>
      <Typography variant='h5' color='#ba68c8'>Stocks - {stockList.length}</Typography>
      <Typography variant='h5' color='#ba68c8'>Cryptos - {cryptoList.length}</Typography>
    </Box>
  );
}