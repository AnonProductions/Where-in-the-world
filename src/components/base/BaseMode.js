import { FaMoon, FaSun } from "react-icons/fa";

const BaseMode = ({ mode }) => {
  return (
    <>
      {mode === "dark" ? (
        <button>
          <FaMoon />
          Dark Mode
        </button>
      ) : (
        <button>
          <FaSun />
          Light Mode
        </button>
      )}
    </>
  );
};

export default BaseMode;
