import React, { useState } from 'react'

//Components
import SearchBar from '../Utilities/SearchBar';
import { TextField, Button, Box, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

//Styles
import { portfolioStyles } from './styles';


export default function PortfolioForm(props) {
  const { assetsList, addPortfolioItem } = props;

  const [shares, setShares] = useState('');
  const [selectedAsset, setSelectedAsset] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event, newInputValue) => {
    setSearchValue(newInputValue)
  };

  const handleSelection = (event, newSelection) => {
    setSelectedAsset(newSelection);
  };

  const handleSubmit = () => {
    // console.log(`added new portfolio item assetID:${selectedAsset.id}, shares:${shares}`)
    setShares(() => '')
    setSelectedAsset(() => null)
    setSearchValue(() => '')
    addPortfolioItem(selectedAsset.id, shares)
  };

  const handleClear = () => {
    setShares(() => '')
    setSelectedAsset(() => null)
    setSearchValue(() => '')
  };

  return (
    <Box sx={portfolioStyles.formCard}>
      <Typography color="secondary" variant="subtitle1" mb={2}>Add to your portfolio:</Typography>

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
        <Box sx={portfolioStyles.formButtonBox}>
          <Button sx={{ marginRight: 3 }} color="secondary" onClick={handleClear}>Clear</Button>
          <Button
            type='submit'
            color="secondary"
            variant="contained"
            endIcon={<AddIcon />}
            onClick={handleSubmit}
            disabled={!(selectedAsset && shares)}
          >
            Add
          </Button>
        </Box>
      </form>
    </Box>
  );
}