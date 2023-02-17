import React from 'react';
import { Accordion, AccordionProps } from '@mui/material';
import { baseTheme } from '../../styles/theme';

export const StyledAccordion = (props : AccordionProps) : JSX.Element => {


  return (
    <Accordion
      {...props}
      disableGutters
      square
      sx={{
        borderRadius: '25px',
        background: `${baseTheme.table_color}`,
        minHeight: '79px',
        marginBottom: '32px',
        boxShadow: '16px 16px 20px rgba(0, 0, 0, 0.15),-8px -8px 20px rgba(255, 255, 255, 0.05)',
        padding: '0 25px 0px 17px'
      }}
    >
      {props.children}
    </Accordion>
  );
};