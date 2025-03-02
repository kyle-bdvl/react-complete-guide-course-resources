import {useState, useEffect} from 'react';

export default function ProgressBar({timer}) { 
const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(()=>{
    
    const interval = setInterval(()=>{
      console.log('interval');
      setRemainingTime(prevTime => prevTime-10);
    },10);
    //to avoid ongoing processes behind the scenes
    return()=>{
      clearInterval(interval);
    }
  },[]);
  
  return (
    <progress value={remainingTime} max={timer}/>
  );
}