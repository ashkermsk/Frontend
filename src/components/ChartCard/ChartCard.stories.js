import React from 'react';

import { ChartCard } from './ChartCard';
import { LineChart } from '../Charts/LineChart';
import { SingleLineData } from '../Charts/LineChart/data';

const config = {
  labelsYAxis: ['value'],
  labelXAxis: 'date',
  tensionX: 0.8,
  strokeWidth: 3,
};

export const ChartCardComponent = (args) => {
  return (
    <ChartCard {...args}>
      <LineChart id={'chartdiv'} config={config} data={SingleLineData} />
    </ChartCard>
  );
};

export default {
  title: 'Components/ChartCard',
  component: ChartCard,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
      defaultValue: 'Chart Title',
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
      defaultValue: '100vh',
    },
    elevation: {
      options: ChartCard.elevations,
      control: {
        type: 'radio',
      },
      defaultValue: ChartCard.elevations[0],
    },
  },
};
