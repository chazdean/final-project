import React, { useState } from 'react'

//Components
import PortfolioListItem from './PortfolioListItem'
import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Paper } from '@mui/material';

//Styles
import { portfolioStyles } from './styles';

export default function PortfolioList(props) {
  const { data, deleteItem, updatePortfolioItem } = props

  const handleUpdate = (newShares, id, asset_id) => {
    updatePortfolioItem(newShares, id, asset_id)
  }

  const handleDelete = (id) => {
    deleteItem("portfolio", id)
  }

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: 15 }} />
            <TableCell align="center" sx={portfolioStyles.tableCell}>Symbol</TableCell>
            <TableCell align="center" sx={{ width: 230, color: "white" }}>Name</TableCell>
            <TableCell align="center" sx={portfolioStyles.tableCell}>Shares</TableCell>
            <TableCell align="center" sx={portfolioStyles.tableCell}>Current Price (USD)</TableCell>
            <TableCell align="center" sx={portfolioStyles.tableCell}>Total Value (USD)</TableCell>
            <TableCell align="center" sx={portfolioStyles.tableCell}>Percent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((portfolioItem) => (
            <PortfolioListItem
              key={portfolioItem.id}
              portfolioItem={portfolioItem}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}