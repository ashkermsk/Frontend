import React, { useState, memo, useEffect } from 'react';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import PropTypes from 'prop-types';
import useStyles from './styled';

const Toggle = memo((props) => {
  const { children, onChange, size, value, multiple, disabled, noUnselect } = props;
  const classes = useStyles();
  const [selectedToggles, setFormats] = useState();

  useEffect(() => {
    if (!isNaN(value)) {
      setFormats(value);
    }
  }, [value]);

  const handleFormat = (event, newFormats) => {
    if (!noUnselect || newFormats !== null) {
      setFormats(newFormats);
      if (typeof onChange === 'function') {
        onChange(newFormats);
      }
    }
  };

  return (
    <ToggleButtonGroup value={selectedToggles} size={size} exclusive={!multiple} onChange={handleFormat}>
      {children.map((child, index) => (
        <ToggleButton
          classes={{
            label: classes.toggleLabel,
            selected: classes.selectedToggleLabel,
          }}
          key={index}
          value={index}
          disabled={disabled}
        >
          {child}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
});

Toggle.displayName = 'Toggle Component';

Toggle.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  onChange: PropTypes.func,
  size: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.array, PropTypes.string, PropTypes.number]),
  multiple: PropTypes.bool,
  disabled: PropTypes.bool,
  noUnselect: PropTypes.bool,
};

Toggle.defaultProps = {
  size: 'small',
  disabled: false,
  noUnselect: true,
};

export default Toggle;
