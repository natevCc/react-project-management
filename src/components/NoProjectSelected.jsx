import noProjectsImg from "../assets/no-projects.png";

import MainWrapper from "./MainWrapper.jsx";
import Button from "./Button.jsx";

export default function NoProjectSelected({ onAddProject }) {
  return (
    <MainWrapper classes="flex justify-center items-center flex-col">
      <img src={noProjectsImg} alt="Project image" className="mb-3 w-16" />
      <h2 className="mb-3 text-xl text-gray-700 font-bold ">No Project Selected</h2>
      <p className="mb-8 text-gray-600">Select project or get started with new one</p>
      <Button onClickHandler={onAddProject} text="Create new project" classes="mb-3" />
    </MainWrapper>
  );
}
