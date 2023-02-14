import React from 'react';
import { Box, Typography } from '@mui/material';
import { OkIcon } from '../generic/OkIcon';

export const Title = () => {
  return (
    <Box
      sx={{
        background: 'orange',
        display: 'flex',
        flexDirection: 'row',
        m: '21px 36px 15px 36px',
      }}>
      <OkIcon sx={{fontSize: "23px"}}/>
      <Typography paddingLeft="10px">
        Today Tasks:
      </Typography>
    </Box>
  );
};