import React from 'react';
import { Container, IconButton, Typography, Box } from '@mui/material';
import { colors } from '../../styles/vars';
import { SettingsIcon } from '../generic/SettingsIcon';
import { Settings } from '../Settings/Settings';

export const Header = () => {
  return (
      <Box
        sx={{
        background: colors.color_light_gray,
        m: "13px 39px 0 36px",

        display: 'flex',
        justifyContent: 'space-between',
      }}>
        <Typography
          variant="h4"
          component="div"
          sx={{
            fontWeight: 700
          }}
        >
          To&nbsp;Do
        </Typography>
          <SettingsIcon sx={{height: "30px", width: 'auto', margin: 'auto 0'}}/>
      </Box>
  );
};