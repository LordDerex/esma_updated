import icons from "constants/icons";
import React, { FC, InputHTMLAttributes, useState } from "react";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
}

const TextField: FC<TextFieldProps> = ({ label, placeholder, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const isPasswordField = props.type === "password";

  return (
    <div className="flex flex-col gap-2 w-full textfieldShadow rounded-lg">
      {label && (
        <div className="flex justify-between">
          <label className="text-base font-bold tracking-[0.16px] text-black">
            {label}
          </label>
        </div>
      )}
      <div className="flex gap-4 border border-[#AAAAAA] pl-3 h-[45px] bg-[#FFFFFF] rounded-lg">
        {props.type === "search" && (
          <div className="flex items-center justify-center h-full">
            <img src={icons.search} alt="" />
          </div>
        )}
        <input
          type={isPasswordField && showPassword ? "text" : props.type}
          className="flex-1 h-full outline-none border-none bg-transparent placeholder:text-[#AAAAAA]"
          placeholder={placeholder}
          {...props}
        />
        {isPasswordField && (
          <div className="flex items-center justify-center">
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="text-sm text-blue-500 hover:underline"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TextField;
