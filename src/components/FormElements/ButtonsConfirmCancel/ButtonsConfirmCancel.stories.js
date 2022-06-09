import React from 'react';
import { action } from '@storybook/addon-actions';
import { ButtonsConfirmCancel } from './ButtonsConfirmCancel';

export const ButtonsConfirmCancelComponent = (args) => {
  return <ButtonsConfirmCancel {...args} onConfirm={action('Confirm')} onCancel={action('Cancel')} />;
};

export default {
  title: 'Components/FormElements/ButtonsConfirmCancel',
  component: ButtonsConfirmCancel,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'large'],
      },
      defaultValue: 'small',
    },
    direction: {
      control: {
        type: 'select',
        options: ['horizontal', 'vertical'],
      },
      defaultValue: 'horizontal',
    },
  },
};
