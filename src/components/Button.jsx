export default function Button({ onClickHandler, text, theme = "dark", classes = "", ...props }) {
  const darkClasses = "text-gray-300 bg-gray-700 hover:bg-gray-600";
  const lightClasses = "text-gray-900 hover:bg-gray-200";

  return (
    <button
      {...props}
      onClick={onClickHandler}
      className={`${theme === "light" ? lightClasses : darkClasses} rounded-lg h-9 ${classes}`}
    >
      <span className="mx-4">{text}</span>
    </button>
  );
}
