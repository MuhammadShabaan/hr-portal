import { useNavigate } from "react-router-dom";
import MenuDashboard from "./MenuDashboard";
import CreateUserModal from "./CreateUserModal";

import PocketBase from "pocketbase";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

interface HideModal {
  setHideUserModal(): void;
}
const Board = ({ setHideUserModal, children }: any): JSX.Element => {
  const { user, setUser }: any = useContext(UserContext);

  const pb = new PocketBase("http://127.0.0.1:8090");

  const navigate = useNavigate();

  const logOutUser = (): void => {
    window.localStorage.removeItem("user");
    pb.authStore.clear();
    setUser({});
    navigate("/");
  };
  return (
    <div className="bg-background-primary w-[80%]">
      <MenuDashboard logOutUser={() => logOutUser()} />
      {user?.roles === "employee" ? (
        <div className="flex items-center justify-center w-full mt-10">
          {children}
        </div>
      ) : (
        <div className="flex justify-end px-3 py-5">
          <CreateUserModal
            setHideUserModal={setHideUserModal}
            userRole={user?.roles}
          />
        </div>
      )}
    </div>
  );
};

export default Board;
