import React, { useEffect, useState } from 'react';

function Quiz({data,setStop,setQuesNo,quesNo}) {
    const [question,setQuestion]=useState(null);
    const [selectAns,setSelectAns]=useState(null);
    const [className,setClassName]=useState('ansswer');
    const delay=(duration,callback)=>{
        setTimeout(()=>{
            callback();
        },duration);
    };
    const handleClick=(a)=>{
        setSelectAns(a);
        setClassName("answer active");
        delay(3000,() => 
            setClassName(a.correct?"answer correct":"answer wrong"));
        delay(6000,() =>{
            if(a.correct){
                setQuesNo((prev)=>prev+1);
                setSelectAns(null);
            }
            else{
                setStop(true);
            }
        });
    };  
    useEffect(()=>{
        setQuestion(data[quesNo-1]);
    },[data,quesNo]);
  return (
    <>
        <div className="quiz-section">
            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map(a=>(
                    <div className={selectAns===a?className:"answer "} onClick={()=>handleClick(a)}>{a.text}</div>
                ))}
            </div>
        </div> 
    </>
  )
};

export default Quiz;
