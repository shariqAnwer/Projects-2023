import "./styles.css";

import FilterPanel from "../../components/Home/FilterPanel";
import List from "../../components/Home/List";
import React from "react";
import SearchBar from "../../components/Home/SearchBar";

const Home = () => {
  return (
    <div className="home">
      {/* search bar  */}
      <SearchBar />
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          {/* sidebar */}
          <FilterPanel />
        </div>
        <div className="home_list-wrap">
          {/* list and empty comp  */}
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
