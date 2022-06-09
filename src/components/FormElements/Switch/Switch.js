import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Switch as MaterialSwitch } from '@material-ui/core/';
import { useStyles } from './styled';
import { handleInputChange, createInputStandardAttrs } from '../../../utils/formHelpers';

const Switch = memo((props) => {
  const { disabled, name, value } = props;
  const classes = useStyles();
  const attrs = createInputStandardAttrs(props);

  return (
    <MaterialSwitch
      {...attrs}
      classes={classes}
      name={name}
      checked={value}
      disabled={disabled}
      onChange={handleInputChange(props)}
    />
  );
});

Switch.displayName = 'Switch';

Switch.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

Switch.defaultProps = {
  disabled: false,
};

export { Switch };
