import React from 'react';
import { Box, Typography } from '@mui/material';
import { SettingsIcon } from '../generic/SettingsIcon';

export const Header = () => {
  return (
      <Box
        sx={{
        m: "13px 39px 0 36px",
        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Typography
          component="div"
          sx={{
            fontWeight: 700,
            fontSize: '36px',
          }}
        >
          To&nbsp;Do
        </Typography>
          <SettingsIcon sx={{height: "30px", width: 'auto', margin: 'auto 0'}}/>
      </Box>
  );
};