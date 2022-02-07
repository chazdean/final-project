import React, { useState } from 'react'

//Components
import { TableRow, TableCell, IconButton, Collapse, Box, Typography, TextField, Grid, Button, Container } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


export default function PortfolioListItem(props) {
  const { portfolioItem } = props;

  const [open, setOpen] = useState(false);
  const [newShares, setNewShares] = useState('');

  const handleUpdate = () => {
    console.log(`update clicked on item ${portfolioItem.id}`)
    // onUpdate(newShares, portfolioItem.id)
  }

  const handleDelete = () => {
    console.log(`delete clicked on item ${portfolioItem.id}`)
    // onDelete(portfolioItem.id)
  }

  return (
    <>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <EditIcon />}
          </IconButton>
        </TableCell>

        <TableCell align="center">{portfolioItem.symbol}</TableCell>
        <TableCell align="center">{portfolioItem.long_name}</TableCell>
        <TableCell align="center">{portfolioItem.shares}</TableCell>
        <TableCell align="center">{portfolioItem.price}</TableCell>
        <TableCell align="center">{portfolioItem.total_value}</TableCell>
        <TableCell align="center">{portfolioItem.percent}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>

            <Box sx={{ padding: 2, display: "flex", justifyContent: "flex-end", alignItems: "center" }}>

              <Box sx={{ paddingRight: 25, display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
                <TextField
                  label="New Shares"
                  variant="outlined"
                  color="secondary"
                  onChange={(event) => setNewShares(event.target.value)}
                  value={newShares}
                />
                <Button
                  sx={{ marginLeft: 5 }}
                  type='submit'
                  color="secondary"
                  variant="contained"
                  onClick={handleUpdate}
                >Update</Button>
              </Box>

              <Button
                color="error"
                variant="contained"
                startIcon={<HighlightOffIcon />}
                onClick={handleDelete}
              >Delete</Button>

            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}