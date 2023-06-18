import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { getUnitsRequest } from '../../store/actions/unitsActions';
import { transformData } from '../../utils/utility-functions';
import { UNIT_DETAIL_FIELDS } from '../../utils/constants';

function UnitDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const unitsReducer = useSelector((state) => state.unitsReducer);

  // Calculate the transformed unit data or null if it doesn't exist
  const unitData = unitsReducer.units.length > 0 ? transformData(unitsReducer.units[0]) : null;

  // Fetch unit data when the component mounts or the `id` parameter changes
  useEffect(() => {
    dispatch(getUnitsRequest(`?id=${id}`));
  }, [dispatch, id]);

  return (
    <Box sx={{ width: '100%' }} className="center-layout unit-details">
      <Card sx={{ minWidth: 600 }}>
        <CardContent>
          {/* Render each detail field */}
          {UNIT_DETAIL_FIELDS.map((item) => (
            <div key={item.value} className="text-pair">
              {/* Render the label */}
              <Typography variant="h5" component="div" className="label">
                {item.label}
              </Typography>
              {/* Render the value from the transformed unit data */}
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {unitData && unitData[item.value]}
              </Typography>
            </div>
          ))}
        </CardContent>
        <CardActions>
          <Button size="small">Turn Back</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default UnitDetails;
