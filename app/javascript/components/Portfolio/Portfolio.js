import React, { useEffect, useState } from 'react'

//Components
import PortfolioForm from './PortfolioForm';
import { Container } from '@mui/material';
import { assets } from '../../constants/assetsArray'  //remove once database call is working


export default function Portfolio() {
  const [pageData, setPageData] = useState({
    allAssets: assets
  })

  useEffect(() => {
    //eventually Promise.all axios calls for all assets list and all portfolio items for the active user

  }, [])

  return (
    <Container>
      <PortfolioForm
        assetsList={pageData.allAssets}
      />
    </Container>
  );
}