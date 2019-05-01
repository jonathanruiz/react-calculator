import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonBox = styled.div`
  background-color: #e3e3e3;
  margin: 2px;
  padding: 15px 15px;

  font-size: 24px;
  width: 40px;
  height: 40px;
  line-height: 40px;

  :hover {
    background-color: #c2c2c2;
    transition: 0.1s;
  }
`;

class Button extends Component {
  componentDidMount = () => {
    document.addEventListener("keydown", this.handleKeyDown);
  };

  determineKey = key => {
    switch (key) {
      case "DEL":
        console.log("This will delete one digit");
        break;
      case "+":
        console.log("This will add the value");
        break;
      case "-":
        console.log("This will subtract the value");
        break;
      case "*":
        console.log("This will multiply the number");
        break;
      case "/":
        console.log("This will divide the value");
        break;
      case "=":
        console.log("This will find the value");
        break;
      case ".":
        console.log("This will place a decimal");
        break;
      default:
        console.log(`This is the number: ${this.props.name}`);
        break;
    }
  };

  handleClick = () => {
    this.determineKey();
  };

  handleKeyDown = event => {
    if (event.keyCode === this.props.keyCode) {
      this.determineKey(this.props.name);
    }
  };

  render() {
    return (
      <ButtonBox
        role="button"
        keyCode={this.props.keyCode}
        className={this.props.className}
        onClick={this.handleClick}
        onKeyDown={this.handleKeyDown}
      >
        {this.props.name}
      </ButtonBox>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  keyCode: PropTypes.number
};

export default Button;
