import { useState } from "react";
import icons from "constants/icons";

// import { ChevronDown, ChevronUp } from "lucide-react";

const roles = [
  {
    name: "Super admin",
    permissions: [
      { permission: "Users", isChecked: true },
      { permission: "Lesson plan", isChecked: false },
      { permission: "Academics", isChecked: true },
      { permission: "Admissions", isChecked: false },
    ],
  },
  { name: "Lorem ipsum", permissions: [] },
  { name: "Lorem ipsum", permissions: [] },
  { name: "Lorem ipsum", permissions: [] },
];

const Settings = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl">
      <h2 className="text-lg font-semibold">Settings</h2>
      <p className="text-gray-500 text-base mb-4">
        Manage role and permissions
      </p>

      {roles.map((role, index) => (
        <div key={index} className="border rounded-lg shadow-sm mb-3">
          <button
            className="flex justify-between w-full p-4 text-base font-medium"
            onClick={() => toggleAccordion(index)}
          >
            {role.name}
            {openIndex === index ? (
              <img src={icons.angle_up} alt="" />
            ) : (
              <img src={icons.angle_down} alt="" />
            )}
          </button>

          {openIndex === index && role.permissions.length > 0 && (
            <div className="p-4 border-t">
              <h3 className="text-base font-medium">Permissions</h3>
              <div className="flex flex-wrap gap-3 mt-2">
                {role.permissions.map((permission, i) => (
                  <label
                    key={i}
                    className="flex items-center bg-gray-100 px-3 py-2 rounded-md shadow-sm"
                  >
                    {permission.permission}
                    <input
                      type="checkbox"
                      checked={permission.isChecked}
                      readOnly
                      className="ml-2 accent-green-500"
                    />
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Settings;
