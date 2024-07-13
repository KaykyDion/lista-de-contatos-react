import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    color: #2c3e50;
  }
`;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
`;

export const Button = styled.button`
  padding: 8px;
  font-size: 16px;
  color: #fff;
  background-color: #3498db;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    background-color: #2980b9;
  }
`;

export const RemoveButton = styled(Button)`
  background-color: #e74c3c;

  &:hover {
    background-color: #c0392b;
  }
`;

export const SaveButton = styled(Button)`
  background-color: #2ecc71;

  &:hover {
    background-color: #27ae60;
  }
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 8px;
`;

export default GlobalStyle;
