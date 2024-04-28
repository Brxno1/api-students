import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Title = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  label {
    width: 180px;
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #EEE;
    margin: 30px auto;
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;
    border: 3px dashed ${colors.PrimaryColor};
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 180px;
    height: 180px;
  }
  input {
    display: none;
  }
`;
