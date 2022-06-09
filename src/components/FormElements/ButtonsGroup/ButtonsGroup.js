import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';
import { sizesNames } from '../Button/styled';

import { ButtonsBox, ItemBox } from './styled';

const ButtonsGroup = memo((props) => {
  const { items, size, onClick, isVertical } = props;

  const handleClick = (event, item) => {
    if (typeof onClick === 'function') {
      onClick(item);
    }
  };

  return (
    <ButtonsBox isVertical={isVertical}>
      {items.map((item) => (
        <ItemBox key={item.clickId || item.text}>
          <Button onClick={(event) => handleClick(event, item)} size={size} {...item} />
        </ItemBox>
      ))}
    </ButtonsBox>
  );
});

ButtonsGroup.displayName = 'ButtonsGroup';

ButtonsGroup.propTypes = {
  onClick: PropTypes.func,
  isVertical: PropTypes.bool,
  size: PropTypes.oneOf(sizesNames),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      clickId: PropTypes.any,
      ...Button.propTypes,
      width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  ),
};

ButtonsGroup.defaultProps = {
  isVertical: false,
};

ButtonsGroup.defaultProps = {
  size: sizesNames[0],
};

export { ButtonsGroup };
