import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Checkbox as MaterialUiCheckbox } from '@material-ui/core';
import useStyles from './styled';
import { handleInputChange } from '../../../utils/formHelpers';
import { Label } from '../Label/Label';

const Checkbox = (props) => {
  const classes = useStyles();
  const { label, toTheRight, ...rest } = props;

  const checkbox = (
    <MaterialUiCheckbox
      className={classes.root}
      disableRipple
      color='default'
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      onChange={handleInputChange(props)}
      {...rest}
    />
  );

  return (
    <Fragment>
      {label && (
        <Label label={label} toTheRight={toTheRight}>
          {checkbox}
        </Label>
      )}
      {!label && checkbox}
    </Fragment>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  toTheRight: PropTypes.bool,
};

export { Checkbox };
