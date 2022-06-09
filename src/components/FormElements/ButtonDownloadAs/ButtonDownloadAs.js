import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { ButtonDropdown } from '../ButtonDropdown/ButtonDropdown';

const defaultItems = [
  { label: 'CSV', value: 'csv', icon: '' },
  { label: 'Excel', value: 'excel', icon: '' },
  { label: 'PDF', value: 'pdf', icon: '' },
];

const ButtonDownloadAs = memo((props) => {
  const { exclude, ...rest } = props;

  let items = Array.isArray(exclude) ? defaultItems.filter((item) => exclude.indexOf(item.value) === -1) : defaultItems;

  return <ButtonDropdown {...rest} items={items} />;
});

ButtonDownloadAs.displayName = 'ButtonDownloadAs';
ButtonDownloadAs.options = defaultItems.map((item) => item.value);
ButtonDownloadAs.propTypes = {
  ...ButtonDropdown.propTypes,
  exclude: PropTypes.array,
};

ButtonDownloadAs.defaultProps = {
  text: 'Download',
  iconName: 'CloudDownloadSharp',
};

export { ButtonDownloadAs };
