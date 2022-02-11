import React, { useState } from 'react'

//Components
import PortfolioListItem from './PortfolioListItem'
import { TableContainer, Table, TableBody, TableHead, TableRow, TableCell, Paper } from '@mui/material';

export default function PortfolioList(props) {
  const { data } = props

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="center">Symbol</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Shares</TableCell>
            <TableCell align="center">Current Price</TableCell>
            <TableCell align="center">Total Value</TableCell>
            <TableCell align="center">Percent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((portfolioItem) => (
            <PortfolioListItem key={portfolioItem.id} portfolioItem={portfolioItem} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}