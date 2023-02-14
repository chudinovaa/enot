import React, { FC } from 'react';
import { Paper } from '@mui/material';
import { baseTheme } from '../../styles/theme';
import { ITodoItemProps, TodoItem } from '../TodoItem/TodoItem';

export interface ITodoGroupProps {
  todos: ITodoItemProps[]
}

export const TodoGroup: FC<ITodoGroupProps> = (props) => {


  return (
    <Paper
      elevation={24}
      sx={{
        borderRadius: '40px',
        background: `${baseTheme.table_color}`,
        color: baseTheme.text_primary_color,
        padding: '16px 25px 2px 17px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {!!props && props.todos.map((todo, index) => (
        <TodoItem key={index} {...todo}/>
      ))}
    </Paper>
  );
};