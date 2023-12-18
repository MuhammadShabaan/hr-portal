import ProfileInfo from "./ProfileInfo";
import Tabs from "./Tabs";
import { User } from "../types/Types";

const Sidebar = ({ user }: User) => {
  return (
    <div className="bg-primary-800 w-[20%] ">
      <div className="flex items-center justify-center">
        <div className="my-9 sm:mt-2">
          <ProfileInfo
            name={user?.username}
            email={user?.email}
            role={user?.roles}
          />
        </div>
      </div>
      <Tabs />
      <p className="text-center">Logo</p>
    </div>
  );
};

export default Sidebar;
