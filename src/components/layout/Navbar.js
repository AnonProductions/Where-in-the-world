import BaseMode from "./../base/BaseMode";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav
      className={`flex justify-between items-center py-4 px-4 transition-all shadow-2xl ${
        darkMode ? "bg-gray-700 text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      <Link to="/">
        <h1 className="font-bold">Where in the world?</h1>
      </Link>
      <BaseMode darkMode={darkMode} onClick={() => setDarkMode(!darkMode)} />
    </nav>
  );
};

export default Navbar;
