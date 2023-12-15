import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Input = ({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  errorMessage,
}: any) => {
  const [hide, setHide] = useState<boolean>(false);

  const ValLength = value.length != 0 ? true : false;

  console.log(label);
  return (
    <div className="mb-3 sm:mb-6">
      <label
        htmlFor={label}
        className={`block my-1 sm:my-3 capitalize text-base sm:text-lg ${
          ValLength ? "text-neutral-700" : "text-neutral-500"
        }`}
      >
        {label}
      </label>
      <div
        className={`flex justify-between items-center space-x-1 rounded-md border ${
          ValLength ? "border-neutral-700" : "border-neutral-500"
        } border-gray-500 pr-1`}
      >
        <input
          type={hide ? type === "password" && "text" : type}
          id={label}
          placeholder={placeholder}
          value={value}
          className="rounded-md outline-none border-none w-full focus:outline-none focus:ring-0 px-2 py-2 placeholder:text-sm"
          onChange={onChange}
        />
        {type === "password" && ValLength && (
          <button
            disabled={!ValLength}
            className={`${
              !ValLength ? "cursor-not-allowed" : "cursor-pointer"
            } flex items-center justify-center`}
            onClick={(e) => {
              e.preventDefault();
              setHide(!hide);
            }}
          >
            {hide ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        )}
      </div>
      {<p className="text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default Input;
