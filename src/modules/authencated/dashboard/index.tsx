import BarChart from "components/barChart";
import CustomIcon from "components/customIcon";
import PieChart from "components/pieChart";
import DemoTable from "components/table/demo";
import icons from "constants/icons";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex flex-col justify-start items-start gap-3">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-lg font-bold">Welcome back, Godwin</h1>

        <button className="bg-[#F4F3FB] rounded-xl py-2 px-3 flex justify-start items-center gap-2">
          <CustomIcon SvgIcon={icons.refresh_icon} size={18} /> Refresh
        </button>
      </div>
      <BarChart />
      <PieChart />
    </div>
  );
};

export default Dashboard;
