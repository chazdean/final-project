import React, { useEffect, useState } from 'react'
import axios from 'axios';

//Components
import PortfolioForm from './PortfolioForm';
import PortfolioList from './PortfolioList';
import { Container, Box } from '@mui/material';

//Test Data - to be deleted later
import { assets } from '../../constants/assetsArray'  //remove once database call is working
const stocksList = [
  {
    id: 1,
    user_id: 1,
    asset_id: 2,
    symbol: "AMZN",
    long_name: "Amazon.com Inc",
    category: "Common Stock",
    shares: 10,
    price: 100.00,
    total_value: 1000,
    percent: 36
  },
  {
    id: 2,
    user_id: 1,
    asset_id: 3,
    symbol: "DOCU",
    long_name: "Docusign",
    category: "Common Stock",
    shares: 5,
    price: 65.00,
    total_value: 325,
    percent: 12
  },
  {
    id: 3,
    user_id: 1,
    asset_id: 5,
    symbol: "MSFT",
    long_name: "Microsoft Corporation",
    category: "Common Stock",
    shares: 17,
    price: 235.00,
    total_value: 3995,
    percent: 58
  }
];
const cryptoList = [
  {
    id: 4,
    user_id: 1,
    asset_id: 22,
    symbol: "BTC/USD",
    long_name: "Bitcoin",
    category: "Cryptocurrency",
    shares: 2,
    price: 42000,
    total_value: 84000,
    percent: 45
  },
  {
    id: 5,
    user_id: 1,
    asset_id: 23,
    symbol: "ETH/USD",
    long_name: "Ethereum",
    category: "Cryptocurrency",
    shares: 8,
    price: 3500,
    total_value: 28000,
    percent: 17
  },
  {
    id: 6,
    user_id: 1,
    asset_id: 29,
    symbol: "DOGE/USD",
    long_name: "Doge Coin",
    category: "Cryptocurrency",
    shares: 1438,
    price: 0.78,
    total_value: 1122,
    percent: 7
  }
];


export default function Portfolio() {
  const [pageData, setPageData] = useState({
    allAssets: assets,
    stocksList: stocksList,
    cryptoList: cryptoList
  })

  useEffect(() => {
    //eventually Promise.all axios calls for all assets list and all portfolio items for the active user

  }, [])

  return (
    <Container>
      <Box>
        <PortfolioForm
          assetsList={pageData.allAssets}
        />
      </Box>

      <Box mt={10}>
        <PortfolioList
          data={pageData.stocksList}
        />
      </Box>

      <Box mt={10}>
        <PortfolioList
          data={pageData.cryptoList}
        />
      </Box>
    </Container>
  );
}