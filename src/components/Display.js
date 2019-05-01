import React, { Component } from "react";
import styled from "styled-components";

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
        <span>0</span>
      </DisplayBox>
    );
  }
}

export default Display;
