import NewTask from './NewTask.jsx';
export default function Tasks({onAdd, onDelete, tasks}){
  return(
    <section className="text-2xl font-bold text-stone-700 mb-4">
      <h2>Tasks</h2>
      <NewTask onAdd={onAdd}/>
      {tasks.length ===0 && (<p className="text-stone-800 mb-4">This Project doesn't have any tasks yet.</p>)}
      {tasks.length >0 && (<ul className="p-4 mt-8 rounded-md bg-stone-100">
        {/* the .map() is a ranged base for loop ! -Xin Sheng 2025 */}
        {tasks.map((task)=> <li key={task.id} className="flex justify-between my-4">
          <span>{task.text}</span>
          <button className="text-stone-700 hover:text-red-500" onClick={()=>onDelete(task.id)}>Clear</button>
        </li>)}
      </ul>)}
    </section>
  );
}