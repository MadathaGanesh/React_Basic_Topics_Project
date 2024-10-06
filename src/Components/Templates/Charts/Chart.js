import React from "react";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  // Extracting max value from the dataset in each month.
  const datasetvalues = props.dataset.map((dataset) => dataset.value);
  const max = Math.max(...datasetvalues); //Passing dataset values to the nax variable
  return (
    <div>
      {props.dataset.map((dataset) => (
        <ChartBar
          value={dataset.value}
          label={dataset.label}
          key={dataset.label}
          maxValue={max}
        />
      ))}
    </div>
  );
};

export default Chart;
