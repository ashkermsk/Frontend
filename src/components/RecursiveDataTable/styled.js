import React from 'react';
import styled from 'styled-components';
import theme from '../../theme/theme';
import TableRow from '@material-ui/core/TableRow';
import { calcCssSize } from '../../utils/propHelpers';
import { makeStyles } from '@material-ui/core/styles';
import { Collapse, TableCell } from '@material-ui/core';

export const useStyles = makeStyles({
  // Fully visible for active icons
  activeSortIcon: {
    opacity: 1,
    color: `${theme.palette.common.darkBlue} !important`,
  },
  // Half visible for inactive icons
  inactiveSortIcon: {
    opacity: 0.25,
    color: `${theme.palette.common.darkBlue} !important`,
  },
  active: {
    color: `${theme.palette.common.darkBlue} !important`,
  },
});

export const HeaderTableCell = styled(TableCell).attrs((props) => {
  const {
    className,
    width,
    minWidth,
    maxWidth,
    align,
    freezeColumns,
    leftWidth,
    background,
    color,
    fontSize,
    whiteSpace,
    overflow,
  } = props || {};
  const attrs = {};

  if (className) {
    attrs['class'] = className;
  }

  const backgroundColor = props.index % 2 || background ? theme.palette.common.white : theme.palette.common.lightGray;

  return {
    ...attrs,
    style: {
      textAlign: align || 'left',
      width: calcCssSize(width),
      minWidth: calcCssSize(minWidth),
      maxWidth: calcCssSize(maxWidth),
      paddingLeft: '10px',
      paddingRight: '10px',
      paddingTop: '0px',
      paddingBottom: '0px',
      backgroundColor: props.hasStripes ? backgroundColor : background,
      borderRight: props.hasBorder ? `1px solid ${theme.palette.common.mediumGray}` : 'none',
      //borderBottom: 'none',
      fontWeight: 'bold',
      color: color || `${theme.palette.common.darkBlue}`,
      position: props.index <= freezeColumns ? 'sticky' : 'static',
      zIndex: props.index <= freezeColumns ? 1 : 0,
      left: props.index <= freezeColumns ? `${leftWidth}px` : 0,
      fontSize: fontSize || '12px',
      whiteSpace: whiteSpace || 'initial',
      overflow: overflow || 'initial',
    },
  };
})`
  box-sizing: border-box;
  color: ${theme.palette.common.blue};
  text-align: center;
  height: 30px;
`;

export const StyledTableRow = styled(
  ({ collapse, hasHorizontalTopBorder, hasHorizontalBottomBorder, hasVerticalBorder, ...rest }) => (
    <TableRow {...rest} />
  ),
)`
  border-color: ${({ collapse }) => (collapse ? 'red' : 'none')};
  border-top: ${({ hasHorizontalTopBorder }) =>
    hasHorizontalTopBorder ? `4px solid ${theme.palette.common.grey}` : ''};
  border-bottom: ${({ hasHorizontalBottomBorder, hasVerticalBorder }) =>
    hasHorizontalBottomBorder || hasVerticalBorder ? `4px solid ${theme.palette.common.grey}` : ''};
  height: ${({ collapse }) => (collapse ? '40px' : 0)};
`;

export const StyledTableHeaderRow = styled(TableRow)`
  height: 40px;
`;

export const StyledTableCell = styled(TableCell)`
  background-color: ${theme.palette.common.lightGray};
  padding: 0;
  max-width: 140px;
  min-width: 70px;
  font-family: ${theme.typography.fontFamily} !important;
  font-size: ${theme.typography.fontSize};
  height: 57px;
  line-height: 0 !important;
`;

export const StyledButton = styled.button`
  margin-left: ${(props) => props.indent - 21}px;
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  vertical-align: middle;
`;

export const BodyTableCell = styled(TableCell).attrs((props) => {
  const {
    align,
    freezeColumns,
    width,
    minWidth,
    maxWidth,
    leftWidth,
    background,
    lastRowBold,
    topLevelHeaders,
    maxAndMediumColor,
    noBorderBottom,
    hasChildren,
    removeBottomBorder,
  } = props || {};

  const backgroundColor = props.index % 2 || background ? theme.palette.common.white : theme.palette.common.lightGray;

  return {
    style: {
      backgroundColor: maxAndMediumColor ? maxAndMediumColor : props.hasStripes ? backgroundColor : background,
      padding: '0 10px',
      textAlign: align || 'left',
      fontSize: '12px',
      borderRight: props.hasBorder ? `1px solid ${theme.palette.common.mediumGray}` : 'none',
      lineHeight: 0,
      width: width,
      minWidth: minWidth,
      maxWidth: maxWidth,
      position: props.index <= freezeColumns ? 'sticky' : 'static',
      zIndex: props.index <= freezeColumns ? 1 : 0,
      left: props.index <= freezeColumns ? `${leftWidth}px` : 0,
      whiteSpace: 'nowrap',
      fontWeight: topLevelHeaders || lastRowBold || hasChildren ? 'bold' : 'normal',
      borderBottom: noBorderBottom || removeBottomBorder ? 'none' : '',
    },
  };
})``;

export const StyledCollapse = styled(Collapse).attrs((props) => {
  return {
    style: {
      marginLeft: props.index == props.freezeColumns ? `${props.indent}px` : '0',
      height: 'auto',
    },
  };
})``;

export const TableWrapper = styled.div.attrs((props) => {
  return {
    style: {
      paddingLeft: props.withPadding ? '15px' : '0',
      paddingRight: props.withPadding ? '15px' : '0',
    },
  };
})``;

export const StyledCollapseDiv = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: ${(props) =>
    props.align === 'right' ? 'flex-end' : props.align === 'center' ? 'center' : 'flex-start'};
`;

export const StyledCollapseTextDiv = styled.div`
  white-space: nowrap;
  max-width: 660px;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
  line-height: 24px;
`;
