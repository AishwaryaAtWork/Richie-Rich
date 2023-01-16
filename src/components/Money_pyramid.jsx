import React from "react";
import {moneyAmount} from './Constants';

function Money_pyramid({setQuesNo,quesNo}) {
  return (
    <>
        <div className="money-pyramid">
            <ul className="money-list">
                {moneyAmount.map(m=>(
                    <li className={quesNo == m.id ?"money-list-item active" : "money-list-item"}>
                    <span className='number'>{m.id}</span>
                    <span className='amount'>{m.amount}</span>
                </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Money_pyramid;
