import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { ButtonsGroup } from '../ButtonsGroup';

const CONFIRM_CANCEL_BUTTONS = [
  {
    clickId: 'cancel',
    text: 'Cancel',
    iconName: 'Cancel',
    variant: 'default',
  },
  {
    clickId: 'confirm',
    text: 'Confirm',
    iconName: 'Check',
    variant: 'alert',
  },
];

const ButtonsConfirmCancel = memo((props) => {
  const { direction, onConfirm, onCancel, size } = props;
  const onClick = (item) => {
    item.clickId === 'cancel' ? onCancel(item) : onConfirm(item);
  };

  return <ButtonsGroup direction={direction} items={CONFIRM_CANCEL_BUTTONS} onClick={onClick} size={size} />;
});

ButtonsConfirmCancel.displayName = 'ButtonsConfirmCancel';

ButtonsConfirmCancel.propTypes = {
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  size: PropTypes.oneOf(['small', 'large']),
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
};

export { ButtonsConfirmCancel };
