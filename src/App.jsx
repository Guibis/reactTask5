import Timer from "./Timer";
import { useState } from "react";

export default function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div className="app-container">
      <h1>React Timer</h1>
      <div className="card">
        {showTimer && <Timer />}
        <button onClick={() => setShowTimer(!showTimer)}>
          {showTimer ? "Hide Timer" : "Show Timer"}
        </button>
      </div>
    </div>
  );
}
