import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => {
  const { palette } = theme || {};
  const colors = palette.common || {};
  return {
    switchBase: {
      '&$checked': {
        color: colors.green,
        '& + $track': {
          backgroundColor: colors.mediumGreen,
          opacity: 0.5,
          border: 'none',
        },
      },
    },
    thumb: {
      width: '21px',
      height: '21px',
    },
    track: {
      borderRadius: '15px',
      border: 'none',
      backgroundColor: colors.gray,
      opacity: 1,
    },
    checked: {},
  };
});
