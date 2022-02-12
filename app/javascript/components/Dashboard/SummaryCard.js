import * as React from 'react';

//MUI
import {Grid, Card, CardContent} from '@mui/material';

//Router
import { Link } from 'react-router-dom';

//Helpers
import { formatter } from "../../helpers/formatting";


export default function DashboardSummaryItem(props) {
  
  return (
    <Grid item xs={6} md={4}>
      <Link to={props.link} style={{ textDecoration: 'none' }}> 
      <Card variant="outlined">
        <CardContent>
          <h1>{props.title}</h1>
          <h2>{formatter.format(props.total)}</h2>
        </CardContent>
      </Card>
      </Link>
    </Grid>
  );
}
