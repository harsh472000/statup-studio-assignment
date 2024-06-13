import React from "react";
import FilterGroup from "./FilterGroup";
import "../styles/filters.css";
import { FILTERDATA } from "../constants/index";


const Filters = () => {
  return (
    <aside className="filters-sidebar">
      <div className="filter-group__first">
        <input type="checkbox" />
        <span className="filter-title filter-option__label">Customizable</span>
      </div>
      {FILTERDATA.map((filter, index) => (
        <FilterGroup
          key={index}
          title={filter.title}
          options={filter.options}
        />
      ))}
    </aside>
  );
};

export default Filters;
