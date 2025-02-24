import {useState} from 'react';

export default function NewTask({onAdd}){
  const[enteredTask, setEnteredTask] = useState("");

  function handleChange(event){
    setEnteredTask(event.target.value);
  }

  function handleClick(){
    //to check if the input box is empty to the empty task doesn't get executed 
    if (enteredTask.trim()=='')
      return;
    //forward the entered value to the app component and then empty the input box
    setEnteredTask('');
    //getting the entered task to the app component
    onAdd(enteredTask);
  }

  return(
    <div className="flex items-center gap-4">
      <input type="text" onChange={handleChange} value={enteredTask}  className="w-64 px-2 py-1 rounded-sm bg-stone-200"/>
      <button className="text-stone-700 hover:text-stone-950" onClick={handleClick}>Add Task</button>
    </div>
  );
}