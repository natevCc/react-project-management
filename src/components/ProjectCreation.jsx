import Button from "./Button.jsx";
import MainWrapper from "./MainWrapper.jsx";
import Input from "./Input.jsx";
import { useState } from "react";

const emptyDetails = { name: "", description: "", dueDate: "" };

export default function ProjectCreation({ onSaveHandler, onCancelCreateHandler }) {
  const [projectDetails, setProjectDetails] = useState(emptyDetails);

  function handleSetProjectDetails(value, type) {
    setProjectDetails((prevDetails) => {
      const newDetails = {
        ...prevDetails,
        [type]: value,
      };
      return newDetails;
    });
  }

  return (
    <MainWrapper>
      <section className="flex flex-row justify-end">
        <Button
          text="Cancel"
          classes="ms-3 mb-3 font-semibold"
          theme="light"
          onClickHandler={onCancelCreateHandler}
        />
        <Button
          text="Save"
          classes="ms-3 mb-3 font-semibold"
          onClickHandler={() => onSaveHandler(projectDetails)}
        />
      </section>
      <div className="flex flex-col">
        <Input
          type="text"
          label="Title"
          value={projectDetails.name}
          onChange={(evt) => {
            handleSetProjectDetails(evt.target.value, "name");
          }}
        />
        <Input
          label="Description"
          textarea
          value={projectDetails.description}
          onChange={(evt) => {
            handleSetProjectDetails(evt.target.value, "description");
          }}
        />
        <Input
          type="date"
          label="Due Date"
          value={projectDetails.dueDate}
          onChange={(evt) => {
            handleSetProjectDetails(evt.target.value, "dueDate");
          }}
        />
      </div>
    </MainWrapper>
  );
}
