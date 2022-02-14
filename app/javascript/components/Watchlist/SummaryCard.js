import React from 'react'

//Components
import { Box, Typography } from '@mui/material';

//Styles
import { watchlistStyles } from "./styles"


export default function SummaryCard(props) {

  const { stockList, cryptoList } = props;

  return (
    <Box sx={watchlistStyles.summaryCard}>
      <Typography variant='h4'>Watchlist - {stockList.length + cryptoList.length}</Typography>
      <Typography variant='h6'>Stocks - {stockList.length}</Typography>
      <Typography variant='h6'>Cryptocurrency - {cryptoList.length}</Typography>
    </Box>
  );
}