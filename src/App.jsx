import Main_pg from "./components/Main_pg";
import Money_pyramid from "./components/Money_pyramid";
import Start from "./components/Start";
import React, { useState } from "react";
import './App.css';

function App() {
  const [username, setUsername] =useState(null);
  const [quesNo ,setQuesNo] =useState(1);
  return (
    <div className="App">
      {username ? (
        <>
          <Main_pg quesNo={quesNo} />
          <Money_pyramid setQuesNo={setQuesNo} quesNo={quesNo}/>
        </>
      ) : <Start setUsername={setUsername}/>}
    </div>
  );
}

export default App;
