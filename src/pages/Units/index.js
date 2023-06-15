import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';
import { getUnitsRequest } from '../../store/actions/unitsActions';
import CustomTable from './CustomTable';

function Units() {
  const [filter, setFilter] = React.useState({
    type: 'age',
    value: 'All'
  });
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
        <span>
          <pre>Filter by ages</pre>
        </span>
        <Tabs value={filter.value} onChange={handleChange} aria-label="ages-filter">
          <Tab value="All" label="All" />
          <Tab value="Dark" label="Dark" />
          <Tab value="Feudal" label="Feudal" />
          <Tab value="Castle" label="Castle" />
        </Tabs>
      </Box>
      <CustomTable />
    </>
  );
}

export default Units;
