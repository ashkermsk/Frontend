import styled from 'styled-components';
import { Button as ButtonMaterialUi } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { calcCssSize } from '../../../utils/propHelpers';

export const sizes = {
  small: {
    height: '35px',
    minWidth: '35px',
  },
  large: {
    height: '55px',
    minWidth: '55px',
  },
};

const getButtonSize = ({ size }) => {
  return sizes[size] || sizes.small;
};

export const variantNames = ['default', 'primary', 'secondary', 'success', 'tertiary', 'alert', 'none'];
export const sizesNames = Object.keys(sizes);

export const Variants = () => {
  const theme = useTheme();
  const { common } = theme.palette || {};

  return {
    default: {
      default: {
        color: common.blue,
        background: common.white,
        borderColor: common.gray,
      },
      hover: {
        background: common.lightGray,
      },
      active: {
        boxShadow: `0 0 4px 1px ${common.lightBlue}`,
      },
      disabled: {
        cursor: 'default',
        opacity: 0.8,
      },
    },
    primary: {
      default: {
        color: common.white,
        background: common.green,
        borderColor: common.green,
      },
      hover: {
        background: common.darkGreen,
      },
      active: {
        boxShadow: `0 0 4px 1px ${common.lightBlue}`,
      },
      disabled: {
        cursor: 'default',
        opacity: 0.8,
      },
    },
    secondary: {
      default: {
        color: common.black,
        background: common.lightGreen,
        borderColor: common.green,
      },
      hover: {
        background: common.lightGreen,
      },
      active: {
        boxShadow: `0 0 4px 1px ${common.lightBlue}`,
      },
      disabled: {
        cursor: 'default',
        opacity: 0.8,
      },
    },
    success: {
      default: {
        color: common.white,
        background: common.blue,
        borderColor: common.blue,
      },
      hover: {
        background: common.blue,
      },
      active: {
        boxShadow: `0 0 4px 1px ${common.lightBlue}`,
      },
      disabled: {
        cursor: 'default',
        opacity: 0.8,
      },
    },
    tertiary: {
      default: {
        color: common.blue,
        borderColor: common.white,
      },
      hover: {
        background: common.lightGray,
      },
      active: {
        boxShadow: `0 0 4px 1px ${common.lightBlue}`,
        background: common.lightGray,
      },
      disabled: {
        cursor: 'default',
        opacity: 0.8,
      },
    },
    alert: {
      default: {
        color: common.white,
        background: common.red,
        borderColor: common.red,
      },
      hover: {
        background: common.red,
      },
      active: {
        boxShadow: `0 0 4px 1px ${common.plum}`,
      },
      disabled: {
        cursor: 'default',
        opacity: 0.8,
      },
    },
    none: {
      default: {
        color: 'currentColor',
        background: 'transparent',
        borderColor: 'transparent',
      },
      hover: {
        background: 'transparent',
      },
      active: {},
      disabled: {
        cursor: 'default',
        opacity: 0.8,
      },
    },
  };
};

const getButtonVariant = (state) => (props) => {
  const { mdo_variant, disabled } = props;
  const variants = Variants();
  const variant2use = variants[mdo_variant] || variants.primary;

  return disabled
    ? {
        ...variant2use.default,
        ...(disabled && variant2use.disabled),
      }
    : {
        ...variant2use.default,
        ...variant2use[state],
      };
};

export const TButton = styled(ButtonMaterialUi)`
  &.tbutton {
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    font-size: 14px;
    padding: ${({ just_icon }) => (just_icon === 'true' ? '0' : '0 10px')};
    font-weight: bold;
    cursor: pointer;
    text-transform: initial;
    transition: background 0.8s;
    width: ${({ width }) => (width ? calcCssSize(width) : 'auto')};
    ${getButtonSize};
    ${getButtonVariant('default')};
    &:hover {
      ${getButtonVariant('hover')};
      box-shadow: none;
    }
    &:active {
      ${getButtonVariant('active')};
    }
    &:focus {
      box-shadow: none;
    }
    & > span > div + span {
      padding-left: 5px;
      padding-right: 5px;
    }
  }
`;
