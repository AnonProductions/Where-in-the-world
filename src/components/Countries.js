import { useEffect, useState } from "react";
import axios from "axios";
import { useStateValue } from "../context";
import CountryItem from "./CountryItem";
import SkeletonCountryItem from "./skeleton/SkeletonCountryItem";

const Countries = ({ darkMode }) => {
  const [{ countries, loading, error }, dispatch] = useStateValue();

  const [index, setIndex] = useState(0);
  // const [CountriesToShow, setCountriesToShow] = useState(
  //   countries.slice(index, index + 12)
  // );

  /* 
    throttle, 
    debouncing
   */

  const [countriesToShow, setCountriesToShow] = useState([]);

  useEffect(() => {
    const sliced = countries.slice(index, index + 12);
    setCountriesToShow(sliced);
  }, [countries, index]);

  useEffect(() => {
    const getData = async () => {
      try {
        dispatch({ type: "make-request" });
        const res = await axios.get("https://restcountries.eu/rest/v2/all");
        dispatch({ type: "get-data", payload: { countries: res.data } });
      } catch (error) {
        dispatch({ type: "error", payload: { error } });
      }
    };

    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", (ev) => {
  //     console.log(ev);
  //   });
  // }, [index]);

  return (
    <div className="mt-12 md:grid md:grid-cols-fill-40">
      {loading ? (
        <>
          {Array(12)
            .fill("xyz")
            .map((item, idx) => (
              <SkeletonCountryItem key={idx} darkMode={darkMode} />
            ))}
        </>
      ) : countriesToShow.length ? (
        countriesToShow.map((country) => (
          <CountryItem
            darkMode={darkMode}
            key={country.alpha2Code}
            flag={country.flag}
            name={country.name}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))
      ) : error ? (
        <h2>Sorry we're experiencing an error: {error}</h2>
      ) : (
        <h2>
          We ran into some issues, please come back later or refresh the page
        </h2>
      )}
    </div>
  );
};

export default Countries;
