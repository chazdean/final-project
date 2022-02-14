import React, { useEffect, useState } from "react";
import { FormGroup, FormControlLabel, Switch, Button } from "@mui/material";
import axios from "axios";

export default function Notifications() {
  const [userData, setUserData] = useState({});
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    axios.get(`http://localhost:3000/api/notifications/`).then((data) => {
      setUserData(data.data[0]);
      setToggle(data.data[0].email_notifications)
    });
  }, []);

  
  const handleSubmit = () => {
    const params = {
      email_notifications: toggle
    }
    return axios
      .patch(`http://localhost:3000/api/notifications/1`, { params })
      .then(() => {
        setUserData((prev) => ({ ...prev, email_notifications: params.email_notifications }))
      });
  };


  return (
      <FormGroup sx={{ ml: 30 }}>
        <FormControlLabel
          control={
            <Switch
              checked={toggle}
              onChange={(event) => setToggle(event.target.checked)}
            />
          }
          label="Notifications"
        />
        <FormControlLabel disabled control={<Switch />} label="Disabled" />
        <Button onClick={handleSubmit}>Save</Button>
      </FormGroup>
  );
}
