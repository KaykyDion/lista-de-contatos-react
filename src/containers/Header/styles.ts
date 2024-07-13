import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  background-color: #ecf0f1;
  padding: 20px;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`;
