import React, { forwardRef } from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import { handleInputChange, isNumberKey } from '../../../utils/formHelpers';
import useStyles from './styled';

const InputField = forwardRef((props, ref) => {
  const { dataEl, inputProps, type, ...rest } = props;
  const classes = useStyles();
  const type2use = type === 'number' ? 'text' : type;
  return (
    <TextField
      {...rest}
      type={type2use}
      inputProps={{
        classes: classes.notchedOutine,
        ...inputProps,
      }}
      onChange={handleInputChange(props)}
      onKeyDown={(event) => {
        if (type === 'number' && !isNumberKey(event)) {
          event.preventDefault();
        }
      }}
      className={classes.root}
      data-el={dataEl}
      inputRef={ref}
    />
  );
});

InputField.variants = ['standard', 'outlined', 'filled'];

InputField.displayName = 'InputField';

InputField.types = [
  'text',
  'password',
  'button',
  'checkbox',
  'color',
  'date',
  'datetime-local',
  'email',
  'file',
  'hidden',
  'image',
  'month',
  'number',
  'radio',
  'range',
  'reset',
  'search',
  'submit',
  'tel',
  'time',
  'url',
  'week',
];

InputField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(InputField.types),
  variant: PropTypes.oneOf(InputField.variants),
  onChange: PropTypes.func,
  helperText: PropTypes.string,
  error: PropTypes.bool,
  multiline: PropTypes.bool,
  title: PropTypes.string,
  dataEl: PropTypes.string,
  inputProps: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

InputField.defaultProps = {
  variant: 'standard',
};

export { InputField };
