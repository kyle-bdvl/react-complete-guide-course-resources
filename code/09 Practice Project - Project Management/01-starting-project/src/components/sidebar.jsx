export default function Sidebar({handleAppProject}){
  return (
    <aside>
       <div className="bg-cyan-500">
        <h1>YOUR PROJECTS</h1>
        <button onClick={handleAppProject}>+ Add Project</button>
      </div>
    </aside>
   

  );
}