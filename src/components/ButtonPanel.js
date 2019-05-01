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

  .number-tile {
    background-color: #fff;
    :hover {
      background-color: #d2d2d2;
      transition: 0.1s;
    }
  }
`;

class ButtonPanel extends Component {
  render() {
    return (
      <Container>
        <ButtonContainer>
          <Button name="CE" />
          <Button name="C" />
          <Button name="DEL" />
          <Button name="÷" />
        </ButtonContainer>
        <ButtonContainer>
          <Button name="7" className="number-tile" />
          <Button name="8" className="number-tile" />
          <Button name="9" className="number-tile" />
          <Button name="*" />
        </ButtonContainer>
        <ButtonContainer>
          <Button name="4" className="number-tile" />
          <Button name="5" className="number-tile" />
          <Button name="6" className="number-tile" />
          <Button name="-" />
        </ButtonContainer>
        <ButtonContainer>
          <Button name="1" className="number-tile" />
          <Button name="2" className="number-tile" />
          <Button name="3" className="number-tile" />
          <Button name="+" />
        </ButtonContainer>
        <ButtonContainer>
          <Button name="±" />
          <Button name="0" className="number-tile" />
          <Button name="." />
          <Button name="=" />
        </ButtonContainer>
      </Container>
    );
  }
}

export default ButtonPanel;
