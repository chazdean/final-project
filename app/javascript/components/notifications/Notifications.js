import React, { useEffect, useState } from "react";
import axios from "axios";

//MUI
import { Typography, Box, FormGroup, FormControlLabel, Switch, Button } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';


//Styles
import { notificationStyles } from './styles';

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
    <Box sx={notificationStyles.box}>
      <Typography gutterBottom variant='h3' sx={notificationStyles.title}>
        <NotificationsIcon sx={notificationStyles.icon} />
        NOTIFICATIONS
      </Typography>
      <Box sx={{ml: 1.5}}>
      <FormGroup >
        <FormControlLabel
          control={
            <Switch
              checked={toggle}
              onChange={(event) => setToggle(event.target.checked)}
            />
          }
          label="Daily Email Summary"
        />
        <Button variant="contained" sx={notificationStyles.button} onClick={handleSubmit}>Save</Button>
      </FormGroup>
      </Box>
    </Box>
  );
}
