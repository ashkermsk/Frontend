import styled from 'styled-components';
import { colors } from '../../theme/colors';

const getDisabled = (props) => {
  const { disabled } = props;

  return disabled
    ? {
        cursor: 'default',
        opacity: 0.6,
      }
    : {
        cursor: 'pointer',
      };
};

const getNoPadding = (props) => {
  const { noPadding } = props;
  return noPadding ? '0px' : '12px';
};

const Span = styled.span`
  display: flex;
  flex-direction: row;
`;

const LinkLabel = styled.span`
  color: ${(props) => props.linkLabelFont.color};
  text-decoration: ${(props) => props.linkLabelFont.textDecoration};
  font-size: ${(props) => props.linkLabelFont.fontSize} !important;
  line-height: ${(props) => props.linkLabelFont.lineHeight} !important;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;

  &:first-child {
    a {
      border: none;
    }
  }
`;

const A = styled.a`
  ${getDisabled}
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${colors.blue};
  font-size: 12px;
  text-decoration: none;
  padding-left: ${getNoPadding};
  padding-right: ${getNoPadding};
  span {
    line-height: 1.2;
  }
`;

const IconWrap = styled.span`
  div {
    margin-right: 5px;
  }
`;

export { Span, A, Wrap, IconWrap, LinkLabel };
