import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  const { palette } = theme || {};
  const colors = palette.common || {};

  return {
    root: {
      width: '100%',
      '& .MuiOutlinedInput-root.Mui-focused': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: colors.blue,
        },
      },
      '& .MuiInput-underline:after': {
        borderColor: colors.blue,
      },
      '& .MuiFormLabel-root': {
        color: colors.grey,
      },
    },
  };
});

export default useStyles;
