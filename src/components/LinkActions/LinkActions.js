import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Span, A, Wrap, IconWrap, LinkLabel } from './styled';
import Icon from '../Icon/Icon';
import theme from '../../theme/theme';

const { palette } = theme || {};
const colors = palette.common || {};

const LinkActions = memo((props) => {
  const { hasFont, disabled, onClick, noPadding = false, items } = props;

  const handleClick = (event, item) => {
    event.preventDefault();
    if (typeof onClick === 'function') {
      onClick(item);
    }
  };

  return (
    <Span>
      {items.map((item, key) => {
        return (
          <Wrap key={key}>
            <A
              href={`${item.href || `#${item.text}`}`}
              disabled={disabled}
              onClick={(event) => handleClick(event, item)}
              noPadding={noPadding}
            >
              <IconWrap>{item.iconName && <Icon name={item.iconName} size='15' />}</IconWrap>
              <LinkLabel
                linkLabelFont={
                  hasFont
                    ? {
                        color: item.color,
                        textDecoration: item.textDecoration,
                        fontSize: item.fontSize,
                        lineHeight: item.lineHeight,
                      }
                    : { color: colors.black, textDecoration: 'none', fontSize: '12px', lineHeight: 'inherit' }
                }
              >
                {item.text}
              </LinkLabel>
            </A>
          </Wrap>
        );
      })}
    </Span>
  );
});

LinkActions.displayName = 'LinkActions';

LinkActions.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  linkLabelFont: PropTypes.object,
  hasFont: PropTypes.bool,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      iconName: PropTypes.string,
      fontSize: PropTypes.string,
      lineHeight: PropTypes.string,
    }),
  ),
  noPadding: PropTypes.bool,
};

LinkActions.defaultProps = {
  disabled: false,
  noPadding: false,
};

export { LinkActions };
