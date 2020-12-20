const BaseCountry = ({ country, darkMode }) => {
  return (
    <button
      className={`block text-left py-2 px-4 w-full font-semibold focus:outline-none focus:ring ring-teal-500 ${
        darkMode
          ? "hover:bg-white hover:text-gray-700"
          : " hover:bg-gray-800 hover:text-white"
      }`}
    >
      {country}
    </button>
  );
};

export default BaseCountry;
