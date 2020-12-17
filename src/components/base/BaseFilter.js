import { FaAngleDown } from "react-icons/fa";
import BaseCountry from "./BaseCountry";

const BaseFilter = ({ showFilters, setShowFilters, darkMode }) => {
  return (
    <div className="relative inline-block mt-6">
      <button
        onClick={() => setShowFilters(!showFilters)}
        className={`flex items-center bg-white shadow-lg py-4 px-4 rounded-md font-semibold focus:outline-none focus:ring ${
          darkMode ? "ring-teal-200" : "ring-teal-500"
        }`}
      >
        Filter by Region
        <FaAngleDown
          className={`ml-2 transition-all duration-500 transform ${
            showFilters ? "rotate-180" : ""
          }`}
          style={{ strokeWidth: 2 }}
        />
      </button>

      <div
        className={`absolute origin-top-right w-40 right-0 bg-white shadow-lg transition-all duration-500 ease-out mt-2 rounded-md overflow-hidden ${
          showFilters
            ? "scale-y-100 opacity-100 pointer-events-auto"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <BaseCountry darkMode={darkMode} country="America" />
        <BaseCountry darkMode={darkMode} country="Asia" />
        <BaseCountry darkMode={darkMode} country="Europe" />
        <BaseCountry darkMode={darkMode} country="Oceania" />
        <BaseCountry darkMode={darkMode} country="Africa" />
      </div>
    </div>
  );
};

export default BaseFilter;
