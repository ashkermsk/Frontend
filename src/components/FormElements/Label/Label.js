import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyledLabel } from './styled';
import { buildAttributes } from '../../../utils/formHelpers';

const Label = memo((props) => {
  const { children, toTheRight, label } = props;
  return (
    <StyledLabel toTheRight={toTheRight} {...buildAttributes(props, ['id', 'dataEl'])}>
      <span>{label}</span>
      {children}
    </StyledLabel>
  );
});

Label.displayName = 'Label';

Label.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  toTheRight: PropTypes.bool,
  dataEl: PropTypes.string,
};

Label.defaultProps = {
  toTheRight: true,
};

export { Label };
