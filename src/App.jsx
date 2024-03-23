import { useState, useEffect } from "react";

import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectCreation from "./components/ProjectCreation.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

const testProjects = {
  selectedProjectId: undefined,
  projects: [
    {
      id: "312321-321-312-321321",
      name: "My first project",
      description: "This is description about my first project",
      dueDate: "Date",
      tasks: [
        {
          id: "3123415-32-13-12453",
          name: "first task",
          completed: false,
        },
        {
          id: "3123415-32-13-12453213",
          name: "second task",
          completed: false,
        },
      ],
    },
  ],
};

function App() {
  // const [projectsState, setProjectsState] = useState(testProjects);
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function saveState(state) {
    localStorage.setItem("projectsState", JSON.stringify(state));
  }

  // This will run on the initial render only once!
  useEffect(() => {
    const storedState = localStorage.getItem("projectsState");
    if (storedState) {
      setProjectsState(JSON.parse(storedState));
    }
  }, []);

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      const updatedState = {
        ...prevState,
        selectedProjectId: null,
      };

      saveState(updatedState);
      return updatedState;
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      const updatedState = {
        ...prevState,
        selectedProjectId: undefined,
      };

      saveState(updatedState);
      return updatedState;
    });
  }

  function handleAddProject(projectDetails) {
    setProjectsState((prevState) => {
      projectDetails.id = self.crypto.randomUUID();
      projectDetails.tasks = [];

      const updatedState = {
        ...prevState,
        selectedProjectId: projectDetails.id,
        projects: [...prevState.projects, projectDetails],
      };

      saveState(updatedState);
      return updatedState;
    });
  }

  function handleAddTask(projectId, taskName) {
    setProjectsState((prevState) => {
      const newTask = {
        id: self.crypto.randomUUID(),
        name: taskName,
        completed: false,
      };

      // const targetProject = prevState.projects.find((prj) => prj.id === projectId);
      // targetProject.tasks.push(newTask);

      const updatedState = {
        ...prevState,
        projects: prevState.projects.map((project) =>
          project.id === projectId ? { ...project, tasks: [...project.tasks, newTask] } : project
        ),
      };

      saveState(updatedState);
      return updatedState;
    });
  }

  function handleDeleteTask(projectId, taskId) {
    setProjectsState((prevState) => {
      const updatedState = {
        ...prevState,
        projects: prevState.projects.map((project) => {
          if (project.id === projectId) {
            const updatedTasks = [...project.tasks];
            updatedTasks.pop((task) => task.id === taskId);

            return {
              ...project,
              tasks: updatedTasks,
            };
          } else {
            return project;
          }
        }),
      };

      saveState(updatedState);
      return updatedState;
    });
  }

  function handleDeleteProject(id) {
    setProjectsState((prevState) => {
      const projects = [...prevState.projects];
      projects.pop((prj) => prj.id === id);

      const updatedState = {
        ...prevState,
        selectedProjectId: undefined,
        projects: projects,
      };

      saveState(updatedState);
      return updatedState;
    });
  }

  function handleProjectSelected(id) {
    setProjectsState((prevState) => {
      const updatedState = {
        ...prevState,
        selectedProjectId: id,
      };

      saveState(updatedState);
      return updatedState;
    });
  }

  let content;

  if (projectsState.selectedProjectId) {
    const project = projectsState.projects.find(
      (prj) => prj.id === projectsState.selectedProjectId
    );
    content = (
      <SelectedProject
        project={project}
        onAddTaskHandler={handleAddTask}
        onDeleteProjectHandler={handleDeleteProject}
        onDeleteTaskHandler={handleDeleteTask}
      />
    );
  } else if (projectsState.selectedProjectId === null) {
    content = (
      <ProjectCreation
        onSaveHandler={handleAddProject}
        onCancelCreateHandler={handleCancelAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddProject={handleStartAddProject} />;
  }

  return (
    <>
      <ProjectsSidebar
        projectsState={projectsState}
        onAddProject={handleStartAddProject}
        onProjectSelected={handleProjectSelected}
      />
      {content}
    </>
  );
}

export default App;
