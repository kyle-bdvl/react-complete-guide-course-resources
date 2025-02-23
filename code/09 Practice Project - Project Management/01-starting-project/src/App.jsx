import Sidebar from './components/sidebar.jsx';
import ProjectsForm from './components/ProjectsForm.jsx';
import SidebarButtons from './components/SidebarButtons.jsx';
import Display from './components/displayProject.jsx'
import {useState} from 'react';

function App() {
  const [submit, setSubmit]= useState(false);
  const [projects, setProjects]= useState([]);
  function submitted(value){
    setSubmit(value);
  }


  function storingDataForm (title,description,dueDate){
    const arrayForm ={title:title,description:description,dueDate:dueDate}
    setProjects((prevProject) => [...prevProject,arrayForm]);
    console.log(projects);
    submitted(false);
  };


  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar handleAppProject={()=>submitted(true)} />
        {submit && <ProjectsForm fillUpForm={storingDataForm} />}
        <SidebarButtons projects={projects}/>
        <Display projects={projects}/>
      </main>
      
    </>
  );
}

export default App;
