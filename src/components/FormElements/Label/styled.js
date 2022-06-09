import styled from 'styled-components';
import theme from '../../../theme/theme';

const StyledLabel = styled.label`
  display: inline-flex;
  flex-direction: ${({ toTheRight }) => (toTheRight === true ? 'row-reverse' : 'row')};
  align-items: center;
  font-size: 14px;
  padding: 0;

  span {
    line-height: 1.5;
  }
`;

export { StyledLabel };
