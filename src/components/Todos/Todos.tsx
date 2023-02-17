import React from 'react';
import { Box } from '@mui/material';
import { baseTheme } from '../../styles/theme';
import { Header } from '../Header/Header';
import { TodoList } from '../TodoList/TodoList';
import { Title } from '../Title/Title';

export const Todos = () => {
  return (
    <Box
      sx={{
        width: '390px',
        height: '844px',
        background: baseTheme.menu_color,
        borderRadius: '30px',
        overflow: 'hidden'
      }}
    >

      <Header/>

      <Title/>

      <TodoList/>
    </Box>
  );
};