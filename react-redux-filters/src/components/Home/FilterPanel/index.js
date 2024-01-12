import "./style.css";

import FilterListToggle from "../../commom/FilterListToggle";
import React from "react";
import { categoryList } from "../../../constants";

const FilterPanel = ({selectedCategory, selectToggle}) => {
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
      {/* Price filter  */}
      {/* Star rating */}
      <div className="input-group">
      <p className="label">Star Rating</p>
        
      </div>
    </div>
  );
};

export default FilterPanel;
