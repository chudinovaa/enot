import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { colors } from '../../styles/vars';
import { SwitchIOS } from '../generic/SwitchIOS';
import { Line } from '../generic/Line';

export interface ITodoItemProps {
  title: string,
  description: string,
  isComplete: boolean,
  importance: 0 | 1 | 2 | 3
}




export const TodoItem: FC<ITodoItemProps> = ({title, description, isComplete, importance}) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '46px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '0 0 16px 0',
        border: '1px solid red'
      }}>


      <Line importance={importance}/>

      <Box sx={{
        marginRight: 'auto'
      }}>
        <Typography
          noWrap
          variant='h6'
          sx={{
            fontWeight: 700,
            overflow: 'hidden',
            width: '200px',
          }}
        >
          {title}
        </Typography>

        <Typography
          noWrap
          sx={{
            overflow: 'hidden',
            width: '200px',
            marginRight: 'auto',
            fontWeight: 400,
            fontSize: '14px',
            color: colors.color_white_transparent
          }}>
          {description}
        </Typography>
      </Box>


      <SwitchIOS isComplete={isComplete}/>


    </Box>
  );
};