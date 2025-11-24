import React from "react";

function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <button onClick={() => setPage("gabriela")}>Gabriela</button>
      <button onClick={() => setPage("gael")}>Gael</button>
    </nav>
  );
}

export default Navbar;
