import {useState, useRef} from 'react';
import ResultModal from './ResultModal.jsx';
// let timer ; because this variable is shared across all instances.
export default function TimerChallenge({title, targetTime}){
  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(target*1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < target *1000;

  function handleStart(){ 
    //time is set into ms
   timer.current = setInterval(()=>{
    setTimeRemaining(prevTimeRemaining => prevTimeRemaining -10);
   },10);
  }

  function handleStop(){
    //We can use a ref to get the setTimeout ();
    clearInterval(timer.current);// it needs a pointer 
  }

  return (
    <>
        <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
        <section className="challenge">
        <h2>{title}</h2>
        {timerExpired && <p>You lost!</p>}
        <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? 's' : ''}
        </p>
        <p>
            <button onClick={timerStarted? handleStop : handleStart}>
                {timerStarted ? 'Stop' : 'Start'} Challenge
            </button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
            {timerStarted ? 'Time is running...': 'Timer inactive'}
        </p>
        </section>
    </>
);
}