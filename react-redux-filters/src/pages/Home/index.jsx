import "./styles.css";

import React, { useState } from "react";

import FilterPanel from "../../components/Home/FilterPanel";
import List from "../../components/Home/List";
import SearchBar from "../../components/Home/SearchBar";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleSelectCategory = (event, value) => !value ? null : setSelectedCategory(value)

  return (

    <div className="home">
      {/* search bar  */}
      <SearchBar />
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          {/* sidebar */}
          <FilterPanel selectToggle={handleSelectCategory} selectedCategory={selectedCategory}/>
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
