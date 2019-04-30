import React, { Component } from "react";
import Button from "./Button";
import styled from "styled-components";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

class ButtonPanel extends Component {
  render() {
    return (
      <Container>
        <ButtonContainer>
          <Button name="7" />
          <Button name="8" />
          <Button name="9" />
        </ButtonContainer>
        <ButtonContainer>
          <Button name="4" />
          <Button name="5" />
          <Button name="6" />
        </ButtonContainer>
        <ButtonContainer>
          <Button name="1" />
          <Button name="2" />
          <Button name="3" />
        </ButtonContainer>
        <ButtonContainer>
          <Button name="±" />
          <Button name="0" />
          <Button name="." />
        </ButtonContainer>
      </Container>
    );
  }
}

export default ButtonPanel;
