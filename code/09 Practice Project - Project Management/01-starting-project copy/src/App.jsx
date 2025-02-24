import ProjectsSiderbar from './components/ProjectSiderbar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import SelectedProject from './components/SelectedProject.jsx';
import {useState} from'react';

function App() {
  const [projectsState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects:[], 
    tasks:[]
  });

  function handleAddTask(text){
    setProjectState ((prevState)=>{
      const taskId = Math.random();
      const newTask={
        text:text,
        projectId: prevState.selectedProjectId,
        id:taskId,
      };

      return{
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    })
  }

  function handleDeleteTask(id){
    setProjectState ((prevState)=>{
      return{
        ...prevState,
        tasks: prevState.tasks.filter(
          (task)=> task.id !== id
        ),
      };
    });
  }

  function handleDelete(){
    setProjectState((prevState)=>{
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects:prevState.projects.filter((project)=> project.id !== prevState.selectedProjectId
        ),
      }
    })

  }


  function handleStartAddProject(){ 
    setProjectState(prevState => {
      return{
        ...prevState,
        selectedProjectId:null,
      };
    });
  }
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content =<SelectedProject project={selectedProject} onDelete={handleDelete} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks}/>;
  
  if(projectsState.selectedProjectId === null){
    content =<NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>

  }
  else if(projectsState.selectedProjectId === undefined){
    content =<NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  function handleAddProject (projectData){
    setProjectState(prevState=>{
      const ProjectId = Math.random();
      const newProject = {
        ...projectData,
        id: ProjectId
      };
      return{
        ...prevState, //selectProjectId  + projects[] 
        selectedProjectId:undefined,
        projects: [...prevState.projects, newProject]  // |a+b|(prevState) + c (newProject).... adds on to the array the new becomes prev and then newProjects adds on
      };
    })
  }

  function handleCancelAddProject(){
    setProjectState ((prevState)=>{
      return{
        ...prevState,
        selectedProjectId:undefined,
      };
    });
  }

  function handleSelectProject(id){
    setProjectState ((prevState)=>{
      return{
        ...prevState,
        selectedProjectId:id,
      };
    });
  }

  return (
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSiderbar  
          onSelectProject={handleSelectProject} 
          onStartAddProject={handleStartAddProject} 
          projects={projectsState.projects}
          selectedProjectId={projectsState.selectedProjectId}
        />
        {content}
      </main>
    
  );
}

export default App;
