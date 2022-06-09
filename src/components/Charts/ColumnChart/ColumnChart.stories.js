import React from 'react';
import { ColumnChart } from './ColumnChart';
import styled from 'styled-components';
import { colors } from '../../../theme/colors';
import { chartData, chartMultiData } from './data';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 500px;
`;

export const SingleColumn = (args) => {
  return (
    <Container>
      <ColumnChart data={chartData} config={{ ...args, valueFields: ['value'] }} />
    </Container>
  );
};
export const MultipleColumns = (args) => {
  return (
    <Container>
      <ColumnChart data={chartMultiData} config={{ ...args, valueFields: ['value1', 'value2', 'value3'] }} />
    </Container>
  );
};

export default {
  component: ColumnChart,
  title: 'Components/Charts/ColumnChart',
  argTypes: {
    bgColor: {
      control: {
        type: 'color',
      },
      defaultValue: colors.white,
    },
    bgOpacity: {
      control: {
        type: 'number',
      },
      defaultValue: 0.5,
    },
    colors: {
      control: {
        type: 'array',
      },
      defaultValue: [colors.red, colors.blue, colors.orange],
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
    categoryText: {
      control: {
        type: 'text',
      },
      defaultValue: 'label',
    },
    legendLocation: {
      control: {
        type: 'number',
      },
      defaultValue: 0,
    },
    labelXAxis: {
      control: {
        type: 'text',
      },
      defaultValue: 'label',
    },
    opacity: {
      control: {
        type: 'number',
      },
      defaultValue: 0.8,
    },
    seriesName: {
      control: {
        type: 'text',
      },
      defaultValue: 'Items',
    },
    tooltipText: {
      control: {
        type: 'text',
      },
      defaultValue: '{categoryX}: [bold]{valueY}[/]',
    },
    lineWidth: {
      control: {
        type: 'number',
      },
      defaultValue: 2,
    },
    lineOpacity: {
      control: {
        type: 'number',
      },
      defaultValue: 1,
    },
    showLegend: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    minGridDistance: {
      control: {
        type: 'number',
      },
      defaultValue: 30,
    },
    legendPosition: {
      control: {
        type: 'text',
      },
      defaultValue: 'right',
    },
    showTitle: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    mainTitle: {
      control: {
        type: 'text',
      },
      defaultValue: 'Main Title',
    },
    mainTitleFontSize: {
      control: {
        type: 'number',
      },
      defaultValue: '25',
    },
    mainTitleMarginBottom: {
      control: {
        type: 'number',
      },
      defaultValue: '30',
    },
  },
};
