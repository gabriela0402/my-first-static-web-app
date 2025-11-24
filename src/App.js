import React, { useState } from "react";
import Navbar from "./components/Navbar";
import CurriculoGabriela from "./components/CurriculoGabriela";
import CurriculoGael from "./components/CurriculoGael";
import "./App.css";

function App() {
  const [page, setPage] = useState("gabriela");

  return (
    <div className="container">
      <Navbar setPage={setPage} />

      {page === "gabriela" && <CurriculoGabriela />}
      {page === "gael" && <CurriculoGael />}
    </div>
  );
}

export default App;
