import { useNavigate } from "react-router-dom";
import Button from "./Button";
import MenuDashboard from "./MenuDashboard";
import { IoPersonOutline } from "react-icons/io5";
import CreateUserModal from "./CreateUserModal";

const Board = ({ setHideUserModal }) => {
  const loggedInUser = JSON.parse(window.localStorage.getItem("user"));
  const navigate = useNavigate();
  const logOutUser = () => {
    window.localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <div className="bg-background-primary w-[80%]">
      <MenuDashboard logOutUser={() => logOutUser()} />
      <div className="flex justify-end px-3 py-5">
        <CreateUserModal
          setHideUserModal={setHideUserModal}
          userRole={loggedInUser.roles}
        />
      </div>
    </div>
  );
};

export default Board;
