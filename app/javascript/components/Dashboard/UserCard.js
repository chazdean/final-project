import * as React from 'react';

//MUI
import { Grid, Card, CardContent, Typography } from "@mui/material";

//Styles
import { dashboardStyles } from "./styles";

export default function UserCard(props) {

  const { userName, icon } = props;
  const today = new Date();
  const displayToday = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


  return (
    <Grid item xs={6} md={4}>
      <Card raised={true} >
        <CardContent sx={dashboardStyles.card}>
          <Typography variant='h5'>{icon} Logged in:</Typography>
          <Typography variant='h6'>{userName}</Typography>
          <Typography variant='h6'>Date: {displayToday}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}