import React from "react";
import SummaryCard from "./SummaryCard";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';


  export default function SummaryCardList(props) {
    console.log(props.summaryData)
    const summaryDataArray = props.summaryData.map((asset) =>{
      return (
        <SummaryCard
          key={asset.title}
          title={asset.title}
          total={asset.total}
        />
      );
    });
  
    return (
      <Grid container spacing={2}>
      {summaryDataArray}
      </Grid>
  
    );
  };