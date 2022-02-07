import React, { useState } from 'react'

//Components
import { TableRow, TableCell, TableHead, IconButton, Collapse, Box, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export default function PortfolioListItem(props) {
  const { asset } = props;

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

        <TableCell align="center">{asset.symbol}</TableCell>
        <TableCell align="center">{asset.long_name}</TableCell>
        <TableCell align="center">{asset.shares}</TableCell>
        <TableCell align="center" scope='integer'>{asset.price}</TableCell>
        <TableCell align="center">{asset.total_value}</TableCell>
        <TableCell align="center">{asset.percent}</TableCell>
      </TableRow>

      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Insert update form and button here
              </Typography>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}