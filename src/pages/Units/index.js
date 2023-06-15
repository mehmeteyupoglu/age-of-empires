import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { getUnitsRequest } from '../../store/actions/unitsActions';
import { mapThroughObject } from '../../utils/utility-functions';

function Units() {
  const state = useSelector((state) => state);
  const { unitsReducer } = state;
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUnitsRequest());
  }, []);

  return (
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
          {unitsReducer.units.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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
  );
}

export default Units;
