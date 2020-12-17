import { FaSearch } from "react-icons/fa";
import BaseFilter from "./base/BaseFilter";

const FilterSearch = ({ darkMode, showFilters, setShowFilters }) => {
  return (
    <div className="mx-3">
      <form className="flex relative mt-4">
        <FaSearch className="absolute top-1/2 left-6 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search for a country"
          className={`w-full py-4 px-12 border-none rounded-md shadow-lg focus:outline-none focus:ring ${
            darkMode ? "ring-teal-200" : "ring-teal-500"
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
