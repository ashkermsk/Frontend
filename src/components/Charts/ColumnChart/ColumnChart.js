import React, { memo, useRef, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

import { colors } from '../../../theme/colors';
import { ColumnChartDiv } from './styled';

const ColumnChart = memo((props) => {
  const { config, data, id } = props;
  const { width, height } = config || {};

  const chartState = useRef(null);

  useLayoutEffect(() => {
    const {
      colors,
      bgColor,
      bgOpacity,
      categoryText,
      legendLocation,
      minGridDistance,
      valueFields,
      labelXAxis,
      seriesName,
      tooltipText,
      opacity,
      lineWidth,
      lineOpacity,
      showLegend,
      legendPosition,
      showTitle,
      mainTitle,
      mainTitleFontSize,
      mainTitleMarginBottom,
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

    let title = showTitle ? chart.titles.create() : null;
    if (title) {
      title.text = mainTitle || '';
      title.fontSize = mainTitleFontSize || 0;
      title.marginBottom = mainTitleMarginBottom || 0;
    }

    chart.legend = showLegend ? new am4charts.Legend() : null;
    if (chart.legend) chart.legend.position = legendPosition;

    if (!Array.isArray(data)) {
      chart.data = [];
      console.error(
        `The "ColumnChart" component with "id=${id}" expected the "data" prop to be an array but got:`,
        data,
      );
    }

    let valueFields2Use = valueFields;
    if (!Array.isArray(valueFields)) {
      console.error(
        `The "ColumnChart" component with "id=${id}" expected the "valueFields" prop to be an array but got:`,
        valueFields,
      );
      valueFields2Use = [];
    }

    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = categoryText;
    categoryAxis.renderer.grid.template.location = legendLocation;
    categoryAxis.renderer.minGridDistance = minGridDistance;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    valueFields2Use.forEach((valueField) => {
      let series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = valueField;
      series.dataFields.categoryX = labelXAxis;
      series.name = seriesName;
      series.columns.template.tooltipText = tooltipText;
      series.columns.template.fillOpacity = opacity;

      let columnTemplate = series.columns.template;
      columnTemplate.strokeWidth = lineWidth;
      columnTemplate.strokeOpacity = lineOpacity;
    });

    return () => {
      chart.dispose();
    };
  }, [config, data, id]);

  return <ColumnChartDiv id={id} width={width} height={height} />;
});

ColumnChart.displayName = 'ColumnChart';

ColumnChart.propTypes = {
  id: PropTypes.string,
  data: PropTypes.array,
  config: PropTypes.shape({
    bgColor: PropTypes.string,
    bgOpacity: PropTypes.number,
    colors: PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.string)]),
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    categoryText: PropTypes.string,
    legendLocation: PropTypes.number,
    labelXAxis: PropTypes.string,
    valueFields: PropTypes.arrayOf(PropTypes.string),
    opacity: PropTypes.number,
    seriesName: PropTypes.string,
    lineWidth: PropTypes.number,
    lineOpacity: PropTypes.number,
    minGridDistance: PropTypes.number,
  }),
};

ColumnChart.defaultProps = {
  id: 'chartdiv',
  config: {
    bgColor: colors.white,
    bgOpacity: 0.5,
    colors: [colors.red, colors.blue, colors.orange],
    width: '100%',
    heigth: '100%',
    categoryText: 'label',
    legendLocation: 0,
    labelXAxis: 'label',
    valueFields: ['value'],
    opacity: 0.8,
    seriesName: 'Items',
    lineWidth: 2,
    lineOpacity: 1,
    minGridDistance: 30,
  },
};

export { ColumnChart };
