import React from "react";
import SummaryCard from "./SummaryCard";
import Grid from "@mui/material/Grid";

export default function SummaryCardList(props) {
  const summaryDataArray = props.summaryData.map((asset) => {
    return (
      <SummaryCard key={asset.title} title={asset.title} total={asset.total} />
    );
  });

  return (
    <Grid container spacing={2}>
      {summaryDataArray}
    </Grid>
  );
}
