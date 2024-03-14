import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./Components/Main/Landing";
import Navbar from "./Components/Navbar/Navbar";
function App() {
  return (
    <Router className="App">
      <Navbar />
      <Landing />
    </Router>
  );
}

export default App;
