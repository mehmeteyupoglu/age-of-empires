import React, { useState, useEffect } from 'react';
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
  const { unitsReducer } = useSelector((state) => state);
  const [filter, setFilter] = useState('All');
  const [filterValues, setFilterValues] = useState({
    Wood: { value: [0, 200], isChecked: false, isActivated: false },
    Food: { value: [0, 200], isChecked: false, isActivated: false },
    Gold: { value: [0, 200], isChecked: false, isActivated: false }
  });

  useEffect(() => {
    // Fetch units based on filter when it changes
    const requestParam = filter === 'All' ? '' : `?age=${filter}`;
    dispatch(getUnitsRequest(requestParam));
  }, [filter]);

  const handleChange = (_, newValue) => {
    // Update the filter value when the tab changes
    setFilter(newValue);
  };

  const handleCost = (event, newValue) => {
    // Update the cost filter value when the slider changes
    const { name } = event.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
      [name]: { ...prevValues[name], value: newValue }
    }));
  };

  const handleChecked = (event) => {
    // Update the checkbox value and reset the range if unchecked
    const { name, checked } = event.target;
    setFilterValues((prevValues) => ({
      ...prevValues,
      [name]: { ...prevValues[name], isChecked: checked, isActivated: true }
    }));

    if (!checked) {
      setFilterValues((prevValues) => ({
        ...prevValues,
        [name]: { ...prevValues[name], value: [0, 200] }
      }));
    }
  };

  return (
    <>
      <Box sx={{ width: '100%' }} className="center-layout">
        {/* Filter by ages */}
        <span>
          <pre>Filter by ages</pre>
        </span>
        <Tabs value={filter} onChange={handleChange} aria-label="ages-filter">
          {['All', 'Dark', 'Feudal', 'Castle'].map((value) => (
            <Tab key={value} value={value} label={value} />
          ))}
        </Tabs>
      </Box>
      <Box sx={{ width: '100%' }} className="center-layout">
        {/* Filter by cost */}
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
                  id={`${item}`}
                  label={item}
                  name={item}
                  onChange={handleChecked}
                  checked={filterValues[item].isChecked}
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
                  disabled={!filterValues[item].isChecked}
                />
                {filterValues[item].isChecked ? (
                  <span className="value-display-area">{`${filterItem.value[0]} - ${filterItem.value[1]}`}</span>
                ) : (
                  <span className="value-display-area">--</span>
                )}
              </div>
            );
          })}
        </div>
      </Box>
      <CustomTable data={filterCost(filterValues, unitsReducer.units)} />
    </>
  );
}

export default Units;
