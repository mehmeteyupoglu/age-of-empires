import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { getUnitsRequest } from '../../store/actions/unitsActions';

function UnitDetails() {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    console.log('params', params);
    dispatch(getUnitsRequest(`?id=${params.id}`));
  }, []);

  return (
    <>
      <Box sx={{ width: '100%' }} className="center-layout"></Box>
    </>
  );
}

export default UnitDetails;
