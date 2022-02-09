import * as React from "react";

//MUI
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

//Router
import { Link } from "react-router-dom";

//Styles
import { dashboardStyles } from "./styles";

export default function watchList(props) {

  return (
    <Grid item xs={6} md={8} sx={dashboardStyles.watchList}>
      <Link to={props.link} style={{ textDecoration: "none" }}>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <h1>Watch List: {props.stockCount} Stocks, {props.cryptoCount} Crypto </h1>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
}