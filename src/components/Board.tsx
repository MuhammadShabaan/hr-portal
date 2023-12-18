import { useNavigate } from "react-router-dom";
import MenuDashboard from "./MenuDashboard";
import CreateUserModal from "./CreateUserModal";
import { User } from "../types/Types";

interface HideModal {
  setHideUserModal: () => {};
}
const Board = ({ setHideUserModal }: HideModal): JSX.Element => {
  const loggedInUser: User = JSON.parse(window.localStorage.getItem("user"));

  const navigate = useNavigate();

  const logOutUser = (): void => {
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
