import React from 'react';
import styled from 'styled-components';

import { AreaChart } from './AreaChart';
import { colors } from '../../../theme/colors';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 500px;
`;

let data = [];
let visits = 10;

for (let i = 1; i < 366; i++) {
  visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
  data.push({ date: new Date(2018, 0, i), name: 'name' + i, value: visits });
}

export const AreaChartComponent = (args) => {
  const props = {
    data: data,
    config: { ...args, fieldDateX: 'date', fieldValue: 'value' },
  };

  return (
    <Container>
      <AreaChart {...props} />
    </Container>
  );
};

export default {
  title: 'Components/Charts/AreaChart',
  component: AreaChart,
  argTypes: {
    bgColor: {
      control: {
        type: 'color',
      },
      defaultValue: colors.white,
    },
    colors: {
      control: {
        type: 'array',
      },
      defaultValue: [colors.blue, colors.orange, colors.salmonRed, colors.plum, colors.lightBlue, colors.gray],
    },
    bgOpacity: {
      control: {
        type: 'number',
      },
      defaultValue: 0.5,
    },
    width: {
      control: {
        type: 'text',
      },
      defaultValue: '100%',
    },
    height: {
      control: {
        type: 'text',
      },
      defaultValue: '100%',
    },
    valueAxisToolTipDisabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
  },
};
