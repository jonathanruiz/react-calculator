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

  handleKeyDown = event => {
    if (event.keyCode === this.props.keyCode) {
      console.log(this.props.name);
    }
  };

  render() {
    return (
      <ButtonBox
        role="button"
        className={this.props.className}
        onKeyDown={this.handleKeyDown}
        keyCode={this.props.keyCode}
      >
        {this.props.name}
      </ButtonBox>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  keyCode: PropTypes.number
};

export default Button;
