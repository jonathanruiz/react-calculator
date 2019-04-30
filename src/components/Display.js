import React, { Component } from "react";
import styled from "styled-components";

const DisplayBox = styled.div`
  background-color: #fff;
  width: 90%;
  margin: 0 auto;
  text-align: right;
  padding-right: 10px;
`;

class Display extends Component {
  render() {
    return (
      <DisplayBox>
        <h2>0</h2>
      </DisplayBox>
    );
  }
}

export default Display;
