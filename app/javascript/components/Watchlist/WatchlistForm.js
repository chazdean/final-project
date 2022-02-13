import React, { useState } from 'react'

//Components
import SearchBar from '../Utilities/SearchBar';
import { Button, Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

//Styles
import { watchlistStyles } from './styles';


export default function WatchlistForm(props) {
  const { assetsList, addWatchlistItem } = props;

  const [selectedAsset, setSelectedAsset] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event, newInputValue) => {
    setSearchValue(newInputValue)
  };

  const handleSelection = (event, newSelection) => {
    setSelectedAsset(newSelection);
  };

  const handleSubmit = () => {
    setSelectedAsset(() => null)
    setSearchValue(() => '')
    addWatchlistItem(selectedAsset.id)
  };

  const handleClear = () => {
    setSelectedAsset(() => null)
    setSearchValue(() => '')
  };

  return (
    <Box sx={watchlistStyles.formCard}>
      <Typography variant="subtitle1" mb={2}>Add to your Watchlist:</Typography>

      <form noValidate autoComplete='off' onSubmit={(event) => event.preventDefault()} >
        <SearchBar
          searchValue={searchValue}
          handleSearch={handleSearch}
          selectedAsset={selectedAsset}
          handleSelection={handleSelection}
          assetsList={assetsList}
        />
        <Box sx={watchlistStyles.formButtonBox}>
          <Button sx={{ marginRight: 3 }} color="primary" variant="outlined" onClick={handleClear}>Clear</Button>
          <Button
            type='submit'
            color="primary"
            variant="contained"
            endIcon={<AddIcon />}
            onClick={handleSubmit}
          >
            Add
          </Button>
        </Box>
      </form>
    </Box>
  );
}