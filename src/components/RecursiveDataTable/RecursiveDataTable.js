import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import {
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Tooltip,
  TableSortLabel,
} from '@material-ui/core';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';

import { Icon } from '../Icon';
import { Button } from '../FormElements/Button';

import { colors } from '../../theme/colors';
import {
  BodyTableCell,
  HeaderTableCell,
  StyledButton,
  StyledCollapse,
  StyledTableRow,
  TableWrapper,
  StyledCollapseTextDiv,
  StyledCollapseDiv,
  useStyles,
} from './styled';

const RecursiveDataTable = (props) => {
  const {
    data,
    subHeaders,
    headers,
    dataIdField,
    expandIconName,
    collapseIconName,
    expandCollapePlacement,
    noHeaders,
    noSubHeaders,
    freezeColumns,
    indentStep,
    expandAllLabel,
    collapseAllLabel,
    hasStripes,
    onRequestSort = null,
    order = 'desc',
    orderBy = null,
    footer,
    showTooltipIfLongerThan,
    maxValues,
    mediumValues,
    withPadding,
  } = props;
  const [state, setState] = useState({});
  const [collapseAll, setCollapseAll] = useState(true);

  const classes = useStyles();

  if (!Array.isArray(data)) {
    console.error('The RecursiveDataTable component expects `data` prop to be an array but got:', data);
    return null;
  }

  if (!Array.isArray(subHeaders)) {
    console.error('The RecursiveDataTable component expects `headers` prop to be an array but got:', subHeaders);
    return null;
  }
  let arrayOfIds = [];
  const createArray = (dataChildren) => {
    if (dataChildren && dataChildren.children) {
      const ids = dataChildren.children.forEach((dataId) => {
        createArray(dataId);
        if (dataId.children && dataId.children.length > 0) arrayOfIds = [...arrayOfIds, dataId.id];
      });
      return ids;
    }
  };

  data.map((dataChildren) => createArray(dataChildren));

  if (state['parentTasks'] === undefined) {
    let newstate = { ...state, parentTasks: true };
    setState(newstate);
  }

  const extractIdsBasedOnParent = (parentItem) => {
    return parentItem.children.reduce((idList, ite) => {
      let childIdList = [];
      if (ite.children && ite.children.length) {
        childIdList = extractIdsBasedOnParent(ite);
      }
      return [...idList, ite.id, ...childIdList];
    }, []);
  };

  const handleClick = (item) => {
    let activeState = state;
    if (state[item.id]) {
      let idsList = [];
      if (item && item.children) {
        idsList = extractIdsBasedOnParent(item);
      }
      idsList.forEach((ids) => (activeState[ids] = false));
    }
    let newstate = { ...activeState, [item.id]: !activeState[item.id] };
    setState(newstate);
  };

  const expandClick = () => {
    setCollapseAll(!collapseAll);
    const newstate = arrayOfIds.reduce((acc, collapseId) => {
      let state = { ...state, [collapseId]: collapseAll };
      return { ...acc, ...state };
    }, {});
    setState({ parentTasks: true, ...newstate });
  };

  const renderTree = (nodes, collapseId, indent) => {
    indent = indent + indentStep;

    if (!Array.isArray(nodes.children)) {
      return null;
    }

    return (
      nodes &&
      nodes.children.map((dataRow, index) => {
        const key = `${dataIdField ? dataRow[dataIdField] : index}`;
        const lastRow = index === nodes.children.length - 1 ? true : false;
        return (
          <Fragment key={key}>
            {state[collapseId] && (
              <StyledTableRow
                hover
                collapse={Boolean(state[collapseId])}
                hasVerticalBorder={dataRow.hasVerticalBorder}
                hasHorizontalBottomBorder={dataRow.hasHorizontalBottomBorder}
                hasHorizontalTopBorder={dataRow.hasHorizontalTopBorder}
                data-el={key}
              >
                {subHeaders.map((subHeader, index) => {
                  const {
                    field,
                    onRender,
                    align,
                    hasBorder,
                    width,
                    minWidth,
                    maxWidth,
                    background = colors.lightGray,
                    bgColor,
                    maxColor,
                    mediumColor,
                  } = subHeader || {};

                  let valueToRender = dataRow[field];
                  let maxAndMediumColor = '';

                  if (maxValues && maxValues.includes(valueToRender)) maxAndMediumColor = maxColor;
                  else if (mediumValues && mediumValues.includes(valueToRender)) maxAndMediumColor = mediumColor;

                  if (typeof onRender === 'function') {
                    valueToRender = onRender({ column: subHeader, dataRow, columnIdx: index, value: valueToRender });
                  }
                  const backgroundColor = hasStripes ? null : background;
                  return (
                    <Tooltip
                      key={index}
                      title={
                        typeof valueToRender === 'string' && valueToRender.length > showTooltipIfLongerThan
                          ? valueToRender
                          : ''
                      }
                    >
                      <BodyTableCell
                        index={index}
                        hasBorder={hasBorder}
                        topLevelHeaders={dataRow.topLevelHeaders}
                        freezeColumns={freezeColumns}
                        width={width}
                        minWidth={minWidth}
                        maxWidth={maxWidth}
                        maxAndMediumColor={maxAndMediumColor}
                        background={hasStripes || bgColor ? backgroundColor : colors.white}
                        hasStripes={hasStripes}
                        leftWidth={
                          index <= freezeColumns
                            ? subHeaders.slice(0, index).reduce((a, b) => {
                                a = a + Number(b.width.replace('px', ''));
                                return a;
                              }, 0)
                            : 0
                        }
                        lastRowBold={footer && lastRow}
                        hasChildren={Array.isArray(dataRow.children) && dataRow.children.length > 0}
                        removeBottomBorder={dataRow.removeBottomBorder} // it has to be applyed to every cell
                      >
                        <StyledCollapse
                          in={Boolean(state[collapseId])}
                          timeout='auto'
                          unmountOnExit
                          indent={indent}
                          index={index}
                          freezeColumns={freezeColumns}
                        >
                          <StyledCollapseDiv align={align}>
                            {index === expandCollapePlacement &&
                              (Array.isArray(dataRow.children) && dataRow.children.length > 0 ? (
                                <StyledButton indent={indent} onClick={() => handleClick(dataRow)}>
                                  {state[dataRow[dataIdField]] ? (
                                    <Icon name={collapseIconName} size={24} />
                                  ) : (
                                    <Icon name={expandIconName} size={24} />
                                  )}
                                </StyledButton>
                              ) : (
                                <StyledButton indent={indent}></StyledButton>
                              ))}
                            <StyledCollapseTextDiv>{valueToRender}</StyledCollapseTextDiv>
                          </StyledCollapseDiv>
                        </StyledCollapse>
                      </BodyTableCell>
                    </Tooltip>
                  );
                })}
              </StyledTableRow>
            )}
            {Array.isArray(dataRow.children) && dataRow.children.length > 0
              ? renderTree(dataRow, dataRow[dataIdField], indent)
              : null}
          </Fragment>
        );
      })
    );
  };

  return (
    <TableWrapper withPadding={withPadding}>
      <TableContainer component={Paper}>
        <Table classes={classes}>
          {!noHeaders && (
            <TableHead>
              {headers}
              <TableRow>
                {!noSubHeaders &&
                  subHeaders.map((subHeader, index) => {
                    const {
                      field,
                      headerName,
                      headerClassName,
                      onHeaderRenderer,
                      hasBorder,
                      width,
                      minWidth,
                      maxWidth,
                      whiteSpace,
                      overflow,
                      headerAlign,
                      background = colors.lightGray,
                      color,
                      sortable = false,
                      bgColor,
                    } = subHeader || {};

                    let renderValue = headerName;

                    if (typeof onHeaderRenderer === 'function') {
                      renderValue = onHeaderRenderer(subHeader);
                    }

                    const backgroundColor = hasStripes ? null : background;

                    return (
                      <HeaderTableCell
                        isTitle
                        key={field}
                        className={headerClassName}
                        minWidth={minWidth}
                        maxWidth={maxWidth}
                        width={width}
                        whiteSpace={whiteSpace}
                        overflow={overflow}
                        align={headerAlign}
                        index={index}
                        hasBorder={hasBorder}
                        freezeColumns={freezeColumns}
                        background={hasStripes || bgColor ? backgroundColor : colors.white}
                        color={color}
                        hasStripes={hasStripes}
                        leftWidth={
                          index <= freezeColumns
                            ? subHeaders.slice(0, index).reduce((a, b) => {
                                a = a + Number(b.width.replace('px', ''));
                                return a;
                              }, 0)
                            : 0
                        }
                      >
                        {index === expandCollapePlacement && (
                          <StyledButton onClick={() => expandClick()} expandCollapePlacement={expandCollapePlacement}>
                            {collapseAll ? (
                              <Button variant='tertiary' text={expandAllLabel} iconName={'expandAll'} />
                            ) : (
                              <Button variant='tertiary' text={collapseAllLabel} iconName={'collapseAll'} />
                            )}
                          </StyledButton>
                        )}
                        {sortable && onRequestSort && (
                          <TableSortLabel
                            classes={{
                              icon: orderBy === field ? classes.activeSortIcon : classes.inactiveSortIcon,
                              active: classes.active,
                            }}
                            active={orderBy === field}
                            IconComponent={ArrowDropDown}
                            direction={orderBy === field ? order : 'desc'} // default desc for inactive
                            onClick={() => {
                              onRequestSort(field, order);
                            }}
                          >
                            {renderValue}
                          </TableSortLabel>
                        )}
                        {((sortable && !onRequestSort) || !sortable) && renderValue}
                      </HeaderTableCell>
                    );
                  })}
              </TableRow>
            </TableHead>
          )}
          <TableBody>{data.map((dataChildren) => renderTree(dataChildren, 'parentTasks', 0))}</TableBody>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
};

RecursiveDataTable.displayName = 'RecursiveDataTable';

RecursiveDataTable.propTypes = {
  data: PropTypes.array,
  dataIdField: PropTypes.string,
  headers: PropTypes.node, // Main headers,
  footer: PropTypes.bool,
  subHeaders: PropTypes.arrayOf(
    // Subheader
    PropTypes.shape({
      field: PropTypes.string,
      headerName: PropTypes.string,
      width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      minWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      maxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      whiteSpace: PropTypes.string,
      overflow: PropTypes.string,
      // type: 'number',
      headerClassName: PropTypes.string,
      headerAlign: PropTypes.oneOf(['left', 'center', 'right']),
      align: PropTypes.oneOf(['left', 'center', 'right']),
      onHeaderRenderer: PropTypes.func,
      onRender: PropTypes.func,
      sortable: PropTypes.bool,
      bgColor: PropTypes.bool,
    }),
  ),
  onChange: PropTypes.func,
  handleSwitch: PropTypes.func,
  handleDropdown: PropTypes.func,
  expandIconName: PropTypes.string,
  collapseIconName: PropTypes.string,
  expandCollapePlacement: PropTypes.number,
  freezeColumns: PropTypes.number,
  noHeaders: PropTypes.bool,
  noSubHeaders: PropTypes.bool,
  indentStep: PropTypes.number,
  expandAllLabel: PropTypes.string,
  onRequestSort: PropTypes.func,
  order: PropTypes.oneOf(['asc', 'desc']),
  orderBy: PropTypes.string,
  footer: PropTypes.bool,
  collapseAllLabel: PropTypes.string,
  hasStripes: PropTypes.bool,
  showTooltipIfLongerThan: PropTypes.number,
  maxValues: PropTypes.array,
  mediumValues: PropTypes.array,
  withPadding: PropTypes.bool,
};

RecursiveDataTable.defaultProps = {
  dataIdField: 'id',
  expandIconName: 'ArrowRight',
  collapseIconName: 'ArrowDropDown',
  expandCollapePlacement: 0,
  noHeaders: false,
  noSubHeaders: false,
  indentStep: 15,
  expandAllLabel: '',
  collapseAllLabel: '',
  hasStripes: false,
  footer: false,
  onRequestSort: null,
  order: 'desc',
  orderBy: '',
  withPadding: true,
  showTooltipIfLongerThan: 100,
};

export { RecursiveDataTable };
