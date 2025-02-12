import Dropdown from "components/dropDown";
import TextField from "components/textfield";
import { useState } from "react";
import SchoolApprovalsTable from "./schoolApprovalsTable";
import BlogCard from "components/blogCard";

const Approvals = () => {
  const [schoolActive, setSchoolActive] = useState<boolean>(true);
  const [blogActive, setBlogActive] = useState<boolean>(false);
  const options = [
    { value: "csv", label: "CSV" },
    { value: "pdf", label: "PDF" },
    { value: "docx", label: "Docx" },
  ];
  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };

  return (
    <div className="flex flex-col justify-start items-start gap-6">
      <h1 className="font-semibold text-lg">Approvals</h1>
      <div className="flex justify-start items-center gap-5">
        <button
          className={`${
            schoolActive
              ? "bg-[#4B0081] text-white font-semibold text-base rounded-[8px]"
              : "bg-white border text-base font-semibold  border-[#4B0081] text-[#4B0081] rounded-[8px] "
          } w-[163px] h-[46px]`}
          onClick={() => {
            setSchoolActive(true);
            setBlogActive(false);
          }}
        >
          School approval
        </button>
        <button
          className={`${
            blogActive
              ? "bg-[#4B0081] text-white font-semibold text-base rounded-[8px]"
              : "bg-white border text-base font-semibold  border-[#4B0081] text-[#4B0081] rounded-[8px] "
          } w-[163px] h-[46px]`}
          onClick={() => {
            setBlogActive(true);
            setSchoolActive(false);
          }}
        >
          Blog approvals
        </button>
      </div>

      <div className="flex gap-5 w-full ">
        <div className="w-[50%]">
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
      </div>

      {schoolActive && (
        <div className="w-full">
          <SchoolApprovalsTable />
        </div>
      )}

      {blogActive && (
        <div className="flex gap-6 flex-wrap">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      )}
    </div>
  );
};

export default Approvals;
