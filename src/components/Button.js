import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonBox = styled.div`
  border: 1px #000 solid;
  background-color: #fff;
  padding: 15px 15px;
  font-size: 24px;
  width: 40px;
  height: 40px;
  line-height: 40px;
`;

class Button extends Component {
  render() {
    return <ButtonBox>{this.props.name}</ButtonBox>;
  }
}

Button.propTypes = {
  name: PropTypes.string
};

export default Button;
