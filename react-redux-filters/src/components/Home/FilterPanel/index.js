import "./style.css";

import { categoryList, ratingList } from "../../../constants";

import CheckboxProton from "../../commom/CheckboxProton";
import FilterListToggle from "../../commom/FilterListToggle";
import React from "react";
import SliderProton from "../../commom/SliderProton";

const FilterPanel = ({
  selectedCategory,
  selectToggle,
  selectedRating,
  selectRating,
  cuisines,
  changeChecked,
  changedPrice,
  selectedPrice,
}) => {
  return (
    <div>
      {/* Category filter */}
      <div className="input-group">
        <p className="label">Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>
      {/* Cuisine filter */}
      <div className="input-group">
        <p className="label">Cuisine</p>
        {cuisines?.map((cuisine) => (
          <CheckboxProton
            key={cuisine.id}
            cuisine={cuisine}
            changeChecked={changeChecked}
          />
        ))}
      </div>
      {/* Price filter  */}
      <div className="input-group">
        <p className="label-range">Price Range</p>
        <SliderProton value={selectedPrice} changedPrice={changedPrice} />
      </div>
      {/* Star rating */}
      <div className="input-group">
        <p className="label">Star Rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
