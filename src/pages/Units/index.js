import * as React from 'react';
import { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Form from 'react-bootstrap/Form';

import { useDispatch, useSelector } from 'react-redux';
import { getUnitsRequest } from '../../store/actions/unitsActions';
import CustomTable from './CustomTable';
import { _filterCost } from '../../utils/utility-functions';

function Units() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { unitsReducer } = state;
  const [filter, setFilter] = useState({
    type: 'age',
    value: 'All'
  });
  const [costFilter, setCostFilter] = useState({
    Wood: {
      isChecked: false,
      isActivated: false
    },
    Food: {
      isChecked: false,
      isActivated: false
    },
    Gold: {
      isChecked: false,
      isActivated: false
    }
  });

  // due to the limitations of MUI and time restriction, imperative declaration of ranges made
  const [woodRange, setWoodRange] = useState([0, 200]);
  const [foodRange, setFoodRange] = useState([0, 200]);
  const [goldRange, setGoldRange] = useState([0, 200]);

  const filterValues = {
    Wood: {
      function: setWoodRange,
      value: woodRange,
      isChecked: costFilter.Wood.isChecked,
      isActivated: costFilter.Wood.isActivated
    },
    Food: {
      function: setFoodRange,
      value: foodRange,
      isChecked: costFilter.Food.isChecked,
      isActivated: costFilter.Food.isActivated
    },
    Gold: {
      function: setGoldRange,
      value: goldRange,
      isChecked: costFilter.Gold.isChecked,
      isActivated: costFilter.Gold.isActivated
    }
  };
  useEffect(() => {
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
        isChecked: checked,
        isActivated: true
      }
    });

    // reset filter values when unchecked
    if (!checked) {
      filterValues[name].function([0, 200]);
    }
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
        <div className="filter-by-cost-container">
          {Object.keys(filterValues).map((item) => {
            const filterItem = filterValues[item];
            return (
              <div className="filter-group" key={item}>
                <Form.Check
                  type={'checkbox'}
                  id={`default-checkbox`}
                  label={item}
                  name={item}
                  onChange={handleChecked}
                  checked={costFilter[item].isChecked}
                />
                <Slider
                  getAriaLabel={() => 'Cost Range'}
                  name={item}
                  value={filterItem.value}
                  onChange={handleCost}
                  valueLabelDisplay="auto"
                  min={0}
                  max={200}
                  step={5}
                  disabled={!costFilter[item].isChecked}
                />
                {costFilter[item].isChecked ? (
                  <span className="value-display-area">{`${filterItem.value[0]} - ${filterItem.value[1]}`}</span>
                ) : (
                  <span className="value-display-area">--</span>
                )}
              </div>
            );
          })}
        </div>
      </Box>
      <CustomTable data={_filterCost(filterValues, unitsReducer.units)} />
    </>
  );
}

export default Units;
