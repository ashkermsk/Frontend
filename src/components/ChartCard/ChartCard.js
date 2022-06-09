import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '../Typography/Typography';
import { CardTitleDiv, ChartDiv } from './styled';

const ChartCard = memo((props) => {
  const { title, height, width, elevation, children } = props;

  return (
    <ChartDiv height={height} width={width} elevation={elevation}>
      {title && (
        <CardTitleDiv>
          <Typography variant='h5'>{title}</Typography>
        </CardTitleDiv>
      )}
      {children}
    </ChartDiv>
  );
});

ChartCard.displayName = 'ChartCard';

ChartCard.elevations = [0, 1];

ChartCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.string]),
  elevation: PropTypes.oneOf(ChartCard.elevations),
};

ChartCard.defaultProps = {
  width: '100%',
  height: '100%',
  elevation: 0,
};

export { ChartCard };
