import React from "react";
import styled from "styled-components";

const AppContainer = styled.div`
  text-align: center;

  header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
`;

const App = () => {
  return (
    <AppContainer>
      <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </AppContainer>
  );
};

export default App;
