import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: rgba(48, 48, 48, 0.452);
  color: #ffff;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
`;
export const Container = styled.div`
  background-color: #ffff;
  padding: 40px;
  border-radius: 10px;
`;

export const ButtonSecondary = styled.button`
  margin-top: 20px;
  width: 120px;
  height: 40px;
  font-size: 1.3rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: #ffff;
  background-color: #303030d9;
  &:active {
    transform: scale(0.95);
  }
`;
export const Message = styled.div`
  width: 500px;
  height: 40px;
  background-color: #ffff;
  color: #303030;
  font-size: 1.4rem;
`;
