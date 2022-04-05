import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main.js";
import Jihyuk from "./pages/jihyuk";
import Sunah from "./pages/sunah";
import Byungsu from "./pages/byungsu";
import Jinho from "./pages/jinho";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/byungsu" element={<Byungsu />} />
        <Route path="/jihuk" element={<Jihyuk />} />
        <Route path="/sunah" element={<Sunah />} />
        <Route path="/jinho" element={<Jinho />} />
      </Routes>
    </Router>
  );
}

export default App;
