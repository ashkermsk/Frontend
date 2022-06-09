import React, { useState } from 'react';

import { Checkbox } from './Checkbox';

export const CheckboxComponent = (args) => {
  return <Checkbox {...args} />;
};

export const CheckboxesComponent = (args) => {
  const [active, setActive] = useState({
    'checkbox-3': true,
  });

  return (
    <div>
      {Array.from({ length: 5 }).map((chk, idx) => {
        const chkId = `checkbox-${idx}`;
        return (
          <Checkbox
            key={idx}
            id={chkId}
            checked={active[chkId] === true}
            onChange={(event) => {
              setActive({
                ...active,
                [event.target.id]: event.target.checked,
              });
            }}
            {...args}
          />
        );
      })}
    </div>
  );
};

export default {
  title: 'Components/FormElements/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    toTheRight: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
  },
};
