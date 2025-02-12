import React, { useState, ReactNode } from "react";

interface TabProps {
  label: string;
  children: ReactNode;
}

interface TabsProps {
  children: ReactNode;
}

const Tab: React.FC<TabProps> = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex border-b border-gray-200">
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement<TabProps>(child)) {
            return (
              <button
                onClick={() => handleTabClick(index)}
                className={`px-4 py-2 -mb-px border-b-2 font-bold transition-colors duration-200 ease-in-out ${
                  activeIndex === index
                    ? "border-[#4B0081]  text-[#4B0081]"
                    : "border-transparent text-[#AAAAAA] hover:text-[#36005C]"
                }`}
              >
                {child.props.label}
              </button>
            );
          }
          return null;
        })}
      </div>
      <div className="w-full">
        {React.Children.toArray(children)[activeIndex]}
      </div>
    </div>
  );
};

export { Tabs, Tab };
