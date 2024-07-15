import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 20px;
  background-color: #ecf0f1;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 500px) {
    width: 300px;
  }
`;
