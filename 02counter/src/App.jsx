import { userState, useState } from "react";
import "./App.css";

function App() {
  const [cnt, setCnt] = useState(0);

  const addValue = () => {
    setCnt(cnt + 1);
  };

  const removeValue = () => {
    setCnt(cnt - 1);
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {cnt}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remover Value</button>
    </>
  );
}

export default App;
