import React from "react";

const ChartBar = (props) => {
  let BarHeight = "0%";
  if (props.maxValue > 0) {
    BarHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div>
      <div className="chart-bar">
        <div className="chart-bar_inner">
          <div className="chart-bar_fill" style={{ height: BarHeight }}></div>
        </div>
        <div className="chart-bar_label">{props.label}</div>
      </div>
    </div>
  );
};

export default ChartBar;
