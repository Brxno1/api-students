import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 12px 0 12px 0;

  input {
    margin-bottom: 16px;
    height: 30px;
    padding: 0 10px;
    font-size: 12px;
    border-radius: 4px;
    border: 1px solid #EEE;

    &:focus {
      border: 1px solid ${colors.PrimaryColor};
    }
  }
`;
