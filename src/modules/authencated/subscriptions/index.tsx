import icons from "constants/icons";
import Card from "components/card";
import Dropdown from "components/dropDown";
import TextField from "components/textfield";
import { NavConstants } from "Utils/DummyData";
import SubscriptionTable from "./subscriptionTable";

const Subscriptions = () => {
  const options = [
    { value: "csv", label: "CSV" },
    { value: "pdf", label: "PDF" },
    { value: "docx", label: "Docx" },
  ];

  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };

  return (
    <div>
      {" "}
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">Subscriptions</h1>
        <div className="flex">
          <Dropdown
            options={options}
            placeholder="Export as"
            onSelect={handleSelect}
            width="small"
          />
        </div>
      </div>
      <div className="md:my-5 flex justify-start items-center space-x-5">
        <Card
          icon={icons.total_school}
          label="Total Subscriptions"
          value="2003"
          size={9}
        />
        <Card
          icon={icons.total_school}
          label="Active Subscriptions"
          value="2003"
          size={9}
        />
        <Card
          icon={icons.total_school}
          label="Expiring in 15days"
          value="2003"
          size={9}
        />
        <Card
          icon={icons.total_school}
          label="Expired Subscriptions"
          value="2003"
          size={9}
        />
      </div>
      <div className="flex gap-5 my-0 md:my-4">
        <div className="w-[60%]">
          <TextField
            placeholder="Search school name , school admin"
            type="search"
          />
        </div>
        {NavConstants.map((data, index) => {
          console.log(index);

          return (
            <Dropdown
              key={index}
              options={options}
              placeholder={data.name}
              onSelect={handleSelect}
              width={index === 1 ? "medium" : "small"}
            />
          );
        })}
      </div>
      <SubscriptionTable />
    </div>
  );
};

export default Subscriptions;
