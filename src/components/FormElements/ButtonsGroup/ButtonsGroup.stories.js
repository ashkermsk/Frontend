import React from 'react';
import { action } from '@storybook/addon-actions';
import { ButtonsGroup } from './ButtonsGroup';
import { Button } from '../Button';

const props = {
  onClick: action('Dropdown clicked'),
  items: [
    {
      clickId: 1,
      text: 'Follow',
      iconName: 'Search',
      variant: 'alert',
      width: '200px',
    },
    {
      clickId: 2,
      text: 'Timer',
      iconName: 'Timer',
      variant: 'secondary',
      width: '200px',
    },
  ],
};

export const ButtonsGroupComponent = (args) => {
  return <ButtonsGroup {...args} {...props} />;
};

export default {
  title: 'Components/FormElements/ButtonsGroup',
  component: ButtonsGroup,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: Button.sizes,
      },
      defaultValue: Button.sizes[0],
    },
    isVertical: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
};
