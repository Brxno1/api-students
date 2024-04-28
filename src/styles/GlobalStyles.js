import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';

import 'react-toastify/ReactToastify.css';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  font-family: sans-serif;
  background: ${colors.PrimaryDarkColor};
  color: ${colors.PrimaryDarkColor};
}

html, body, #root {
  height: 100%;
}

 button {
  margin: 0 auto;
  width: max-content;
  cursor: pointer;
  background: ${colors.PrimaryColor};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
  transition: all 300ms;
 }

 button:hover {
  filter: brightness(85%)
 }

a {
  text-decoration: none;
  color: ${colors.PrimaryColor};
}

small {
  background: #66FF33;
  color: rgba(0, 0, 0, 20);
  padding: 4px;
  border-radius: 4px;
  font-size: 8pt;
}

ul {
  list-style: none;
}
`;

export const Container = styled.section`
  max-width: 460px;
  background: #FFf;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
