import Navbar from "./components/layout/Navbar";
import FilterSearch from "./components/FilterSearch";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  return (
    <Router>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <FilterSearch
        darkMode={darkMode}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />
    </Router>
  );
}

export default App;
