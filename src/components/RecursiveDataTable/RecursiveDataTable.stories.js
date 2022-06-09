import React from 'react';
import PropTypes from 'prop-types';
import { RecursiveDataTable } from './RecursiveDataTable';
import { colors } from '../../theme/colors';
import { Currency } from '../Currency';
import { Dropdown } from '../FormElements/Dropdown';
import { TableRow, TableCell } from '@material-ui/core';
import { data } from './data';

const DisplayColumn = (props) => {
  const { value } = props || {};
  return <Currency value={value} />;
};

DisplayColumn.propTypes = {
  value: PropTypes.any,
};

DisplayColumn.displayName = 'DisplayColumn';

const dropDownItems = [
  {
    label: 'React',
    value: 'React',
  },
  {
    label: 'Redux',
    value: 'Redux',
  },
  {
    label: 'Flux',
    value: 'Flux',
  },
];

const subHeaders = [
  {
    field: 'title',
    headerName: 'Name',
    width: '250px',
    minWidth: '250px',
    maxWidth: '250px',
    headerClassName: '',
    headerAlign: 'left',
    align: 'left',
    showTooltipIfLongerThan: true,
  },
  {
    field: 'glCode',
    headerName: 'GL Code',
    width: '120px',
    minWidth: '120px',
    headerClassName: '',
    headerAlign: 'left',
    align: 'left',
    color: `${colors.blue}`,
    background: 'white',
  },
  {
    field: 'jan',
    headerName: 'Jan',
    width: '80px',
    minWidth: '80px',
    maxWidth: '50px',
    headerClassName: '',
    headerAlign: 'center',
    align: 'left',
    onRender: DisplayColumn,
    hasBorder: true,
    maxColor: colors.red,
    mediumColor: colors.orange,
  },
  {
    field: 'feb',
    headerName: 'Feb',
    width: '80px',
    minWidth: '80px',
    headerClassName: '',
    headerAlign: 'center',
    align: 'center',
    onRender: DisplayColumn,
    align: 'left',
  },
  {
    field: 'mar',
    headerName: 'Mar',
    width: '80px',
    minWidth: '80px',
    headerClassName: '',
    headerAlign: 'center',
    align: 'center',
    onRender: DisplayColumn,
    hasBorder: true,
    hasVerticalBorder: true,
    maxColor: colors.red,
    mediumColor: colors.orange,
  },
  {
    field: 'apr',
    headerName: 'Apr',
    width: '80px',
    minWidth: '80px',
    headerClassName: '',
    headerAlign: 'center',
    align: 'left',
    onRender: DisplayColumn,
  },
  {
    field: 'may',
    headerName: 'May',
    width: '80px',
    minWidth: '80px',
    headerClassName: '',
    headerAlign: 'center',
    align: 'left',
    onRender: DisplayColumn,
  },
  {
    field: 'jun',
    headerName: 'Jun',
    width: '80px',
    minWidth: '80px',
    headerClassName: '',
    headerAlign: 'center',
    align: 'left',
    onRender: DisplayColumn,
  },
  {
    field: 'jul',
    headerName: 'Jul',
    width: '80px',
    minWidth: '80px',
    headerClassName: '',
    headerAlign: 'center',
    align: 'left',
    onRender: DisplayColumn,
  },
  {
    field: 'aug',
    headerName: 'Aug',
    width: '80px',
    minWidth: '80px',
    headerClassName: '',
    headerAlign: 'center',
    align: 'left',
    onRender: DisplayColumn,
  },
  {
    field: 'sep',
    headerName: 'Sep',
    width: '80px',
    minWidth: '80px',
    headerClassName: '',
    headerAlign: 'center',
    align: 'left',
    onRender: DisplayColumn,
  },
  {
    field: 'oct',
    headerName: 'Oct',
    width: '80px',
    minWidth: '80px',
    headerClassName: '',
    headerAlign: 'center',
    align: 'left',
    onRender: DisplayColumn,
  },
  {
    field: 'nov',
    headerName: 'Nov',
    width: '80px',
    minWidth: '80px',
    headerClassName: '',
    headerAlign: 'center',
    align: 'left',
    onRender: DisplayColumn,
  },
  {
    field: 'dec',
    headerName: '',
    width: '80px',
    minWidth: '80px',
    headerClassName: '',
    headerAlign: 'center',
    align: 'left',
    onRender: DisplayColumn,
  },
  {
    field: 'total',
    headerName: 'Total',
    width: '80px',
    minWidth: '80px',
    headerClassName: '',
    headerAlign: 'left',
    align: 'left',
    onRender: DisplayColumn,
    maxColor: colors.red,
    mediumColor: colors.orange,
  },
  {
    field: 'compareTo',
    headerName: 'Compare',
    width: '80px',
    minWidth: '80px',
    headerClassName: '',
    headerAlign: 'left',
    align: 'left',
    onRender: DisplayColumn,
  },
  {
    field: 'variance',
    headerName: 'Variance',
    width: '80px',
    minWidth: '80px',
    headerClassName: '',
    headerAlign: 'left',
    align: 'left',
    onRender: DisplayColumn,
    maxColor: colors.red,
    mediumColor: colors.orange,
  },
  {
    field: 'dropdown',
    headerName: 'DropDown',
    minWidth: '120px',
    headerAlign: 'left',
    align: 'left',
    onRender: DisplayDropdown,
  },
];

const DisplayDropdown = (props) => {
  const { value } = props || {};
  return <Dropdown value={value} items={dropDownItems} />;
};

DisplayDropdown.propTypes = {
  value: PropTypes.any,
};

DisplayDropdown.displayName = 'DisplayDropdown';

const maxValues = [33114, 9.528082930157279];
const mediumValues = [3188.48, 0, 3404.03, 37419.61, 0];

const headers = (
  <TableRow>
    <TableCell>ACTUAL</TableCell>
  </TableRow>
);

export const RecursiveDataTableComponent = (args) => {
  return <RecursiveDataTable headers={headers} {...args} />;
};

export const RecursiveDataTableComponentWithFreezeColumns = (args) => {
  return <RecursiveDataTable headers={headers} {...args} />;
};

export default {
  title: 'Components/RecursiveDataTable',
  component: RecursiveDataTable,
  argTypes: {
    data: {
      control: {
        type: 'object',
      },
      defaultValue: [...data],
    },
    dataIdField: {
      control: {
        type: 'text',
      },
      defaultValue: 'id',
    },
    expandIconName: {
      control: {
        type: 'text',
      },
      defaultValue: 'ArrowRight',
    },
    collapseIconName: {
      control: {
        type: 'text',
      },
      defaultValue: 'ArrowDropDown',
    },
    expandCollapePlacement: {
      control: {
        type: 'number',
      },
      defaultValue: 0,
    },
    noHeaders: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    indentStep: {
      control: {
        type: 'number',
      },
      defaultValue: 15,
    },
    expandAllLabel: {
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
    collapseAllLabel: {
      control: {
        type: 'text',
      },
      defaultValue: '',
    },
    hasStripes: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    footer: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    withPadding: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    showTooltipIfLongerThan: {
      control: {
        type: 'number',
      },
      defaultValue: 100,
    },
    freezeColumns: {
      control: {
        type: 'number',
      },
      defaultValue: 0,
    },
    subHeaders: {
      control: {
        type: 'object',
      },
      defaultValue: [...subHeaders],
    },
    maxValues: {
      control: {
        type: 'array',
      },
      defaultValue: [...maxValues],
    },
    mediumValues: {
      control: {
        type: 'array',
      },
      defaultValue: [...mediumValues],
    },
  },
};
