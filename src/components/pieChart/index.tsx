import Charts from "../charts";
import pieOption from "./pieOption";

const PieChart: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-6 w-full">
      <div className="flex flex-col items-start bg-[#F4F3FB] w-full lg:w-[50%] p-6 rounded-xl shadow-md">
        <h2 className="font-bold text-base mb-4">Subscription Overview</h2>
        <div className="w-full">
          <Charts type="pie" option={pieOption} height={180} />
        </div>
      </div>

      <div className="flex justify-between gap-5 bg-[#F4F3FB] rounded-xl w-full lg:w-[50%] p-6 shadow-md">
        <div>
          <h3 className="font-semibold text-base mb-4">
            Popular Subscription Package
          </h3>
          <div className="text-base flex flex-col justify-start items-start gap-4">
            <p>Premium Package</p>
            <p>Standard Package</p>
            <p>Basic Package</p>
            <p>Customized Package</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-base mb-4">Active Subscriptions</h3>
          <div className="text-base flex flex-col justify-start items-center gap-4">
            <p>290</p>
            <p>120</p>
            <p>100</p>
            <p>20</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
