import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Landing from "./Components/Main/Landing";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

// import DropDownMenu from "./Components/Navbar/DropDownMenu";
function App() {
  return (
    <Router className="App">
      <Navbar />
      <Landing />
      <Footer />
    </Router>
  );
}

export default App;
