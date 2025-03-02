export default function SidebarButtons ({projects ,title}){


  return(
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-sky-800">Buttons</h2>
      {projects.map((project,index)=>{
          return <button onClick={()=>title(project.title)} key={index}>{project.title}</button>
      ;})
      }
      
    </div>
    
  );
};