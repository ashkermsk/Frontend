import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button';

import { Container } from './styled';

const ButtonFilter = memo((props) => {
  const {
    filtersSelected,
    variant,
    variantFiltersApplied,
    text,
    icons,
    onClick,
    onReset,
    resetText,
    resetVariant,
    title,
    dataEl,
    resetTitle,
    resetDataEl,
  } = props;
  const canReset = typeof onReset === 'function' && filtersSelected > 0;
  const icons2use = icons;
  if (!Array.isArray(icons2use)) {
    console.error(
      `The 'ButtonFilter' component expects 'icons' prop to be an array with at least one element but got `,
      icons,
    );
    icons2use = [''];
  }
  const iconIdx =
    filtersSelected >= 0 && filtersSelected < icons2use.length - 1 ? filtersSelected : icons2use.length - 1;
  return (
    <Container>
      <Button
        text={canReset ? '' : text}
        variant={canReset ? variantFiltersApplied : variant}
        iconName={icons2use[iconIdx]}
        onClick={onClick}
        title={title}
        dataEl={dataEl}
      />
      {canReset && (
        <Button text={resetText} variant={resetVariant} onClick={onReset} title={resetTitle} dataEl={resetDataEl} />
      )}
    </Container>
  );
});

ButtonFilter.displayName = 'ButtonFilter';

ButtonFilter.propTypes = {
  variant: PropTypes.string,
  filtersSelected: PropTypes.number,
  onReset: PropTypes.func,
  icons: PropTypes.arrayOf(PropTypes.string),
  resetText: PropTypes.string,
  resetVariant: PropTypes.string,
  variantFiltersApplied: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
  dataEl: PropTypes.string,
  resetTitle: PropTypes.string,
  resetDataEl: PropTypes.string,
};

ButtonFilter.defaultProps = {
  filtersSelected: 0,
  variant: 'default',
  icons: [
    'FilterNone',
    'Filter1',
    'Filter2',
    'Filter3',
    'Filter4',
    'Filter5',
    'Filter6',
    'Filter7',
    'Filter8',
    'Filter9',
    'Filter9Plus',
  ],
  resetText: 'Reset',
  resetVariant: 'tertiary',
  variantFiltersApplied: 'success',
  text: 'Filters',
};

export { ButtonFilter };
