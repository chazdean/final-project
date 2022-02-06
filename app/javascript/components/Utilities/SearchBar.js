import React, { useState } from 'react'

//Components
import { Autocomplete, TextField } from '@mui/material';


export default function SearchBar(props) {
  const { selectedAsset, handleSelection, assetsList } = props

  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (event, newSearchValue) => {
    setSearchValue(newSearchValue)
  }

  return (
    <Autocomplete
      id="search-bar"
      sx={{ marginBottom: 3 }}  // may need to revise styles once page component is made
      options={assetsList}
      getOptionLabel={(option) => `${option.long_name} (${option.symbol})`}
      noOptionsText={"No Results, try Netflix, Bitcoin, AMZN ..."}
      disableClearable={true}

      renderInput={(params) => {
        return (
          <TextField
            color="secondary"
            fullWidth
            {...params} label="Which stock or crypto?"
          />
        )
      }
      }

      value={selectedAsset.symbol}
      onChange={handleSelection}
      inputValue={searchValue}
      onInputChange={handleSearch}
    />
  );
}