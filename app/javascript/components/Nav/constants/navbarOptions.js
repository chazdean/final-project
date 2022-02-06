import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';

export const navbarOptions = [
{
  id: 1,
  icon: <DashboardIcon />,
  label: 'Dashboard', 
  route: 'dashboard'
}, 
{
  id: 2,
  icon: <ShowChartIcon />,
  label: 'Portfolio', 
  route: 'portfolio'
}, 
{
  id: 3,
  icon: <VisibilityIcon />,
  label: 'Watchlist', 
  route: 'watchlist'
}, 
{
  id: 4,
  icon: <NotificationsIcon />,
  label: 'Notifications', 
  route: 'notifications'
},
{
  id: 5,
  icon: <LogoutIcon />,
  label: 'Logout', 
  route: 'logout'
}
]