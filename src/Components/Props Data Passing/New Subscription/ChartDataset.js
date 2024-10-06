import React from "react";
import Chart from "../../Templates/Charts/Chart";

const ChartDataset = (props) => {
  const Chartdata = [
    {
      label: "Jan",
      value: 0,
    },
    {
      label: "Feb",
      value: 0,
    },
    {
      label: "Mar",
      value: 0,
    },
    {
      label: "Apr",
      value: 0,
    },
    {
      label: "May",
      value: 0,
    },
    {
      label: "Jun",
      value: 0,
    },
    {
      label: "Jul",
      value: 0,
    },
    {
      label: "Aug",
      value: 0,
    },
    {
      label: "Sept",
      value: 0,
    },
    {
      label: "Oct",
      value: 0,
    },
    {
      label: "Nov",
      value: 0,
    },
    {
      label: "Dec",
      value: 0,
    },
  ];

  for (const subscription of props.FilterSubscriptions) {
    const month = subscription.data?.getMonth();
    if (month !== undefined && subscription.amount !== undefined) {
      Chartdata[month].value += subscription.amount;
    }
  }
  return (
    <div>
      <Chart dataset={Chartdata}></Chart>
    </div>
  );
};

export default ChartDataset;
