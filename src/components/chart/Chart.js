import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const chartValues = props.dataPoints;
  const dataPointValues = chartValues.map((dataPoint) => dataPoint.value);
  const totalMaxValue = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {chartValues.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaxValue}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
