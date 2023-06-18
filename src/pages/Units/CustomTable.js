import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { mapThroughObject } from '../../utils/utility-functions';
import { useNavigate } from 'react-router';

function CustomTable({ data }) {
  const navigate = useNavigate();
  const handleDetail = (id) => {
    navigate(`${id}`);
  };

  return (
    <>
      <TableContainer component={Paper} className="main-padding custom-table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Costs</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => {
                  handleDetail(row.id);
                }}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.age}</TableCell>
                <TableCell align="right">{mapThroughObject(row.cost)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default CustomTable;
