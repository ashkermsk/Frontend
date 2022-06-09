import styled from 'styled-components';
import theme from '../../theme/theme';

import { calcCssSize, boxShadow } from '../../utils/propHelpers';

const { palette } = theme || {};
const colors = palette.common || {};

export const CardTitleDiv = styled.div`
  display: block;
  text-align: center;
`;

export const ChartDiv = styled.div`
  display: block;
  border: none;
  background-color: ${colors.white};
  border: 1px solid ${colors.grey};
  border-radius: 20px;
  padding: 20px 0px 40px 0px;
  box-sizing: border-box;
  white-space: nowrap;
  box-shadow: ${({ elevation }) => boxShadow(elevation || 0)};
  width: ${({ width }) => calcCssSize(width || '100%')};
  height: ${({ height }) => calcCssSize(height || '100%')};
`;
