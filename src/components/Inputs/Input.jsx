import { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Input = ({ value, onChange, label, placeholder, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-4">
      <label className="text-[13px] text-slate-800">{label}</label>
      <div className="relative w-full flex items-center border border-gray-300 rounded-md px-3 py-2 mt-1">
        <input
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-sm"
          value={value}
          onChange={onChange}
        />
        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={20}
                className="text-primary cursor-pointer ml-2"
                onClick={toggleShowPassword}
              />
            ) : (
              <FaRegEyeSlash
                size={20}
                className="text-slate-400 cursor-pointer ml-2"
                onClick={toggleShowPassword}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;