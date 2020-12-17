const BaseCountry = ({ country, darkMode }) => {
  return (
    <button
      className={`block text-left py-2 px-4 w-full font-semibold hover:bg-gray-800 hover:text-white focus:outline-none focus:ring ${
        darkMode ? "ring-teal-200" : "ring-teal-500"
      }`}
    >
      {country}
    </button>
  );
};

export default BaseCountry;
