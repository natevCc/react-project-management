import Button from "./Button.jsx";

export default function ProjectsSidebar({ projectsState, onAddProject, onProjectSelected }) {
  return (
    <>
      <aside className="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0">
        <div className="h-full px-5 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <h2 className="mb-3 mt-7 dark:text-white font-bold">YOUR PROJECTS</h2>
          <Button onClickHandler={onAddProject} text="+ Add Project" classes="mb-3" />
          <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />

          <ul className="space-y-2 font-medium">
            {projectsState.projects.map((prj) => {
              return (
                <li key={prj.id}>
                  <button
                    onClick={() => onProjectSelected(prj.id)}
                    className={`flex items-start w-full p-2 text-gray-900 rounded-lg dark:text-white ${
                      projectsState.selectedProjectId === prj.id && "bg-gray-700"
                    } hover:bg-gray-100 dark:hover:bg-gray-600 group`}
                  >
                    <span className="ms-3 truncate">{prj.name}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </>
  );
}
