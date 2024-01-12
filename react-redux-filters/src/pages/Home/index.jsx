import "./styles.css";

import React, { useState } from "react";

import FilterPanel from "../../components/Home/FilterPanel";
import List from "../../components/Home/List";
import SearchBar from "../../components/Home/SearchBar";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [cuisines, setCuisines] = useState([
    { id: 1, checked: false, label: "American" },
    { id: 2, checked: false, label: "Chinese" },
    { id: 3, checked: false, label: "Italian" },
  ]);
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000])

  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const hanndleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const handleChangeChecked = (id) => {
    const cuisinesStateList = cuisines;
    const selectedItem = cuisinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCuisines(selectedItem)
  };

const handleChangePrice = (event, value) => setSelectedPrice(value)

  return (
    <div className="home">
      {/* search bar  */}
      <SearchBar />
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          {/* sidebar */}
          <FilterPanel
            selectToggle={handleSelectCategory}
            selectedCategory={selectedCategory}
            selectRating={hanndleSelectRating}
            selectedRating={selectedRating}
            cuisines={cuisines}
            changeChecked={handleChangeChecked}
            selectedPrice={selectedPrice}
            changedPrice={handleChangePrice}
          />
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
