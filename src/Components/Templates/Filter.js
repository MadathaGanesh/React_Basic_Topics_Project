import React from "react";

// Using filter component to select one from the options .

const Filter = (props) => {
  const OnChangeHandler = (events) => {
    console.log(
      "IN Filter.js component: OnChange Handler => ",
      events.target.value
    );
    //Calling the onFilterChange() method using props from "App.js" to "Filter.js".
    props.onFilterChange(events.target.value);
  };
  return (
    <div className="Filter_Main">
      <div className="Filter_Control">
        <label>Filter By Option: </label>
        <select value={props.SelectedFilter} onChange={OnChangeHandler}>
          <option value={2019}>2019</option>
          <option value={2020}>2020</option>
          <option value={2021}>2021</option>
          <option value={2022}>2022</option>
          <option value={2023}>2023</option>
          <option value={2024}>2024</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
