import React from "react";
import './App.css';
import Page from "./pages/page";
import Wrapper from "./comps/wrapper"

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Page/>
      </Wrapper>
    </div>
  );
}

export default App;
