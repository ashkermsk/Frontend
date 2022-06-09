import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Dropdown } from './Dropdown';

export const DropdownComponent = (args) => {
  const [value, setValue] = useState('');
  return (
    <div style={{ fontSize: '20px', minWidth: '20px' }}>
      <Dropdown
        {...args}
        value={value}
        name={'dropdown'}
        onChange={(name, value) => {
          setValue(value);
          action('Dropdown changed')({ name, value });
        }}
        items={[
          {
            label: 'React',
            value: 'React',
          },
          {
            label: 'Redux',
            value: 'Redux',
          },
          {
            label: 'Flux',
            value: 'Flux',
          },
        ]}
      />
    </div>
  );
};

export default {
  title: 'Components/FormElements/Dropdown',
  component: Dropdown,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'Libraries',
    },
    title: {
      control: {
        type: 'text',
      },
      defaultValue: 'Button',
    },
    dataEl: {
      control: {
        type: 'text',
      },
      defaultValue: 'Button',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    inTheTable: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    maxHeight: {
      control: {
        type: 'text',
      },
      defaultValue: '200px',
    },
  },
};
