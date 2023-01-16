import React, { useEffect, useState } from 'react';
import Quiz from './Quiz';
import { data ,moneyAmount} from './Constants';
import Timer from './Timer';

function Main_pg({setQuesNo,quesNo}) {
  const [stop, setStop] = useState(false);
  const [earned,setEarned]=useState("$ 0");
  useEffect(()=>{
    quesNo >1 && setEarned(moneyAmount.find((m)=>m.id===quesNo-1).amount);
  },[moneyAmount,quesNo]);
  return (
    <>
      <div className='main-pg'>
        {stop? (<h1 className='endText'>You earned : {earned}</h1>):(
          <>
          <div className="top">
            <div className="timer">
              <Timer setStop={setStop} quesNo={quesNo}/>
            </div>
        </div>
        <div className="bottom">
          <Quiz data={data} setStop={setStop} setQuesNo={setQuesNo} quesNo={quesNo}/>
        </div>
          </>
        )};
      </div>
    </>
  )
};

export default Main_pg;
