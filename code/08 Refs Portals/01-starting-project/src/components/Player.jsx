import {useState, useRef} from 'react';

export default function Player() {
  const inputName =useRef();

  const [enteredName, setName] = useState(null);
  // const[submitted, setSubmitted]= useState(false);
  // function handleChange(event){ 
  //   setSubmitted(false);
  //   setName(event.target.value);
  // }
  function handleClick(){
    setName(inputName.current.value);
    inputName.current.value;
  }

  return (
    <section id="player">
      <h2>Welcome {inputName.current ? inputName.current.value : 'unknown entity'}</h2>
      <p>
        <input ref={inputName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );// add a semicolon after the return :D 
}


//ref is a safe space for a variable. It does not cause component re-evaluation when changed.