import { FaBell, FaHome } from "react-icons/fa";
import TabButton from "../model/TabButton";
import Info from "../model/InfoModal";
import { LogOutUser } from "../types/Types";

const MenuDashboard = ({ logOutUser }: LogOutUser) => {
  return (
    <div className="w-full px-5 shadow-md py-3 bg-background-primary">
      <div className="flex items-center justify-between">
        <TabButton icon={<FaHome />} label="Dashboard" to="/dashboard" />
        <div className="flex items-center justify-between gap-7">
          <FaBell className="cursor-pointer" />
          <Info logOutUser={logOutUser} />
        </div>
      </div>
    </div>
  );
};

export default MenuDashboard;
