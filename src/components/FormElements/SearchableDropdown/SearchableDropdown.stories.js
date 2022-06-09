import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { SearchableDropdown } from './SearchableDropdown';

const items = [
  {
    label: 'The Shawshank Redemption',
    name: 'The Shawshank Redemption (Name)',
    value: '1',
  },
  {
    label: 'The Godfather',
    name: 'The Godfather (Name)',
    value: '2',
  },
  {
    label: 'Apple Godfather',
    name: 'Apple Godfather (Name)',
    value: '3',
  },
  {
    label: 'The Dark Knight',
    name: 'The Dark Knight (Name)',
    value: '4',
  },
];

export const SearchableDropdownComponent = (args) => {
  const [value, setValue] = useState('');
  return (
    <SearchableDropdown
      {...args}
      value={value}
      items={items}
      onChange={(name, value) => {
        setValue(value);
        action('User made change')({ name, value });
      }}
    />
  );
};

export default {
  title: 'Components/FormElements/SearchableDropdown',
  component: SearchableDropdown,
  argTypes: {
    id: {
      control: {
        type: 'text',
      },
      defaultValue: 'dropdownId',
    },
    name: {
      control: {
        type: 'text',
      },
      defaultValue: 'dropdownName',
    },
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'Searchable Dropdown',
    },
    inProgress: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    disableClearable: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    itemName: {
      control: {
        type: 'text',
      },
      defaultValue: 'label',
    },
    useSimpleValue: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    hasError: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    errorMsg: {
      control: {
        type: 'text',
      },
      defaultValue: 'error',
    },
    onChange: {
      control: {
        disabled: true,
      },
    },
    inTheTable: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
  },
};
