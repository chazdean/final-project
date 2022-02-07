import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

export default function DashboardSummaryItem(props) {
  
  return (
    <Grid item xs={6} md={4}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <h1>{props.title}</h1>
          <h2>{props.total}</h2>
        </CardContent>
      </Card>
    </Grid>
  );
}
