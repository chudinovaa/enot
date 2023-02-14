import React from 'react';
import { baseTheme } from './styles/theme';
import { Box } from '@mui/material';
import { colors } from './styles/vars';
import { Todos } from './components/Todos/Todos';

export const App = () => (
  <Box component='div'
       sx={{
         width: '100%',
         minHeight: '100vh',
         backgroundColor: colors.color_black,
         color: baseTheme.text_primary_color,
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
       }}
  >
   <Todos/>
  </Box>
)