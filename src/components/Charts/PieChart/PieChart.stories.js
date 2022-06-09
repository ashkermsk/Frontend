import React from 'react';
import styled from 'styled-components';
import { PieChart } from './PieChart';
import { PieChartData } from './data';
import { colors } from '../../../theme/colors';

const Container = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  height: 500px;
`;

export const PieChartComponent = (args) => {
  const props = {
    data: PieChartData,
    config: { ...args },
  };

  return (
    <Container>
      <PieChart id={'chartdiv'} {...props} />
    </Container>
  );
};

export default {
  title: 'Components/Charts/PieChart',
  component: PieChart,
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
    innerRadius: {
      control: {
        type: 'number',
      },
      defaultValue: 0,
    },
    showLegend: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    showLabels: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    showTicks: {
      control: {
        type: 'boolean',
      },
      defaultValue: true,
    },
    showColors: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    colorText: {
      control: {
        type: 'text',
      },
      defaultValue: 'color',
    },
    valueText: {
      control: {
        type: 'text',
      },
      defaultValue: 'value',
    },
    labelText: {
      control: {
        type: 'text',
      },
      defaultValue: 'label',
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
