import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Nav = styled.nav`
  background: ${colors.PrimaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #FFF;
    margin: 0 10px 0 0;
    font-weight: bold;

  }
`;
