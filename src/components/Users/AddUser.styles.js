import styled from "styled-components";

export const Input = styled.input`
  width: 300px;
  height: 30px;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #f8f8f0;
  margin: 5px 0px;
  font-size: 1.2rem;
  border: 2px solid #f8f8f0;
  &:focus {
    border: 2px solid rgb(129, 129, 129);
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin: 3rem 0px;
  font-size: 1.3rem;
  font-weight: 500;
  background-color: #ffff;
  width: 500px;
  opacity: 0.75;
  border-radius: 15px;
  padding: 30px;
`;
export const FormLabel = styled.label`
  /* padding-top: 5px; */
  margin: 10px 0px;
`;

export const ButtonPrimary = styled.button`
  margin-top: 20px;
  width: 120px;
  height: 40px;
  font-size: 1.3rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  color: #ffff;
  background-color: #303030;
  &:active {
    transform: scale(0.95);
  }
`;

export const SmallMessge = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  margin: 0;
  padding: 0;
`;
