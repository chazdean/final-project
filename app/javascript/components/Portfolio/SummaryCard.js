import React from 'react'

//Components
import { Box, Typography, Divider } from '@mui/material';

//Helpers & Constants
import { totalValue, totalPercent } from '../../helpers/totals'

//Styles
import { portfolioStyles } from "./styles"


export default function SummaryCard(props) {

  const { stockList, cryptoList } = props;

  const subtotalStocks = totalValue(stockList);
  const subtotalCryptos = totalValue(cryptoList);

  const percentStocks = totalPercent(stockList);
  const percentCrypto = totalPercent(cryptoList);

  return (
    <Box sx={portfolioStyles.summaryCard}>
      <Typography variant='h4' color='#9c27b0'>TOTAL  $ {subtotalCryptos + subtotalStocks}</Typography>
      <Typography variant='h5' color='#ba68c8'>Stocks  $ {subtotalStocks} ({percentStocks}%)</Typography>
      <Typography variant='h5' color='#ba68c8'>Crypto  $ {subtotalCryptos} ({percentCrypto}%)</Typography>
    </Box>
  );
}