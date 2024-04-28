import styled from 'styled-components';
import * as colors from '../../config/colors';

export const TitleRegister = styled.h1`
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    font-weight: 500;
  }

  input {
    height: 30px;
    font-size: 12px;
    border: 1px solid #EEE;
    border-radius: 4px;
    margin-top: 4px;
    padding: 0 10px;

    &:focus {
      border: 1px solid ${colors.PrimaryColor};
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    }
  }
`;
