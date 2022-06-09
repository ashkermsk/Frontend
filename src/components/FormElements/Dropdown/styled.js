import { makeStyles } from '@material-ui/core';

const useFormControlStyles = makeStyles((theme) => {
  return {
    root: {
      minWidth: 'inherit',
      fontSize: 'inherit',
      '& > .MuiInput-root': {
        fontSize: 'inherit',
      },
    },
  };
});

const useInputLabelStyles = makeStyles((theme) => {
  return {
    root: {
      fontSize: 'inherit',
    },
  };
});

const useSelectStyles = makeStyles((theme) => {
  return {
    root: {
      fontSize: 'inherit',
    },
    nativeInput: {
      fontSize: 'inherit',
    },
    menuPaper: (props) => ({
      maxHeight: `${props.maxHeight}`,
    }),
  };
});

export { useFormControlStyles, useInputLabelStyles, useSelectStyles };
