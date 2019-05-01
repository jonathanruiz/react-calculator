import React from "react";
import styled from "styled-components";
import ButtonPanel from "./components/ButtonPanel";
import Display from "./components/Display";

const AppContainer = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 50px;
  max-width: 500px;
  user-select: none;
`;

const App = () => {
  return (
    <AppContainer>
      <Display />
      <ButtonPanel />
    </AppContainer>
  );
};

export default App;
