import React from 'react';
import { Label } from './Label';

export const LabelComponent = (args) => {
  return <Label {...args} />;
};

export default {
  title: 'Components/FormElements/Label',
  component: Label,
  argTypes: {
    toTheRight: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'Label',
    },
  },
};
