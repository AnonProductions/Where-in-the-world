import Navbar from "./components/layout/Navbar";
import FilterSearch from "./components/FilterSearch";
import Countries from "./components/Countries";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(
    document.body.classList.contains("dark") ? true : false
  );
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <Router>
      <div className={`App ${darkMode ? "bg-gray-800" : "bg-white"}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Switch>
          <Route path="/" exact>
            <FilterSearch
              darkMode={darkMode}
              showFilters={showFilters}
              setShowFilters={setShowFilters}
            />
            <Countries darkMode={darkMode} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
