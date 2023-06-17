import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Form from 'react-bootstrap/Form';

import { useDispatch, useSelector } from 'react-redux';
import { getUnitsRequest } from '../../store/actions/unitsActions';
import CustomTable from './CustomTable';
import { filterCost } from '../../utils/utility-functions';

function Units() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { unitsReducer } = state;
  const [filter, setFilter] = React.useState({
    type: 'age',
    value: 'All'
  });
  const [costFilter, setCostFilter] = React.useState({
    Wood: {
      isChecked: false,
      range: [0, 200]
    },
    Food: {
      isChecked: false,
      range: [0, 200]
    },
    Gold: {
      isChecked: false,
      range: [0, 200]
    }
  });
  const [woodRange, setWoodRange] = React.useState([20, 40]);
  const [foodRange, setFoodRange] = React.useState([20, 40]);
  const [goldRange, setGoldRange] = React.useState([20, 40]);

  const filterValues = {
    Wood: {
      function: setWoodRange,
      value: woodRange
    },
    Food: {
      function: setFoodRange,
      value: foodRange
    },
    Gold: {
      function: setGoldRange,
      value: goldRange
    }
  };
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
    const { name } = event.target;

    filterValues[name].function(newValue);
  };

  const handleChecked = (event) => {
    const { name, checked } = event.target;
    setCostFilter({
      ...costFilter,
      [name]: {
        ...name,
        isChecked: checked
      }
    });
  };

  React.useEffect(() => {
    if (unitsReducer.units.length > 0) {
      filterCost('Wood', woodRange, unitsReducer.units);
    }
  }, [woodRange]);

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
            name={'Wood'}
            onChange={handleChecked}
            checked={costFilter['Wood'].isChecked}
          />
          <Slider
            getAriaLabel={() => 'Cost Range'}
            name="Wood"
            value={woodRange}
            onChange={handleCost}
            valueLabelDisplay="auto"
            min={0}
            max={200}
            step={10}
            disabled={!costFilter['Wood'].isChecked}
          />
          {costFilter['Wood'].isChecked ? (
            <span>{`${woodRange[0]} - ${woodRange[1]}`}</span>
          ) : (
            <span>--</span>
          )}
        </div>
      </Box>
      <CustomTable data={filterCost('Wood', woodRange, unitsReducer.units)} />
    </>
  );
}

export default Units;
