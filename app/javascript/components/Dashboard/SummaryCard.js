import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import { formatter } from "../../helpers/formatting";


export default function DashboardSummaryItem(props) {
  
  console.log(formatter.format(2500)); /* $2,500.00 */
  return (
    <Grid item xs={6} md={4}>
      <Link to={props.link} style={{ textDecoration: 'none' }}> 
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <h1>{props.title}</h1>
          <h2>{formatter.format(props.total)}</h2>
        </CardContent>
      </Card>
      </Link>
    </Grid>
  );
}
