import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { InputDate } from './InputDate';

export const InputDateComponent = (args) => {
  return <InputDate {...args} onChange={action('InputDate changed')} />;
};

export default {
  title: 'Components/FormElements/InputDate',
  component: InputDate,
  argTypes: {
    id: {
      control: {
        type: 'text',
      },
      defaultValue: 'date',
    },
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'Select date',
    },
    value: {
      control: {
        type: 'date',
      },
      defaultValue: new Date(),
    },
    variant: {
      options: InputDate.variants,
      control: {
        type: 'select',
      },
      defaultValue: InputDate.variants[0],
    },
    minDate: {
      control: {
        type: 'date',
      },
      defaultValue: null,
    },
    maxDate: {
      control: {
        type: 'date',
      },
      defaultValue: null,
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    autoClose: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
  },
};
