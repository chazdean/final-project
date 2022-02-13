import * as React from 'react';

//MUI
import { Grid, Card, CardContent, Typography } from '@mui/material';

//Router
import { Link } from 'react-router-dom';

//Helpers
import { formatter } from "../../helpers/formatting";

//Styles
import { dashboardStyles } from './styles';


export default function DashboardSummaryItem(props) {

  return (
    <Grid item xs={6} md={4}>
      <Link to={props.link} style={{ textDecoration: 'none' }}>
        <Card raised={true}>
          <CardContent sx={dashboardStyles.card}>
            <Typography sx={dashboardStyles[`${props.name}Card`]} variant='h5'>{props.title}</Typography>
            <Typography sx={dashboardStyles[`${props.name}Card`]} variant='h5'>{formatter.format(props.total)}</Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}
