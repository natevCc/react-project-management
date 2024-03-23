import Button from "./Button.jsx";

export default function Task({ name, onClearHandler }) {
  return (
    <li className="my-3">
      <div className="flex flex-row items-center justify-between">
        <p className="ms-3 text-center">{name}</p>
        <Button text="Clear" theme="light" onClickHandler={onClearHandler} />
      </div>
    </li>
  );
}
