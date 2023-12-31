import { useState } from "react";
import { FaPlus } from "react-icons/fa";

const CreateUserModal = ({ userRole, setHideUserModal }: any) => {
  const [hide, setHide] = useState<boolean>(false);

  const defaulUsers = [
    { id: 1, text: "manager" },
    { id: 2, text: "employee" },
  ];

  return (
    <div>
      <div
        className="flex items-center justify-between gap-3 px-3 bg-neutral-800 rounded-md py-2 text-white cursor-pointer"
        onClick={() => setHide(!hide)}
      >
        <FaPlus />
        <p>Create</p>
      </div>
      {hide && (
        <div className="absolute right-[12px] px-3 py-4 rounded my-3 bg-neutral-800 flex flex-col items-center justify-center gap-6">
          {defaulUsers.map(({ id, text }) => (
            <p
              key={id}
              className={` ${
                userRole === text && "hidden"
              } text-white cursor-pointer hover:bg-white hover:text-black px-3 rounded-sm bg-primary-800`}
              onClick={() => {
                setHide(!hide);
                setHideUserModal(text);
              }}
            >
              New <span className="capitalize">{text}</span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default CreateUserModal;
