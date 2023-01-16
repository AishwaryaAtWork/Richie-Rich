import React, { useState } from 'react';
import Quiz from './Quiz';
import { data } from './Constants';

function Main_pg() {
  const [timeOut, setTimeOut] = useState(false);
  return (
    <>
      <div className='main-pg'>
        <div className="top">
          <div className="timer">50</div>
        </div>
        <div className="bottom">
          <Quiz data={data} setTimeOut={setTimeOut}/>
        </div>
      </div>
    </>
  )
};

export default Main_pg;
