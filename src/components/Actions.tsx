import { RiDeleteBin2Line } from "react-icons/ri";

const Actions = ({ onClick }: any) => {
  return (
    <div>
      <RiDeleteBin2Line
        className="text-red-800 cursor-pointer"
        onClick={onClick}
      />
    </div>
  );
};

export default Actions;
