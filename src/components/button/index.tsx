import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  icon?: string;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = "primary",
  size = "medium",
  icon,
  iconPosition = "right",
  fullWidth = false,
  disabled = false,
}) => {
  const baseStyles =
    "flex items-center justify-center font-medium rounded-lg focus:outline-none transition";

  const variantStyles = {
    primary: "bg-[#4B0081] text-white hover:bg-[#8f2bd6]",
    secondary:
      "bg-white border border-[#4B0081] text-[#4B0081] hover:bg-[#4B0081] hover:text-white hover:border-none",
  };

  const sizeStyles = {
    small: "p-[8px_16px] text-sm",
    medium: "p-[10px_18px] text-base",
    large: "px-6 py-3 w-full text-lg",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  const iconPositionStyle =
    iconPosition === "left" ? "flex-row" : "flex-row-reverse";

  const disabledStyles =
    "bg-gray-400 text-white cursor-not-allowed opacity-100";

  return (
    <button
      onClick={!disabled ? onClick : undefined}
      className={`${baseStyles} ${
        disabled ? disabledStyles : variantStyles[variant]
      } ${sizeStyles[size]} ${widthStyle} ${iconPositionStyle} bg-[#]`}
      disabled={disabled}
    >
      {icon && <img src={icon} alt="icon" className="mx-2" />}
      <span className="whitespace-nowrap">{label}</span>
    </button>
  );
};

export default Button;
