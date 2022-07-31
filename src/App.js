import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("magan");
  function handleClick() {
    name === "magan" ? setName("sehaj") : setName("magan");
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{name}</p>
        <button onClick={handleClick}>Change Name</button>
      </header>
    </div>
  );
}

export default App;
