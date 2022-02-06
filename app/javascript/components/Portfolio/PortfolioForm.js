import React from 'react'
import { useState } from 'react';

//Components
import SearchBar from '../Utilities/SearchBar';
import { Paper, TextField, Button, Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function PortfolioForm() {
  const [shares, setShares] = useState(0)


  return (
    <Paper elevation={3} >
      <Box p={3}>
        <Typography variant="subtitle1" gutterBottom>Add to your portfolio:</Typography>
        <form noValidate autoComplete='off' onSubmit={(event) => event.preventDefault()} >
          <TextField
            sx={{ marginBottom: 3 }}
            label="Shares"
            variant="outlined"
            fullWidth
            color="secondary"
            placeholder='Shares'
            onChange={(event) => setShares(event.target.value)}
          />
          <SearchBar />
          <Button
            type='submit'
            color="secondary"
            variant="contained"
            endIcon={<AddIcon />}
            onClick={() => console.log("Clicked Button")}
          >
            Add
          </Button>
        </form>
      </Box>
    </Paper >




  );
}