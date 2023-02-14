import React, { FC } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { Accordion,  AccordionDetails, AccordionSummary, styled, Typography, } from '@mui/material';
import { ITodoGroupProps } from '../TodoGroup/TodoGroup';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';


export const TodoAccordion: FC<ITodoGroupProps> = (props) => {
  const CustomizedAccordion = styled(Accordion)(() => ({
    '& .MuiPaper-root': {
      color: 'darkslategray',
      backgroundColor: 'inherit',
      borderRadius: '40px',
      boxShadow: 'none',
    },
    '& .MuiAccordion-root': {
      borderRadius: '10px'
    },
    // '& .MuiAccordionDetails-root': {
    //   padding: 0
    // },
    'MuiButtonBase-root MuiAccordionSummary-root MuiAccordionSummary-gutters MuiButtonBase-root-MuiAccordionSummary-root': {
      borderRadius: '10px'
    },
    boxShadow: 'none'
  }));



  return (
    // <Paper
    //   elevation={24}
    //   sx={{
    //     borderRadius: '40px',
    //     background: `${baseTheme.table_color}`,
    //     color: baseTheme.text_primary_color,
    //     // padding: '16px 25px 2px 17px',
    //     display: 'flex',
    //     flexDirection: 'column'
    //   }}
    // >


      <CustomizedAccordion
        sx={{
          // background: `${baseTheme.table_color}`,
          // color: baseTheme.text_primary_color,
          // display: 'flex',
          // flexDirection: 'column',
          // background: '#ccb34c',
        }}>
    <Accordion >
        <AccordionSummary sx={{
          padding: 0,
          margin: '20px 20px',
          // borderRadius: '50px',
          background: 'red'
        }}
          expandIcon={<ExpandCircleDownRoundedIcon/>}
          aria-controls="panel1a-content"
          id="panel3bh-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>


          {!!props && props.todos.map((todo, index) => (
            <TodoItem key={index} {...todo}/>
          ))}


        </AccordionDetails>
    </Accordion>
      </CustomizedAccordion>


    // </Paper>
  );
};