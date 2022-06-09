import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => {
  const { typography, palette } = theme || {};
  const { fontFamily, formElementsFontSize } = typography || {};

  return {
    root: {
      width: '100%',
      '& .MuiFormLabel-root.Mui-focused': {
        color: palette.common.blue,
      },
    },
    input: (props) => ({
      fontSize: `${props.inTheTable}` ? 'inherit' : formElementsFontSize,
      fontFamily,
    }),
    inputRoot: {
      '&.MuiInput-underline:after,&.MuiInput-underline:hover:not(.Mui-disabled):before': {
        borderBottomColor: palette.common.blue,
      },
    },
    option: (props) => ({
      '&.MuiAutocomplete-option': {
        fontSize: `${props.inTheTable}` ? 'inherit' : formElementsFontSize,
      },
    }),
  };
});

export default useStyles;
