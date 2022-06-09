import React, { memo } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
//import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';
import { MenuItem } from '../../Menu';
import { useFormControlStyles, useInputLabelStyles, useSelectStyles } from './styled';
import { handleInputChange, createInputStandardAttrs } from '../../../utils/formHelpers';

const Dropdown = memo((props) => {
  const { label, value, items, disabled, title, dataEl, maxHeight } = props;
  const attrs = createInputStandardAttrs(props);
  const formControlClasses = useFormControlStyles(props);
  const inputLabelClasses = useInputLabelStyles(props);
  const selectClasses = useSelectStyles(props);

  let items2use = items;

  if (!Array.isArray(items)) {
    console.error(`The 'Dropdown' component expects the 'items' prop to be an array but got `, items);
    items2use = [];
  }

  let foundItem = false;
  for (let idx = 0, len = items2use.length; idx < len; ++idx) {
    if (value == items2use[idx].value) {
      foundItem = true;
      break;
    }
  }

  if (!foundItem) {
    items2use = [
      {
        label: `${value}`,
        value,
        disabled: true,
      },
      ...items,
    ];
  }

  return (
    <FormControl classes={formControlClasses} fullWidth>
      {label && <InputLabel classes={inputLabelClasses}>{label}</InputLabel>}
      <Select
        {...attrs}
        value={value}
        onChange={handleInputChange(props)}
        label={label}
        disabled={disabled}
        title={title}
        classes={selectClasses}
        MenuProps={{ classes: { paper: selectClasses.menuPaper } }}
      >
        {Array.isArray(items) &&
          items2use.map((item) => {
            const { value, label, disabled } = item;
            return (
              <MenuItem key={value} value={value} disabled={disabled}>
                {label}
              </MenuItem>
            );
          })}
      </Select>
    </FormControl>
  );
});

Dropdown.displayName = 'Dropdown';

Dropdown.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      disbaled: PropTypes.bool,
    }),
  ),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  dataEl: PropTypes.string,
  maxHeight: PropTypes.string,
};

export { Dropdown };
