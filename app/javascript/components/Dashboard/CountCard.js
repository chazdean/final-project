import * as React from "react";

//MUI
import { Grid, Card, CardContent, Typography } from "@mui/material";

//Router
import { Link } from "react-router-dom";

//Styles
import { dashboardStyles } from "./styles";

export default function CountCard(props) {

  const { link, title, icon, stockCount, cryptoCount } = props;

  return (
    <Grid item xs={6} md={4}>
      <Link to={link} style={{ textDecoration: "none" }}>
        <Card raised={true} >
          <CardContent sx={dashboardStyles.card}>
            <Typography variant='h5'>{icon} {title}</Typography>
            <Typography variant='h6'>Stocks - {stockCount}</Typography>
            <Typography variant='h6'>Cryptocurrency - {cryptoCount}</Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}