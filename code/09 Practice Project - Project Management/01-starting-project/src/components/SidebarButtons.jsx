export default function SidebarButtons ({projects}){

  return(
    <div>
      {projects.map((title,index)=>{
          return <button key={index}>{title.title}</button>
      ;})
      }
    </div>
    
  );
};