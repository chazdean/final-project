import React from "react";
import { FormGroup, FormControlLabel, Switch } from "@mui/material";


export default function Notifications() {
  
  return (

    <FormGroup>
    <FormControlLabel control={<Switch defaultChecked />} label="Notifications" />
    <FormControlLabel disabled control={<Switch />} label="Disabled" />
  </FormGroup>
  );
}
