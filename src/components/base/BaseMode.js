import { FaMoon, FaSun } from "react-icons/fa";

const BaseMode = ({ darkMode, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center font-semibold border-2 rounded-md border-transparent p-2 focus:outline-none ${
        darkMode ? "focus:border-teal-200" : "focus:border-teal-500"
      }`}
    >
      {darkMode ? (
        <>
          <FaSun className="mr-2" />
          Light Mode
        </>
      ) : (
        <>
          <FaMoon className="mr-2" />
          Dark Mode
        </>
      )}
    </button>
  );
};

export default BaseMode;
