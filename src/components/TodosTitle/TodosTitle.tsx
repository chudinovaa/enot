import React from 'react';
import { Box, Typography } from '@mui/material';
import { Line } from '../generic/Line';

type TodosTitleProps = {
  title: string
}

export const TodosTitle = (title : TodosTitleProps) => {
  return (
    <Box
      sx={{
        width: '220px',
        height: '51px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        margin: 0,
        overflow: 'hidden'
      }}>

      <Line importance={0}/>
      <Typography
        noWrap
        variant='h6'
        sx={{
          fontWeight: 700,
          overflow: 'hidden',
          width: '200px',
        }}
      >
        Tomorrow tasks
      </Typography>

    </Box>
  );
};