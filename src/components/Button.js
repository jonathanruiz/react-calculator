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
  render() {
    return (
      <ButtonBox role="button" className={this.props.className}>
        {this.props.name}
      </ButtonBox>
    );
  }
}

Button.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string
};

export default Button;
