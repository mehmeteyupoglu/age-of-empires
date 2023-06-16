import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Form from 'react-bootstrap/Form';

import { useDispatch } from 'react-redux';
import { getUnitsRequest } from '../../store/actions/unitsActions';
import CustomTable from './CustomTable';

function Units() {
  const [filter, setFilter] = React.useState({
    type: 'age',
    value: 'All'
  });
  const [checked, setChecked] = React.useState(true);
  const [value, setValue] = React.useState([20, 37]);
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

  const handleCost = (event, newValue) => {
    setValue(newValue);
  };

  const handleChecked = (event) => {
    setChecked(event.target.checked);
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
      <Box sx={{ width: '100%' }} className="center-layout">
        <span>
          <pre>Filter by cost</pre>
        </span>
        <div className="filter-group">
          <Form.Check
            type={'checkbox'}
            id={`default-checkbox`}
            label={`Wood`}
            onChange={handleChecked}
            checked={checked}
          />
          <Slider
            getAriaLabel={() => 'Cost Range'}
            value={value}
            onChange={handleCost}
            valueLabelDisplay="auto"
            min={0}
            max={200}
            step={10}
            disabled={!checked}
          />
          {checked ? <span>{`${value[0]} - ${value[1]}`}</span> : <span>--</span>}
        </div>
      </Box>
      <CustomTable />
    </>
  );
}

export default Units;
