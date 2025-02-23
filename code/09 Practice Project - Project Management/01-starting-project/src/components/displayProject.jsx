export default function DisplayProject(projects){
  return(
    <div>
      {projects.map((display,index)=>(
          <div key={index}>
            <h1>display.title</h1>
            <p>display.description</p>
            <p><Strong>Due Date:</Strong>{display.dueDate}</p>
          </div>
        ))}
    </div>
  );
}