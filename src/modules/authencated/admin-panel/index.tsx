// const AdminPanel = () => {
//   return <div>AdminPanel</div>;
// };

// export default AdminPanel;
import Button from "components/button";
import Card from "components/card";
import Dropdown from "components/dropDown";
import TextField from "components/textfield";
import icons from "constants/icons";
import SchoolTable from "../schools/schoolTable";
import AdminPanelTable from "./adminPanelTable";

const AdminPanel = () => {
  const options = [
    { value: "csv", label: "CSV" },
    { value: "pdf", label: "PDF" },
    { value: "docx", label: "Docx" },
  ];
  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">Admin panel</h1>
        <div className="flex gap-4">
          <Dropdown
            options={options}
            placeholder="Export as"
            onSelect={handleSelect}
            width="small"
          />

          <Button variant="primary" label="+ Invite admin" size="small" />
        </div>
      </div>

      <div className="flex gap-5">
        <div className="w-[60%]">
          <TextField placeholder="Search admin" type="search" />
        </div>

        <Dropdown
          options={options}
          placeholder="Role"
          onSelect={handleSelect}
          width="small"
        />
      </div>

      <AdminPanelTable />
    </div>
  );
};

export default AdminPanel;
