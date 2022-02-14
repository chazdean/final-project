import React, { useState } from 'react'

//Components
import { Autocomplete, TextField } from '@mui/material';


export default function SearchBar(props) {
  const { searchValue, handleSearch, selectedAsset, handleSelection, assetsList } = props

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
            color="primary"
            fullWidth
            {...params} label="Which stock or crypto?"
          />
        )
      }
      }

      value={selectedAsset}
      onChange={handleSelection}
      inputValue={searchValue}
      onInputChange={handleSearch}
    />
  );
}