import { ApexOptions } from "apexcharts";

export const barChartOptions: ApexOptions = {
  chart: {
    id: "registered-schools-chart",
    stacked: false,
    toolbar: { show: false },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "50%",
      borderRadius: 5,
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  colors: ["#7E22CE", "#3B0764"],
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      name: "Registered Schools",
      data: [45, 16, 3, 4, 4, 5, 4, 5, 4, 5, 4, 5],
    },
  ],
};
