import React, { useState } from "react";

const FileInput = ({ label, onChange, errorMessage }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "");
    onChange(file);
  };

  return (
    <div className="mb-3 sm:mb-6">
      <label
        htmlFor={label}
        className="block my-1 sm:my-3 capitalize text-base sm:text-lg text-neutral-700"
      >
        {label}
      </label>
      <div className="flex justify-between items-center space-x-1 rounded-md border  border-gray-500 pr-1">
        <input
          type="file"
          id={label}
          className="rounded-md outline-none border-none w-full focus:outline-none focus:ring-0 px-2 py-2 placeholder:text-sm"
          onChange={handleFileChange}
        />
        {fileName && (
          <div className="flex items-center justify-center">
            <span className="mr-2">{fileName}</span>
          </div>
        )}
      </div>
      {<p className="text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default FileInput;
