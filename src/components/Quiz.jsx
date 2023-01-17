import React, { useEffect, useState } from 'react';
import useSound from 'use-sound';
import correct from '../assets/sounds/correct_sound.mp3';
import wrong from '../assets/sounds/end_sound.mp3';

function Quiz({data,setStop,setQuesNo,quesNo}) {
    const [question,setQuestion]=useState(null);
    const [selectAns,setSelectAns]=useState(null);
    const [className,setClassName]=useState('answer');
    const [correctAns]=useSound(correct);
    const [wrongAns]=useSound(wrong);
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
        delay(5000,() =>{
            if(a.correct){
                correctAns();
                delay(1000,()=>{
                    setQuesNo((prev)=>prev+1);
                    setSelectAns(null);
                });
            }
            else{
                wrongAns();
                delay(1000,()=>{
                    setStop(true);
                });
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
