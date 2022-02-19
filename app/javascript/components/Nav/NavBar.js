import React from "react";

//MUI
import {Drawer, List, Divider, ListItem} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

//Router
import { useNavigate, useLocation } from "react-router-dom";

//Styles
import { navStyles } from "./styles.js"

//Logo
import logo from "/public/rocket_logo"

//Navbar options
import { navbarOptions } from "./constants/navbarOptions";

export default function NavBar() {
  const { pathname } = useLocation()
  const navigate = useNavigate();
 
  return (
    <Drawer
      sx={navStyles.drawer}
      variant="permanent"
      anchor="left"
    >
      <img src={logo} alt="Logo" />
      <Divider />
      <List>
        {navbarOptions.map((option, index) => (
          <ListItem 
            sx={navStyles.listItem}
            button 
            key={option.id}
            onClick={() => navigate(option.route)}
            selected={option.route === pathname}
          >
            <ListItemIcon sx={{color:"white"}}>{option.icon} </ListItemIcon>
            <ListItemText primary={option.label} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}