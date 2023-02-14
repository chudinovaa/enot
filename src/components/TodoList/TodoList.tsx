import React from 'react';
import { Box, Paper } from '@mui/material';
import { ITodoGroupProps, TodoGroup } from '../TodoGroup/TodoGroup';
import { ITodoItemProps } from '../TodoItem/TodoItem';
import { TodoAccordion } from '../TodoAccordion/TodoAccordion';
import { TodoAccordion2 } from '../TodoAccordion/TodoAccordion2';

export const TodoList = () => {

  const todos : ITodoItemProps[] = [
    {
      title: 'Visit David',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, sunt.',
      isComplete: false,
      importance: 1
    },
    {
      title: 'Goceries for dinner',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, sunt.',
      isComplete: false,
      importance: 2
    },
    {
      title: "Fix Dad's iPad",
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, sunt.',
      isComplete: true,
      importance: 3
    },
  ]



  return (
    <Box sx={{padding: '0 20px'}}>
      <TodoGroup todos={todos}/>
      {/*<TodoAccordion todos={todos}/>*/}
      <TodoAccordion2 todos={todos}/>
    </Box>
  );
};