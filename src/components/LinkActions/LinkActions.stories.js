import React from 'react';
import { action } from '@storybook/addon-actions';
import { LinkActions } from './LinkActions';
import { Icon } from '../Icon';
import { Dashboard } from '@material-ui/icons';

const items = [
  {
    text: 'Edit',
    iconName: 'calendar',
    color: 'blue',
    textDecoration: 'underline',
  },
  {
    text: 'Delete',
    iconName: 'dashboard',
    color: 'blue',
    textDecoration: 'underline',
  },
];

export const LinkActionsComponent = (args) => {
  return <LinkActions {...args} items={items} onClick={action('LinkActions Clicked')} />;
};

export default {
  title: 'Components/LinkActions',
  component: LinkActions,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    hasFont: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
};
