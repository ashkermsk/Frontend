import React, { memo, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import { colors } from '../../../theme/colors';
import { StyledDiv } from './styled';

const PieChart = memo((props) => {
  const { config, data, id } = props;
  const { width, height } = config || {};
  const chartState = useRef(null);

  useLayoutEffect(() => {
    const {
      bgColor,
      bgOpacity,
      innerRadius,
      legendPosition,
      showLegend,
      showLabels,
      showTicks,
      showColors,
      valueText,
      labelText,
      colorText,
      showTitle,
      mainTitle,
      mainTitleFontSize,
      mainTitleMarginBottom,
    } = config || {};

    am4core.useTheme(am4themes_animated);

    let chart = am4core.create(id, am4charts.PieChart);
    chartState.current = chart;

    chart.background.fill = am4core.color(bgColor);
    chart.background.opacity = bgOpacity;
    chart.data = data;

    if (!Array.isArray(data)) {
      chart.data = [];
      console.error(`The "PieChart" component with "id=${id}" expected the "data" prop to be an array but got:`, data);
    }

    let title = showTitle ? chart.titles.create() : null;
    if (title) {
      title.text = mainTitle || '';
      title.fontSize = mainTitleFontSize || 0;
      title.marginBottom = mainTitleMarginBottom || 0;
    }

    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = valueText;
    series.dataFields.category = labelText;

    series.slices.template.propertyFields.fill = showColors ? colorText : '';
    series.labels.template.disabled = !showLabels;
    series.ticks.template.disabled = !showTicks;

    chart.legend = showLegend ? new am4charts.Legend() : null;
    if (chart.legend) chart.legend.position = legendPosition;
    chart.innerRadius = innerRadius > 0 ? innerRadius : 0;

    return () => {
      chart.dispose();
    };
  }, [config, data, id]);

  return <StyledDiv id={id} width={width} height={height}></StyledDiv>;
});

PieChart.displayName = 'PieChart';

PieChart.propTypes = {
  id: PropTypes.string,
  data: PropTypes.array,
  config: PropTypes.shape({
    bgColor: PropTypes.string,
    bgOpacity: PropTypes.number,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    innerRadius: PropTypes.number,
    showLegend: PropTypes.bool,
    showLabels: PropTypes.bool,
    showTicks: PropTypes.bool,
    showColors: PropTypes.bool,
    valueText: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    colorText: PropTypes.string,
  }),
};

PieChart.defaultProps = {
  config: {
    bgColor: colors.white,
    bgOpacity: 0.5,
    width: '100%',
    heigth: '100%',
    innerRadius: 40,
    showLegend: true,
    showLabels: true,
    showTicks: true,
    showColors: false,
    colorText: 'color',
  },
};

export { PieChart };
