import 'date-fns';
import React, { memo, useEffect } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import PropTypes from 'prop-types';
import theme from '../../../theme/theme';
import { createInputStandardAttrs, handleInputChange } from '../../../utils/formHelpers';

const InputDate = memo((props) => {
  const { value, dataEl, maxDate, minDate, autoClose, ...rest } = props;
  const attrs = createInputStandardAttrs(props);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} theme={theme}>
      <KeyboardDatePicker
        {...rest}
        data-el={dataEl}
        margin='none'
        value={value}
        onChange={handleInputChange(props)}
        leftArrowButtonProps={{
          color: 'primary',
        }}
        rightArrowButtonProps={{
          color: 'primary',
        }}
        {...attrs}
        fullWidth
        maxDate={maxDate}
        minDate={minDate}
        autoOk={autoClose}
      />
    </MuiPickersUtilsProvider>
  );
});

InputDate.variants = ['dialog', 'inline', 'static'];

InputDate.displayName = 'InputDate';

InputDate.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(InputDate.variants),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.any,
  maxDate: PropTypes.any,
  minDate: PropTypes.any,
  dataEl: PropTypes.string,
  autoClose: PropTypes.bool,
};

InputDate.defaultProps = {
  format: 'MM/dd/yyyy',
  margin: 'normal',
  variant: 'inline',
  autoClose: true,
};

export { InputDate };
