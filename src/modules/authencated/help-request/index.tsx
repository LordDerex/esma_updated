import TextField from "components/textfield";
import HelpRequestTable from "./helpRequestTable/helpRequestTable";
import Dropdown from "components/dropDown";
const HelpRequest = () => {
  const categoryOptions = [
    { value: "admission_inquiry", label: " Admission Inquiry" },
    { value: "fee_payment", label: "Fee Payment" },
    { value: "academic_issue", label: " Academic Issue" },
    { value: "exam_schedule", label: "Exam Schedule" },
    { value: "transportation", label: "Transportation" },
    { value: "hostel_accommodation", label: " Hostel Accommodation" },
    { value: "disciplinary_action", label: "Disciplinary Action" },
    { value: "parent_teacher_meeting", label: "Parent-Teacher Meeting" },
    { value: "technical_support", label: "Technical Support" },
  ];
  const statusOptions = [
    { value: "open_request", label: " Open Request" },
    { value: "in_progress", label: "In Progress" },
    { value: "resolved", label: " Resolved" },
  ];

  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Help Requests</h1>
      <div className="flex gap-5">
        <div className="w-[60%]">
          <TextField placeholder="Search ticket ID" type="search" />
        </div>

        <Dropdown
          options={categoryOptions}
          placeholder="Category"
          onSelect={handleSelect}
          width="small"
        />
        <Dropdown
          options={statusOptions}
          placeholder="Status"
          onSelect={handleSelect}
          width="small"
        />
      </div>

      <HelpRequestTable />
    </div>
  );
};

export default HelpRequest;
