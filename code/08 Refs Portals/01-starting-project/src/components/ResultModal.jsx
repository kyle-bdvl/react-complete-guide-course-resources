import {useImperativeHandle} from 'react';

export default function ResultModal({ref, result, targetTime}){ 
  const dialog = useRef();

  useImperativeHandle(ref, ()=> {
    return {
      open(){
        dialog.current.showModal();
      }
    };
  });
  
  return (
    //adding the open makes it not invisble
  <dialog  ref = {dialog} className="result-modal">
    <h2>You {result}</h2>
    <p>The target Time was <strong>{targetTime} seconds</strong></p>
    <p>
      You stopped the timer with <strong>X seconds left.</strong>
    </p>
    <form method="dialog">
      <button>Close</button>
    </form>
  </dialog>
  );
}