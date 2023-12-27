const TextArea = ({
  label,
  value,
  onChange,
  placeholder = "Type here...",
  errorMessage,
}: any) => {
  const ValLength = value.length != 0;

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
        <textarea
          id={label}
          placeholder={placeholder}
          value={value}
          className="rounded-md outline-none border-none w-full focus:outline-none focus:ring-0 px-2 py-2 placeholder:text-sm"
          onChange={onChange}
        ></textarea>
      </div>
      {errorMessage && <p className="text-red-600">{errorMessage}</p>}
    </div>
  );
};

export default TextArea;
