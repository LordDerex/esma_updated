import Button from "components/button";
import Card from "components/card";
import Dropdown from "components/dropDown";
import TextField from "components/textfield";
import icons from "constants/icons";
import SchoolTable from "./schoolTable";

const Schools = () => {
  const options = [
    { value: "csv", label: "CSV" },
    { value: "pdf", label: "PDF" },
    { value: "docx", label: "Docx" },
  ];
  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };

  const cardDetails = [
    {
      icon: icons.total_school,
      label: "Total school sign up",
      value: "2003",
      duration: "more than last month",
      durationPercentage: "21%",
      textIcon: icons.green_arrow_up,
    },
    {
      icon: icons.total_school,
      label: "Active Schools",
      value: "2003",
      duration: "more than last month",
      durationPercentage: "21%",
      textIcon: icons.green_arrow_up,
    },
    {
      icon: icons.total_school,
      label: "Inactive Schools",
      value: "2003",
      duration: "more than last month",
      durationPercentage: "21%",
      textIcon: icons.green_arrow_up,
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">Schools</h1>
        <div className="flex gap-4">
          <Dropdown
            options={options}
            placeholder="Export as"
            onSelect={handleSelect}
            width="small"
          />

          <Button variant="primary" label="Sign up new school" size="small" />
        </div>
      </div>

      <div className="flex justify-start items-center space-x-4">
        {cardDetails.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            label={card.label}
            value={card.value}
            duration={card.duration}
            durationPercentage={card.durationPercentage}
            textIcon={card.textIcon}
            size={index === 2 ? 9 : 12}
            smallText={index === 2 ? "30 days ago" : ""}
          />
        ))}
      </div>

      <div className="flex gap-5">
        <div className="w-[60%]">
          <TextField
            placeholder="Search school name , school admin"
            type="search"
          />
        </div>

        <Dropdown
          options={options}
          placeholder="Date added"
          onSelect={handleSelect}
          width="small"
        />
        <Dropdown
          options={options}
          placeholder="Subscription"
          onSelect={handleSelect}
          width="small"
        />
        <Dropdown
          options={options}
          placeholder="Admin"
          onSelect={handleSelect}
          width="small"
        />
      </div>

      <SchoolTable />
    </div>
  );
};

export default Schools;
