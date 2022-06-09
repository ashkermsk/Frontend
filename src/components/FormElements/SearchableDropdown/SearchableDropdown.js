import React, { memo, useMemo } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import PropTypes from 'prop-types';
import useStyles from './styled';
import Progress from '../../Progresses/Progress';
import { handleInputChange, createInputStandardAttrs } from '../../../utils/formHelpers';
import { mapArrayBy } from '../../../utils/formatters';

const SearchableDropdown = memo((props) => {
  const {
    hasError,
    label,
    items,
    itemName,
    onChange,
    errorMsg,
    inProgress,
    disabled,
    value,
    valueName,
    useSimpleValue,
    id,
    name,
    disableClearable,
    inTheTable,
  } = props;
  const attrs = createInputStandardAttrs(props);
  const classes = useStyles(props);
  const [open, setOpen] = React.useState(false);

  let items2use = items;

  if (!Array.isArray(items)) {
    console.error(`The 'SearchableDropdown' component expects the 'items' prop to be an array but got `, items);
    items2use = [];
  }

  let foundItem = false;
  for (let idx = 0, len = items2use.length; idx < len; ++idx) {
    if (value == items2use[idx][valueName]) {
      foundItem = true;
      break;
    }
  }

  if (!foundItem && value != null) {
    items2use = [
      {
        [itemName]: `${value}`,
        [valueName]: value,
        disabled: true,
      },
      ...items,
    ];
  }

  const itemsMap = useMemo(() => {
    return mapArrayBy(items2use, valueName);
  }, [items2use, valueName]);

  return (
    <Autocomplete
      inTheTable={inTheTable}
      onInputChange={(event, newInputValue, reason) => {
        if (reason === 'clear') {
          handleInputChange(props)({ target: { value: (name || id, '') } });
        }
      }}
      onChange={(event, value) => {
        if (typeof onChange === 'function') {
          handleInputChange(props)({ target: { value: useSimpleValue && value ? value[valueName] : value } });
        }
      }}
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      value={value}
      options={items2use}
      getOptionLabel={(option) =>
        useSimpleValue && itemsMap[option] ? itemsMap[option][itemName] : option[itemName] || ''
      }
      getOptionSelected={(option, testValue) => {
        return useSimpleValue ? option[valueName] === testValue : option === testValue;
      }}
      getOptionDisabled={(option) => itemsMap[option[valueName]].disabled === true}
      classes={classes}
      disabled={disabled}
      renderInput={(params) => (
        <TextField
          {...params}
          error={hasError}
          helperText={hasError ? errorMsg : ''}
          label={label}
          name={name}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {inProgress ? <Progress type='circularProgress' size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      disableClearable={disableClearable}
      {...attrs}
    />
  );
});

SearchableDropdown.displayName = 'SearchableDropdown';

SearchableDropdown.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  itemName: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  hasError: PropTypes.bool,
  errorMsg: PropTypes.string,
  inProgress: PropTypes.bool,
  disabled: PropTypes.bool,
  open: PropTypes.bool,
  value: PropTypes.any,
  valueName: PropTypes.string,
  useSimpleValue: PropTypes.bool,
  disableClearable: PropTypes.bool,
  inTheTable: PropTypes.bool,
};

SearchableDropdown.defaultProps = {
  itemName: 'label',
  valueName: 'value',
  useSimpleValue: true,
  hasError: false,
  inProgress: false,
  disabled: false,
  open: false,
};

export { SearchableDropdown };
