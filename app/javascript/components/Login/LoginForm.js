import React, { useState } from 'react'

//Components
import { Box, Typography, TextField, Grid, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

//Helpers

//Styles
import { loginStyles } from "./styles";


export default function LoginForm(props) {
  const { session } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Box sx={loginStyles.box}>
      <Typography gutterBottom variant='h3' sx={loginStyles.title}>
        <PersonIcon sx={loginStyles.icon} />
        LOGIN
      </Typography>
    </Box>
  );
}