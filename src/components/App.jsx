import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [val, setVal] = useState("");
  function handler(e) {
    setVal(name);
  }
  function inputChange(e) {
    setName(e.target.value);
  }
  return (
    <div className="container">
      <h1>Hello {val} </h1>
      <input
        onChange={inputChange}
        value={name}
        type="text"
        placeholder="What's your name?"
      />
      <button onClick={handler}>Submit</button>
    </div>
  );
}

export default App;
