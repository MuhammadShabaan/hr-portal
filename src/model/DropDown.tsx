import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const DropDown = ({
  icon,
  options,
  isOpen,
  openDropDown,
  selectedOption = "Select here",
  selectOption,
}: any) => {
  return (
    <div className="my-4">
      <div
        className={`flex rounded-md justify-between items-center space-x-2 border ${
          selectedOption.text
            ? "text-black border-neutral-700"
            : "text-neutral-500 border-neutral-500"
        } px-2 py-2 my-3 cursor-pointer`}
        onClick={openDropDown}
      >
        <div className="flex justify-between items-center space-x-1">
          {icon && icon}
          <p>{selectedOption.text ? selectedOption.text : selectedOption}</p>
        </div>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      {isOpen && (
        <div className="border border-gray-600 px-2 py-2 my-3 rounded-md ">
          {options.map((option: any) => (
            <div
              className={`flex justify-start items-center space-x-1 py-1 px-2 cursor-pointer ${
                selectedOption.id === option.id && "bg-primary-900 text-white"
              } `}
              key={option.id}
              onClick={() => {
                selectOption(option);
                openDropDown();
              }}
            >
              {icon && icon}
              <p>{option.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
