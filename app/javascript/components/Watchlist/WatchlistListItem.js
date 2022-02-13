import React, { useState } from 'react'

//Components
import { TableRow, TableCell, IconButton, Collapse, Box, Typography, TextField, Grid, Button, Container } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

//Helpers
import { formatter } from '../../helpers/formatting'


export default function WatchlistListItem(props) {
  const { watchlistItem, handleDelete } = props;

  const [open, setOpen] = useState(false);

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

        <TableCell align="center">{watchlistItem.symbol}</TableCell>
        <TableCell align="center">{watchlistItem.long_name}</TableCell>
        <TableCell align="center">{formatter.format(watchlistItem.price)}</TableCell>
        <TableCell align="center" sx={(Number(watchlistItem.percent_change) < 0) ? { color: '#bf1435' } : { color: '#4caf50' }}>{Math.round(watchlistItem.percent_change * 100) / 100}%</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>

            <Box sx={{ padding: 2, display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
              <Button
                color="error"
                startIcon={<HighlightOffIcon />}
                onClick={() => handleDelete(watchlistItem.id)}
              >Delete</Button>
            </Box>

          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}