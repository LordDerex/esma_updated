import icons from "constants/icons";
import React, { useEffect, useState } from "react";

interface DropdownProps {
  label?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
  onSelect: (value: string) => void;
  width?: "small" | "medium" | "full";
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  placeholder = "Select an option",
  onSelect,
  width = "medium",
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>();

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onSelect(value);
    setIsOpen(false);
  };

  const getWidthClass = () => {
    switch (width) {
      case "small":
        return "w-40";
      case "medium":
        return "w-60";
      case "full":
        return "w-full";
      default:
        return "w-60";
    }
  };

  return (
    <div
      className={`flex flex-col gap-2 dropdownShadow rounded-lg ${getWidthClass()} ${className}`}
    >
      {label && (
        <label className="text-base font-bold tracking-[0.16px] text-black">
          {label}
        </label>
      )}
      <div className="relative">
        <button
          className="w-full bg-white border border-[#AAAAAA] rounded-lg h-[45px] px-3 text-left flex justify-between items-center shadow-sm text-base"
          onClick={toggleDropdown}
        >
          {selectedValue
            ? options.find((option) => option.value === selectedValue)?.label
            : placeholder}
          <span
            className={`ml-2 transform ${isOpen ? "rotate-180" : "rotate-0"}`}
          >
            <img src={icons.angle_down} alt="" />
          </span>
        </button>
        {isOpen && (
          <ul className="absolute z-10 w-full bg-white border border-[#AAAAAA] rounded-lg mt-1 max-h-60 overflow-y-auto shadow-lg">
            {options.map((option) => (
              <li
                key={option.value}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b"
                onClick={() => handleSelect(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
