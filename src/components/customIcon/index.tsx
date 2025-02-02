import React from "react";

interface CustomIconProps {
  SvgIcon: string;
  size?: number;
}

const CustomIcon: React.FC<CustomIconProps> = ({ SvgIcon, size = 12 }) => {
  return (
    <div style={{ width: size, height: size }}>
      <img src={SvgIcon} width="100%" height="100%" alt="icon" />
    </div>
  );
};

export default CustomIcon;
