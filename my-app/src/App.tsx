import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Pets from "./components/Pets";
import petConstants from "./utils/constants";

function App() {
  return (
    <div className="App container">
      <Pets category={petConstants.CAT} />
    </div>
  );
}

export default App;
