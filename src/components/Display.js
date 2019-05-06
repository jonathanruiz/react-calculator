import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const DisplayBox = styled.div`
  background-color: #fff;
  width: 260px;
  padding: 20px 0;
  margin: 0 auto;
  text-align: right;
  padding-right: 30px;
  margin-bottom: 10px;

  span {
    font-size: 26px;
    font-weight: bold;
    width: 100%;
  }
`;

class Display extends Component {
  render() {
    return (
      <DisplayBox>
        <span>{this.props.value}</span>
      </DisplayBox>
    );
  }
}

Display.propTypes = {
  value: PropTypes.number
};

export default Display;
