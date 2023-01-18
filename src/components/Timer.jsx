import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import end from '../assets/sounds/end_sound.mp3';

function Timer({setStop,quesNo}) {
    const [timer,setTimer]=useState(30);
    const [gameEnd]= useSound(end);
    useEffect(()=>{
        if (timer===0){
            gameEnd();
            return setStop(true);
        } 
        const interval= setInterval(()=>{
            setTimer((prev)=>prev-1);
        },1000);
        return ()=>clearInterval(interval);
    },[setStop,timer,gameEnd]);
    useEffect(()=>{
        setTimer(30);
    },[quesNo]);
  return timer;
}

export default Timer;
