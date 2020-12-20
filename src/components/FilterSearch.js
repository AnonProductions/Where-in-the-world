import { FaSearch } from "react-icons/fa";
import BaseFilter from "./base/BaseFilter";

const FilterSearch = ({ darkMode, showFilters, setShowFilters }) => {
  return (
    <div className="mx-3 md:flex md:justify-between md:items-center">
      <form className="flex relative mt-4">
        <FaSearch
          className={`absolute top-1/2 left-6 transform -translate-y-1/2 ${
            darkMode ? "text-white" : "text-gray-400"
          }`}
        />
        <input
          type="text"
          placeholder="Search for a country"
          className={`w-full py-4 px-12 font-semibold border-none rounded-md shadow-lg focus:outline-none focus:ring ring-teal-500 ${
            darkMode
              ? "bg-gray-700 text-white placeholder-white"
              : "bg-white text-gray-400"
          }`}
        />
      </form>

      <BaseFilter
        darkMode={darkMode}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />
    </div>
  );
};

export default FilterSearch;
