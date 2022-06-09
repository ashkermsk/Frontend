import React, { memo, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

import { colors } from '../../../theme/colors';
import { AreaChartDiv } from './styled';

const AreaChart = memo((props) => {
  const { config, data, id } = props;
  const { width, height } = config || {};
  const chartState = useRef(null);

  useLayoutEffect(() => {
    const {
      bgColor,
      bgOpacity,
      colors,
      dateAxisLocation,
      valueAxisToolTipDisabled,
      fieldDateX,
      fieldValue,
      valueTooltipText,
    } = config || {};

    am4core.useTheme(am4themes_animated);

    let chart = am4core.create(id, am4charts.XYChart);
    chartState.current = chart;

    if (Array.isArray(colors)) {
      colors.forEach((color) => chart.colors.list.push(am4core.color(color)));
    } else if (colors) {
      chart.colors.list.push(am4core.color(colors));
    }

    chart.background.fill = am4core.color(bgColor);
    chart.background.opacity = bgOpacity;

    chart.data = data;

    if (!Array.isArray(data)) {
      chart.data = [];
      console.error(`The "AreaChart" component with "id=${id}" expected the "data" prop to be an array but got:`, data);
    }

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = dateAxisLocation;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = valueAxisToolTipDisabled;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = fieldDateX;
    series.dataFields.valueY = fieldValue;
    series.tooltipText = valueTooltipText;
    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    return () => {
      chart.dispose();
    };
  }, [config, data, id]);

  return <AreaChartDiv id={id} width={width} height={height} />;
});

AreaChart.displayName = 'AreaChart';

AreaChart.propTypes = {
  data: PropTypes.array,
  config: PropTypes.shape({
    bgColor: PropTypes.string,
    bgOpacity: PropTypes.number,
    colors: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    valueAxisToolTipDisabled: PropTypes.bool,
    dateAxisLocation: PropTypes.string,
    fieldDateX: PropTypes.string,
    fieldValue: PropTypes.string,
    valueTooltipText: PropTypes.string,
  }),
  id: PropTypes.string,
};

AreaChart.defaultProps = {
  id: 'chartdiv',
  config: {
    bgColor: colors.white,
    bgOpacity: 0.5,
    colors: [colors.blue, colors.orange, colors.salmonRed, colors.plum, colors.lightBlue, colors.gray],
    width: '100%',
    height: '100%',
    fieldDateX: 'date',
    fieldValue: 'value',
    valueTooltipText: '{valueY.value}',
    valueAxisToolTipDisabled: 'true',
  },
};

export { AreaChart };
