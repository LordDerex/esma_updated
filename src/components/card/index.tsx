import CustomIcon from "components/customIcon";
import React from "react";

interface Props {
  label: string;
  value: string;
  icon: string;
  smallText?: string;
  size?: number;
  textIcon?: string;
  duration?: string;
  durationPercentage?: string;
}

export default function Card({
  label,
  value,
  icon,
  smallText,
  size,
  textIcon,
  durationPercentage,
  duration,
}: Props) {
  return (
    <div className="border cardShadow border-[#DFDFDF] h-24 p-[10px_20px] rounded-lg bg-[#F4F3FB] flex justify-center items-center gap-4">
      <img
        src={icon}
        alt={label}
        className="h-12 w-12 rounded-full object-cover border"
      />
      <div>
        <p>
          {label} <span className="text-[9px] text-[#A1A1A1]">{smallText}</span>
        </p>
        <p className="font-bold">{value}</p>
        <p className="text-xs text-[#A1A1A1] flex">
          {textIcon && <CustomIcon SvgIcon={textIcon} size={size} />}
          <span className="text-[#008000] text-xs px-1">
            {durationPercentage}
          </span>
          {duration}
        </p>
      </div>
    </div>
  );
}
