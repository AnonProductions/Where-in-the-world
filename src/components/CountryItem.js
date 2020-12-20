import { useHistory } from "react-router-dom";

const CountryItem = ({ flag, name, population, region, capital, darkMode }) => {
  const history = useHistory();

  const goToCountry = () => {
    history.push(`/country/${name}`);
  };

  // classnames
  return (
    <button
      onClick={goToCountry}
      className={`rounded-md shadow-lg mx-6 overflow-hidden mb-8 cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring ring-teal-500 focus:-translate-y-2 focus:shadow-2xl text-left ${
        darkMode ? "bg-gray-700 text-white" : "bg-white"
      }`}
    >
      <img
        className="h-52 w-full object-cover"
        loading="lazy"
        src={flag}
        alt={name}
      />
      <div className="py-6 px-4 mb-6">
        <h3
          className={`font-extrabold ${
            darkMode ? "text-white" : "text-gray-800"
          }  text-xl mb-2`}
        >
          {name}
        </h3>
        <p>
          <span
            className={`font-bold ${
              darkMode ? "text-gray-200" : "text-gray-700"
            } `}
          >
            Population:
          </span>{" "}
          {population}
        </p>
        <p>
          <span
            className={`font-bold ${
              darkMode ? "text-gray-200" : "text-gray-700"
            } `}
          >
            Region:
          </span>{" "}
          {region}
        </p>
        <p>
          <span
            className={`font-bold ${
              darkMode ? "text-gray-200" : "text-gray-700"
            } `}
          >
            Capital:
          </span>{" "}
          {capital}
        </p>
      </div>
    </button>
  );
};

export default CountryItem;
