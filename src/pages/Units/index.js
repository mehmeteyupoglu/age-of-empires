import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { getUnitsRequest } from '../../store/actions/unitsActions';
import { mapThroughObject } from '../../utils/utility-functions';

function Units() {
  const [filter, setFilter] = React.useState({
    type: 'age',
    value: 'all'
  });
  const state = useSelector((state) => state);
  const { unitsReducer } = state;
  const dispatch = useDispatch();

  React.useEffect(() => {
    const { value, type } = filter;
    if (value == 'All') {
      dispatch(getUnitsRequest(''));
    } else {
      dispatch(getUnitsRequest(`?${type}=${value}`));
    }
  }, [filter.value]);

  const handleChange = (e, newValue) => {
    setFilter({
      type: 'age',
      value: newValue
    });
  };

  return (
    <>
      <Box sx={{ width: '100%' }} className="center-layout">
        <h4>Ages</h4>
        <Tabs value={filter.value} onChange={handleChange} aria-label="ages-filter">
          <Tab value="All" label="All" />
          <Tab value="Dark" label="Dark" />
          <Tab value="Feudal" label="Feudal" />
          <Tab value="Castle" label="Castle" />
        </Tabs>
      </Box>
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
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
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

export default Units;
