import React, { FC } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { AccordionDetails, AccordionSummary, } from '@mui/material';
import { ITodoGroupProps } from '../TodoGroup/TodoGroup';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';
import { StyledAccordion } from '../StyledAccordion/StyledAccordion';
import { TodosTitle } from '../TodosTitle/TodosTitle';
import { baseTheme } from '../../styles/theme';


export const TodoAccordion: FC<ITodoGroupProps> = (props) => {


  return (
    <StyledAccordion>


      <AccordionSummary
        sx={{
          padding: '2px 0 0 0',
          marginRight: '12px',
        }}
        expandIcon={<ExpandCircleDownRoundedIcon sx={{ color: baseTheme.text_primary_color}}/>}
        aria-controls="panel1a-content"
        id="panel3bh-header"
      >
        <TodosTitle title={'Название'}/>
      </AccordionSummary>


      <AccordionDetails
        sx={{padding: '0'}}
      >


        {!!props && props.todos.map((todo, index) => (
          <TodoItem key={index} {...todo}/>
        ))}


      </AccordionDetails>
    </StyledAccordion>

  );
};