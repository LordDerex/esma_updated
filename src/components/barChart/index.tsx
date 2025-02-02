import React from "react";
import Charts from "components/charts";
import { barChartOptions } from "./barChartOptions";
import images from "constants/images";

const approvals = [
  {
    name: "Whiteplains British School",
    img: images.whiteSchoolPlainImg,
    img2: images.whiteSchoolPlainPersonImg,
  },
  {
    name: "Glisten International Academy",
    img: images.glaImg,
    img2: images.whiteSchoolPlainImg,
  },
  {
    name: "JC-Best Schools International",
    img: images.whiteSchoolPlainImg,
    img2: images.glaImg,
  },
  {
    name: "Loyola Jesuit College",
    img: images.whiteSchoolPlainImg,
    img2: images.glaImg,
  },
  {
    name: "Ave Maria College",
    img: images.whiteSchoolPlainImg,
    img2: images.whiteSchoolPlainPersonImg,
  },
  {
    name: "St. Paul's Secondary School",
    img: images.whiteSchoolPlainImg,
    img2: images.glaImg,
  },
];

const BarChart: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-6 w-full">
      <div className="bg-[#F4F3FB] shadow-md rounded-xl p-4 w-[60%]">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">
          Registered Schools
        </h2>
        <div className="w-full">
          <Charts option={barChartOptions} type="bar" height={250} />
        </div>
      </div>

      <div className="bg-[#F4F3FB] shadow-md rounded-xl p-4 w-[38%]">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-semibold text-gray-700">Approvals</h2>
          See all
        </div>
        <ul>
          {approvals.map((approval, index) => (
            <div className="flex justify-between items-center">
              <li
                key={index}
                className="flex justify-start items-center space-x-3 mb-2"
              >
                <span className="text-base font-medium">{index + 1}.</span>
                <img
                  src={approval.img}
                  alt={approval.name}
                  className="w-9 h-9 rounded-full"
                />
                <span className="text-gray-700">{approval.name}</span>
              </li>
              <img
                src={approval.img2}
                alt={approval.name}
                className="w-9 h-9 rounded-full"
              />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BarChart;
