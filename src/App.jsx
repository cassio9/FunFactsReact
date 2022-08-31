import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;
