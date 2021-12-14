import React from "react";

import {
  ButtonSecondary,
  MainContainer,
  Container,
  Message,
} from "./errorModal.style";

const ErrorModal = (props) => {
  return (
    <MainContainer onClick={props.errorHandler}>
      <Container>
        <Message>{props.msg}</Message>
        <p>{props.title}</p>
        <ButtonSecondary onClick={props.errorHandler}>Okay</ButtonSecondary>
      </Container>
    </MainContainer>
  );
};

export default ErrorModal;
