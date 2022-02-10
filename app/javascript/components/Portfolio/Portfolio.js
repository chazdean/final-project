import React, { useEffect, useState } from 'react'

//Components
import PortfolioForm from './PortfolioForm';
import PortfolioList from './PortfolioList';
import { Container, Box, Typography } from '@mui/material';

//Helpers
import { sortStocks, sortCryptos } from '../../helpers/sort'
import { totalValue, totalPercent } from '../../helpers/totals'

import { assets } from '../../constants/assetsArray'  //remove once database call is working


export default function Portfolio(props) {

  const { portfolioItems, addPortfolioItem, deleteItem } = props;

  const stockList = sortStocks(portfolioItems);
  const cryptoList = sortCryptos(portfolioItems);

  const subtotalStocks = totalValue(stockList);
  const subtotalCryptos = totalValue(cryptoList);

  const percentStocks = totalPercent(stockList);
  const percentCryptos = totalPercent(cryptoList);

  return (
    <Container>
      <Box>
        <PortfolioForm
          assetsList={assets}
          addPortfolioItem={addPortfolioItem}
        />
      </Box>

      <Box mt={10}>
        <PortfolioList
          data={stockList}
          deleteItem={deleteItem}
        />
      </Box>

      <Box mt={10}>
        <PortfolioList
          data={cryptoList}
          deleteItem={deleteItem}
        />
      </Box>
      <Typography>Stock Value{subtotalStocks}</Typography>
      <Typography>Crypto Value{subtotalCryptos}</Typography>
      <Typography>Portfolio Total{subtotalStocks + subtotalCryptos}</Typography>
      <Typography>Stock Percent{percentStocks}</Typography>
      <Typography>Crypto Percent{percentCryptos}</Typography>
    </Container>
  );
}