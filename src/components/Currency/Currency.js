import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { padStart } from 'lodash';
import numeral from 'numeral';

import { buildAttributes } from '../../utils/formHelpers';

import { Container } from './styled';

const Currency = memo((props) => {
  const { value, decimals, valueOnNaN, id, style } = props;
  const numberValue = Number(value);
  const value2render = numeral(value).format(`($0,0.${padStart('', decimals, '0')})`);

  return (
    <Container {...buildAttributes(props, ['id'])} negative={numberValue < 0} style={style}>
      {!isNaN(numberValue) && value !== null ? value2render : valueOnNaN}
    </Container>
  );
});

Currency.displayName = 'Currency';

Currency.propTypes = {
  value: PropTypes.number,
  decimals: PropTypes.number,
  valueOnNaN: PropTypes.string,
  id: PropTypes.string,
  style: PropTypes.object,
};

Currency.defaultProps = {
  valueOnNaN: 'N/A',
  decimals: 2,
};
export { Currency };
