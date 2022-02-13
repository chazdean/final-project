import React from 'react'

//Components
import WatchlistListItem from './WatchlistListItem'
import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Paper } from '@mui/material';

//Styles
import { watchlistStyles } from './styles';

export default function WatchlistList(props) {
  const { data, deleteItem } = props

  const handleDelete = (id) => {
    deleteItem("watchlist", id)
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 15 }} />
            <TableCell align="center" sx={watchlistStyles.tableCell}>Symbol</TableCell>
            <TableCell align="center" sx={{ width: 230 }}>Name</TableCell>
            <TableCell align="center" sx={watchlistStyles.tableCell}>Current Price (USD)</TableCell>
            <TableCell align="center" sx={watchlistStyles.tableCell}>Percent Change (1 Day)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((watchlistItem) => (
            <WatchlistListItem
              key={watchlistItem.id}
              watchlistItem={watchlistItem}
              handleDelete={handleDelete}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}