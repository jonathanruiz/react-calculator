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
          <Button keyCode={8 || 46} name="DEL" />
          <Button keyCode={111} name="÷" />
        </ButtonContainer>
        <ButtonContainer>
          <Button keyCode={55} name={7} className="number-tile" />
          <Button keyCode={56} name={8} className="number-tile" />
          <Button keyCode={57} name={9} className="number-tile" />
          <Button keyCode={106} name="*" />
        </ButtonContainer>
        <ButtonContainer>
          <Button keyCode={52} name={4} className="number-tile" />
          <Button keyCode={53} name={5} className="number-tile" />
          <Button keyCode={54} name={6} className="number-tile" />
          <Button keyCode={109} name="-" />
        </ButtonContainer>
        <ButtonContainer>
          <Button keyCode={49} name={1} className="number-tile" />
          <Button keyCode={50} name={2} className="number-tile" />
          <Button keyCode={51} name={3} className="number-tile" />
          <Button keyCode={107} name="+" />
        </ButtonContainer>
        <ButtonContainer>
          <Button name="±" />
          <Button keyCode={48} name={0} className="number-tile" />
          <Button keyCode={190} name="." />
          <Button keyCode={13} name="=" />
        </ButtonContainer>
      </Container>
    );
  }
}

export default ButtonPanel;
