import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export const ProfilePicture = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 0 20px;

  img {
    width: 130px;
    height: 130px;
    border-radius: 50%;
  }

  a {
    width: 36px;
    height: 36px;
    display: flex;
    padding: 9px;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    position: absolute;
    bottom: 0;
    color: #FFF;
    background: ${colors.PrimaryColor};
  }
`;

export const Title = styled.h1`
  text-align: center;
`;

export const Input = styled.input`
  height: 30px;
  font-size: 12px;
  border: 1px solid #EEE;
  border-radius: 4px;
  margin-bottom: 15px;
  padding: 0 8px;
    &:focus {
      border: 1px solid ${colors.PrimaryColor};
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }
`;
