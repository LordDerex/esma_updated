import Button from "components/button";
import Dropdown from "components/dropDown";
import { Tab, Tabs } from "components/tab";
import TextField from "components/textfield";
import PublishedBlog from "./published";
import SchuduledBlog from "./schuduled";
import DraftsBlog from "./drafts";
import RejectedBlog from "./rejected";

const Blogs = () => {
  const options = [
    { value: "csv", label: "CSV" },
    { value: "pdf", label: "PDF" },
    { value: "docx", label: "Docx" },
  ];
  const handleSelect = (value: string) => {
    console.log("Selected value:", value);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold text-lg">Blogs</h1>
        <Button label="Create blog post" size="medium" />
      </div>

      <div className="flex gap-5">
        <div className="w-[60%]">
          <TextField placeholder="Search blog" type="search" />
        </div>

        <Dropdown
          options={options}
          placeholder="Date published"
          onSelect={handleSelect}
          width="medium"
        />
      </div>

      <Tabs>
        <Tab label="Published" children={<PublishedBlog />} />
        <Tab label="Scheduled post" children={<SchuduledBlog />} />
        <Tab label="Drafts" children={<DraftsBlog />} />
        <Tab label="Rejected" children={<RejectedBlog />} />
      </Tabs>
    </div>
  );
};

export default Blogs;
