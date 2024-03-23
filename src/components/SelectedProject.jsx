import Task from "./Task.jsx";
import Button from "./Button.jsx";
import MainWrapper from "./MainWrapper.jsx";
import { useState } from "react";

export default function SelectedProject({
  project,
  onAddTaskHandler,
  onDeleteProjectHandler,
  onDeleteTaskHandler,
}) {
  const [newTaskName, setNewTaskName] = useState("");

  function handleNewTaskInput(evt) {
    setNewTaskName(evt.target.value);
  }

  function handleAddTask(projectId, taskName) {
    if (!taskName) {
      return;
    }
    onAddTaskHandler(projectId, taskName);
    setNewTaskName("");
  }

  return (
    <MainWrapper>
      <section className="flex flex-row justify-between">
        <div>
          <h2 className="mb-3 text-2xl font-bold">{project.name}</h2>
          <p className="mb-3 text-gray-500">{project.dueDate}</p>
          <p className="mb-3">{project.description}</p>
        </div>
        <div>
          <Button
            text="Delete"
            theme="light"
            onClickHandler={() => onDeleteProjectHandler(project.id)}
            classes="mb-3"
          />
        </div>
      </section>
      <hr className="my-2 h-0.5 border-t-0 bg-gray-800 dark:bg-black/20" />
      <h3 className="text-xl font-bold mb-3">Tasks</h3>
      <div className="flex flex-row mb-5">
        <input
          className="h-9 w-1/2 p-1 me-4 border-b-2 rounded-sm border-gray-300 bg-gray-200 text-gray-600 focus:outline-none focus:border-gray-600"
          type="text"
          value={newTaskName}
          onChange={handleNewTaskInput}
        />
        <Button
          text="Add Task"
          theme="light"
          onClickHandler={() => handleAddTask(project.id, newTaskName)}
        />
      </div>
      <div>
        <ol className="bg-gray-100 p-2">
          {project.tasks.map((task) => {
            return (
              <Task
                key={task.id}
                name={task.name}
                onClearHandler={() => onDeleteTaskHandler(project.id, task.id)}
              />
            );
          })}
        </ol>
      </div>
    </MainWrapper>
  );
}
