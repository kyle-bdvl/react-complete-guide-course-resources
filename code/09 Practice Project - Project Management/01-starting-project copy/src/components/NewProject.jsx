import Input from './Input.jsx';
import {useRef} from 'react';
import Modal from './Modal.jsx';
export default function NewProject({onAdd, onCancel}){
  const modal = useRef();

  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  function handleSave(){
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    //validation...
    if (enteredTitle.trim() === '' || 
    enteredDescription.trim()=== ''||
    enteredDueDate.trim()==='' ){
      modal.current.open();
      return;
    }

    
    //adding objects , key value pairs
    onAdd({
      title:enteredTitle,
      description : enteredDescription,
      dueDate:enteredDueDate,
    });

    // function handleAddProject (title, description, dueDate){
    //   setProjectState(prevState=>{
    //     const newProject = {
    //       title, description, dueDate,
    //       id: Math.random()
    //     };
    //     return{
    //       ...prevState, //selectProjectId  + projects[] 
    //       projects: [...prevState.projects, newProject]  
    //     };
    //   })
    // }
  }


  return (
    <>
    <Modal ref={modal} buttonCaption="okay">
      <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
      <p className="text-stone-600 mb-4"> Opps.. looks like you forgot to enter a value!</p>
      <p className="text-stone-600 mb-4"> Please make sure you provide a valid value for every input field</p>
    </Modal>
      <div className="w-[35rem] mt-16 ">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>
              Cancel
            </button>
          </li>

          <li>
            <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 "
              onClick={handleSave}>
                Save
            </button>
          </li>

        </menu>
        <div>
          <Input type="text" label="Title" ref={titleRef}/>
          <Input label="Description" ref={descriptionRef} textarea/>
          <Input type="date" label="Due Date" ref={dueDateRef}/>
        </div>
      </div>
    </>
  );
}