import {useState} from 'react'; 

export default function ProjectsForm({fillUpForm}){ 
  const[title,setTitle] = useState("");
  const[description,setDescription] = useState("");
  const[dueDate,setDueDate] = useState(null);

  function handleTitle(event){
    setTitle(event.target.value);
  }
  function handleDesc(event){
    setDescription(event.target.value);
  }

  function handleDate(event){
    setDueDate(event.target.value); 
  }
  function handleSave(){
    fillUpForm(title,description,dueDate);
  }

  return(
    <form className="flex flex-col justify-start items-center" >
      <label>Title</label>
      <input type="text" value={title}onChange={handleTitle} />
      <label>Description</label>
      <input type="text" value={description} onChange={handleDesc}/>
      <label>Due Date</label>
      <input type="date" value={dueDate} onChange={handleDate}/>
      <button onClick={handleSave} type="button">Submit</button>
    </form>
   
  );
}
