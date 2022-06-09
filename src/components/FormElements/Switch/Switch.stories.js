import React from 'react';
import { action } from '@storybook/addon-actions';
import { Switch } from './Switch';

export const SwitchComponent = (args) => {
  return <Switch {...args} onChange={action('Switch checked')} />;
};

export default {
  title: 'Components/FormElements/Switch',
  component: Switch,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    name: {
      control: {
        type: 'text',
      },
      defaultValue: 'switch',
    },
  },
};
