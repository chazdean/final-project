import React from 'react'

//Components
import { Box, Typography, Divider } from '@mui/material';

//Helpers & Constants
import { totalValue, totalPercent } from '../../helpers/totals'
import { formatter } from '../../helpers/formatting'

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
      <Typography variant='h4'>TOTAL {formatter.format(subtotalCryptos + subtotalStocks)}</Typography>

      <Typography variant='h6'>Stocks ({Math.round(percentStocks * 100) / 100}%) <br />{formatter.format(subtotalStocks)}</Typography>

      <Typography variant='h6'>Cryptocurrency ({Math.round(percentCrypto * 100) / 100}%) <br />{formatter.format(subtotalCryptos)}</Typography>
    </Box>
  );
}