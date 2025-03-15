import { useState } from "react";
import Square from "./components/Square";
import githubLogo from "./assets/github-mark-white.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="root">
        <Square />
        <div className="github-container">
          <img src={githubLogo} alt="GitHub Logo" className="github-logo" />
          <p>github.com/rubyaj24</p>
        </div>
      </div>
    </>
  );
}

export default App;
