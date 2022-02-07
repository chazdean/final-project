import React, { useState } from 'react'

//Components
import SearchBar from '../Utilities/SearchBar';
import { Paper, TextField, Button, Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';


export default function PortfolioForm(props) {
  const { assetsList } = props;

  const [shares, setShares] = useState('');
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event, newInputValue) => {
    setSearchValue(newInputValue)
  }

  const handleSelection = (event, newSelection) => {
    setSelectedAsset(newSelection);
  }

  const handleSubmit = () => {
    console.log(`added new portfolio item assetID:${selectedAsset.id}, shares:${shares}`)
    setShares(() => '')
    setSelectedAsset(() => null)
    setSearchValue(() => '')
    // onAdd(shares, selectedAsset)
    // might need to clear the form? or refresh the page from the portfolio component
  }


  return (
    <Paper elevation={3} >
      <Box p={3}>
        <Typography variant="subtitle1" mb={2}>Add to your portfolio:</Typography>

        <form noValidate autoComplete='off' onSubmit={(event) => event.preventDefault()} >
          <TextField
            sx={{ marginBottom: 3 }}
            label="Shares"
            variant="outlined"
            fullWidth
            color="secondary"
            placeholder='Shares'
            onChange={(event) => setShares(event.target.value)}
            value={shares}
          />
          <SearchBar
            searchValue={searchValue}
            handleSearch={handleSearch}
            selectedAsset={selectedAsset}
            handleSelection={handleSelection}
            assetsList={assetsList}
          />
          <Button
            type='submit'
            color="secondary"
            variant="contained"
            endIcon={<AddIcon />}
            onClick={handleSubmit}
          >
            Add
          </Button>
        </form>
      </Box>
    </Paper >

  );
}