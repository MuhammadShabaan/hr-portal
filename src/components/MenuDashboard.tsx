import { FaBell, FaHome } from "react-icons/fa";
import TabButton from "./TabButton";
import { IoPersonOutline } from "react-icons/io5";
import Button from "./Button";
import Info from "./InfoModal";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { User, LogOutUser } from "../types/Types";

const MenuDashboard = ({ logOutUser }: LogOutUser) => {
  const { user }: { user: User } = useContext(UserContext);
  return (
    <div className="w-full px-5 shadow-md py-3 bg-background-primary">
      <div className="flex items-center justify-between">
        <TabButton icon={<FaHome />} label="Dashboard" />
        <div className="flex items-center justify-between gap-7">
          <FaBell className="cursor-pointer" />
          <Info logOutUser={logOutUser} />
          {user.email}
        </div>
      </div>
    </div>
  );
};

export default MenuDashboard;
