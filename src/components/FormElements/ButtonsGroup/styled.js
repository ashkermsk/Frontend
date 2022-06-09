import styled from 'styled-components';

export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: ${({ isVertical }) => (isVertical ? 'column' : 'row')};
  width: 100%;

  & > * {
    margin-right: ${({ isVertical }) => (isVertical ? '0' : '8px')};
    margin-bottom: ${({ isVertical }) => (isVertical ? '8px' : '0')};

    &:last-of-type {
      margin-right: 0;
      margin-bottom: 0;
    }
  }
`;

export const ItemBox = styled.div``;
