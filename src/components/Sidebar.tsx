import ProfileInfo from "./user/ProfileInfo";
import Tabs from "./Tabs";

const Sidebar = () => {
  return (
    <div className="bg-primary-800 w-[20%] ">
      <div className="flex items-center justify-center">
        <div className="my-9 sm:mt-2">
          <ProfileInfo />
        </div>
      </div>
      <Tabs />
      <p className="text-center">Logo</p>
    </div>
  );
};

export default Sidebar;
