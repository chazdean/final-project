import React, { useState } from 'react'

//Router
import { useNavigate } from "react-router-dom";

//Components
import { Box, Typography, TextField, Grid, Button, CssBaseline, Avatar, Paper, Link } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

//Styles
import loginPhoto from "../../../../public/login-photo"
import logo from "../../../../public/rocket_logo"


function Copyright() {
  return (
    <Typography variant="body2" color="rgba(0,0,0,0.71)" align="center" sx={{ mt: 5 }}>
      <Link color="inherit" href="https://github.com/chazdean/final-project">
        Github Repo
      </Link>{' '}
      <br />
      {' Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function LoginForm(props) {
  const { handleLogin } = props;

  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${loginPhoto})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 12,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#289ebf' }}>
            <PersonIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate onSubmit={(event) => event.preventDefault()} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => {
                handleLogin(email, password);
                navigate('/');
              }}
              disabled={!email && !password}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright />
            <Box
              sx={{
                height: '180px',
                width: '180px',
                mt: 5,
              }}
            >
              <img src={logo} alt="Logo" />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}