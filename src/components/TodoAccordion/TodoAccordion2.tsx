import React, { FC } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import { Accordion, AccordionDetails, AccordionProps, AccordionSummary, styled, Typography, } from '@mui/material';
import { ITodoGroupProps } from '../TodoGroup/TodoGroup';
import ExpandCircleDownRoundedIcon from '@mui/icons-material/ExpandCircleDownRounded';


export const TodoAccordion2: FC<ITodoGroupProps> = (props) => {
  const CustomizedAccordion = styled(Accordion)<AccordionProps>(() => ({
    borderRadius: '25px',
    minHeight: '79px',
    '& MuiPaper-root': {
      background: 'red'
    },
    '& MuiAccordion-root': {
      // background: 'red'
      background: 'lightgray',
      borderRadius: '30px'
    },


  }));


  return (


    <CustomizedAccordion
      sx={{

        // background: 'red',
        // borderRadius: '20px'
        // background: `${baseTheme.table_color}`,
        // color: baseTheme.text_primary_color,
        // display: 'flex',
        // flexDirection: 'column',
        // background: '#ccb34c',
      }}>

      <AccordionSummary
        sx={{
          // background: 'darkkhaki',
          // borderRadius: '30px'
          // padding: 0,
          // margin: '20px 20px',
          // // borderRadius: '50px',
          // background: 'red'
        }}
        expandIcon={<ExpandCircleDownRoundedIcon/>}
        aria-controls="panel1a-content"
        id="panel3bh-header"
      >
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails
        //   sx={{
        //   background: 'lightgray',
        //   borderRadius: '30px'
        // }}
      >


        {!!props && props.todos.map((todo, index) => (
          <TodoItem key={index} {...todo}/>
        ))}


      </AccordionDetails>

    </CustomizedAccordion>


  );
};