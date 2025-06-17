import { useState } from "react";
import "./App.css";

function App() {
  const [cnt, setCnt] = useState(0);

  const addValue = () => {
    if (cnt < 20) {
      setCnt(cnt + 1);
    }
  };

  const removeValue = () => {
    if (cnt > 0) {
      setCnt(cnt - 1);
    }
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {cnt}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
