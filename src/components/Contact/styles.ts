import styled from "styled-components";

export const Card = styled.div`
  width: 80%;
  padding: 16px;
  background-color: #ecf0f1;
  color: #2c3e50;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const InfosContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 8px;
  border-bottom: 4px solid rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  img {
    height: 50px;
    border-radius: 50%;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 8px;
  gap: 8px;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;
