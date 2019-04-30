import React from "react";
import styled from "styled-components";
import ButtonPanel from "./components/ButtonPanel";

const AppContainer = styled.div`
  text-align: center;
`;

const App = () => {
  return (
    <AppContainer>
      <ButtonPanel />
    </AppContainer>
  );
};

export default App;
