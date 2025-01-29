"use client";
import { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";

const defaultOption: ApexOptions = {
  chart: {
    id: "apexchart-example",
    stacked: true,
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  xaxis: {
    categories: [1994, 1995, 1996, 1997, 1998, 1999],
  },
  colors: ["#1CA9ED", "#FF550E", "#ADD8E4", "#233376", "#2929FE", "#A3A3A3"],
  series: [
    {
      name: "series-1",
      data: [30, 40, 35, 50, 49, 60],
      color: "#66DA26",
    },
    {
      name: "series-2",
      data: [5, 10, 80, 50, 60, 50],
      color: "#E91E63",
    },
  ],
};

const pieOption: ApexOptions = {
  chart: {
    id: "apexchart-pie",
  },
  labels: ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5", "Label 6"],
  colors: ["#1CA9ED", "#FF550E", "#ADD8E4", "#233376", "#2929FE", "#A3A3A3"],
  series: [30, 40, 35, 50, 49, 60],
  plotOptions: {
    pie: {
      donut: {
        size: "50%",
      },
    },
  },
};

export default function Charts({
  option = defaultOption,
  type = "area",
  height = 400,
}: {
  option?: ApexOptions;
  height?: number;
  type?:
    | "line"
    | "area"
    | "bar"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "boxPlot"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | "rangeArea"
    | "treemap";
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const ApexChart = require("react-apexcharts").default;

  return (
    <div>
      <ApexChart
        options={option}
        series={option.series}
        type={type}
        height={height}
      />
    </div>
  );
}
