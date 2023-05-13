import React from "react";
import "./App.css";
import Table from "./TableComponents/Table";
import "./index.css";
import "tailwindcss/tailwind.css";
import Navbar from "./NavigationComponet/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Table />
    </div>
  );
}

export default App;
