import React, { FC } from 'react';
import { AccordionDetails } from '@mui/material';
import { ITodoItemProps, TodoItem } from '../TodoItem/TodoItem';
import { StyledAccordion } from '../StyledAccordion/StyledAccordion';

export interface ITodoGroupProps {
  todos: ITodoItemProps[]
}

export const TodoGroup: FC<ITodoGroupProps> = (props) => {


  return (
  <StyledAccordion>
    <AccordionDetails sx={{padding:'16px 0 0 0'}}>
      {!!props && props.todos.map((todo, index) => (
        <TodoItem key={index} {...todo}/>
      ))}
    </AccordionDetails>
  </StyledAccordion>
  );
};