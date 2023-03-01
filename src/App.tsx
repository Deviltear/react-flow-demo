import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState<number>(0);
  const a = () => {
    return 1;
  };
  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count: number) => count + 1)}>
          add count
        </button>
        <p>{`current count is ${count}`}</p>
      </div>
      <p className="read-the-docs">Click on the Button to add count</p>
    </div>
  );
}

export default App;
