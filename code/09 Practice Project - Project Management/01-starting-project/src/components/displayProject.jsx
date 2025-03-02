
export default function DisplayProject({projects, index}){
  
  const project = projects.find((project) => project.title === index);

console.log(project);

return(
  <div>
    <h1>Title: {project.title}</h1>
    <p> Description :{project.description}</p>
    <p>
      <strong>Due Date: {project.dueDate}</strong>
    </p>
  </div>
);
  
}






 // return (
  //   <div>
  //     {projects.filter((project, projectId) => (
  //       <div key={index}>
  //         <h1>{project.title}</h1>
  //         <p>{project.description}</p>
  //         <p>
  //           <strong>Due Date:</strong> {project.dueDate}
  //         </p>
  //       </div>
        
  //     ))}
  //   </div>
  // );