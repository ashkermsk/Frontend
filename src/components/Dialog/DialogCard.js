import React from 'react';
import PropTypes from 'prop-types';
import { Dialog as MaterialUiDialog } from '@material-ui/core';

import { useDialogCardStyles } from './styled';

const DialogCard = (props) => {
  const {
    children,
    onClose,
    open,
    disableBackdropClick,
    disableEscapeKeyDown,
    fullScreen,
    fullWidth,
    maxWidth,
    onBackdropClick,
    onEnter,
    onEntering,
    onExit,
    onExited,
    onExiting,
  } = props;
  const classes = useDialogCardStyles();

  return (
    <MaterialUiDialog
      onClose={onClose}
      open={open}
      disableBackdropClick={disableBackdropClick}
      disableEscapeKeyDown={disableEscapeKeyDown}
      fullScreen={fullScreen}
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      onBackdropClick={onBackdropClick}
      onEnter={onEnter}
      onEntering={onEntering}
      onExit={onExit}
      onExited={onExited}
      onExiting={onExiting}
      classes={classes}
    >
      {children}
    </MaterialUiDialog>
  );
};

DialogCard.displayName = 'DialogCard';

DialogCard.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  onClose: PropTypes.func,
  open: PropTypes.bool,
  disableBackdropClick: PropTypes.bool,
  disableEscapeKeyDown: PropTypes.bool,
  fullScreen: PropTypes.bool,
  fullWidth: PropTypes.bool,
  maxWidth: PropTypes.oneOf(['lg', 'md', 'sm', 'xl', 'xs', false, true]),
  onBackdropClick: PropTypes.func,
  onEnter: PropTypes.func,
  onEntering: PropTypes.func,
  onExit: PropTypes.func,
  onExited: PropTypes.func,
  onExiting: PropTypes.func,
};

export { DialogCard };
