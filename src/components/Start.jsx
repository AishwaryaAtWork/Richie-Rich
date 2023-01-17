import { useRef } from "react";
import useSound from 'use-sound';
import play from '../assets/sounds/play_sound.mp3';

function Start({setUsername}) {
    const [letsPlay]=useSound(play);
    const inputRef =useRef();
    const handleClick=()=>{
       inputRef.current.value && setUsername(inputRef.current.value);
       letsPlay();
    };
  return (
    <>
    <div className="start">
        <input type="text" placeholder="Enter Username" className="startInput" ref={inputRef}/>
        <button className="startBtn" onClick={handleClick}>Start</button>
    </div> 
    </>
  )
}

export default Start;
