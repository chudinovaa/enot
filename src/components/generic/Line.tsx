import React, { FC } from 'react';
import { Box } from '@mui/material';
import { colors } from '../../styles/vars';

type LineProps = {
  importance: 0 | 1 | 2 | 3
}

export const Line: FC<LineProps> = ({importance}) => {

  const getColor = (num: 0 | 1 | 2 | 3 ) => {
    if (num === 1) {
      return  colors.color_red
    } else if (num === 2) {
      return colors.color_yellow
    } else if (num === 3) {
      return colors.color_blue
    } else {
      return colors.color_light_gray
    }
  }

  return (
    <Box
      sx={{
        width: '5px',
        height: '40px',
        background: getColor(importance),
        borderRadius: '3px',
        margin: '5px 14px 0 0',
        border: '1px black',
      }}
    />
  );
};