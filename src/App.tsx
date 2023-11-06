import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "antd";
import { useState } from "react";
function App() {
  const [num, setNum] = useState(0);
  const handleClick = (e: any) => {
    console.log(9, e);

    setNum((v) => v + 1);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary" onClick={handleClick}>
          Button
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.数量：{num}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
