import { ApexOptions } from "apexcharts";

const pieOption: ApexOptions = {
  chart: {
    id: "apexchart-pie",
    height: 1000,
    width: "100%",
    type: "pie",
  },
  labels: [
    "Active subscription",
    "Expiring in 15 days",
    "Expired subscription",
  ],
  colors: ["#58D1B2", "#FF6961", "#FFCC00"],
  series: [90, 30, 40],
  plotOptions: {
    pie: {
      donut: {
        size: "100%",
      },
    },
  },
};

export default pieOption;
