import Dropdown from "components/dropDown";
import TextField from "components/textfield";
import { AuditLog } from "Utils/DummyData";
import AuditLogTable from "./auditLogTable";

const AuditLogs = () => {
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
        <h1 className="font-semibold text-lg">Audit Log</h1>
        <div className="flex">
          <Dropdown
            options={options}
            placeholder="Export as"
            onSelect={handleSelect}
            width="small"
          />
        </div>
      </div>
      <div className="flex gap-5 my-0 md:my-4">
        <div className="w-[60%]">
          <TextField
            placeholder="Search school name , school admin"
            type="search"
          />
        </div>
        {AuditLog.map((data, index) => {
          return (
            <Dropdown
              key={index}
              options={options}
              placeholder={data.name}
              onSelect={handleSelect}
            />
          );
        })}
      </div>
      <AuditLogTable />
    </div>
  );
};

export default AuditLogs;
