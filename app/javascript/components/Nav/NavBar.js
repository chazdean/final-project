import React from "react";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { navStyles } from "./styles.js"
import logo from "/public/astronaut_logo"


import { navbarOptions } from "./constants/navbarOptions";

export default function NavBar() {

  const navigate = useNavigate();
  const drawerWidth = 220;
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
            button 
            key={option.id}
            onClick={() => navigate(option.route)}
          >
            <ListItemIcon>{option.icon}</ListItemIcon>
            <ListItemText primary={option.label} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}
