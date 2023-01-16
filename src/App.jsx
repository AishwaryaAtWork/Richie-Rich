import Main_pg from "./components/Main_pg";
import Money_pyramid from "./components/Money_pyramid";
import React, { useState } from "react";
import './App.css';

function App() {
  const [quesNo ,setQuesNo] =useState(1);
  return (
    <div className="App">
      <Main_pg setQuesNo={setQuesNo} quesNo={quesNo} />
      <Money_pyramid setQuesNo={setQuesNo} quesNo={quesNo}/>
    </div>
  );
}

export default App;
