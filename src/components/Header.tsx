import { FaBell, FaHome } from "react-icons/fa";

import Info from "../shared/InfoModal";


const Header = () => {
  return (
      <div className="flex items-center justify-between w-full h-full px-5 shadow-md py-3 bg-[#f4f5f7]">
        <div className="flex items-center justify-center">
          <img className="h-10" src="/src/assets/images/logo.jpeg" alt="" />
        </div>
        <div className="flex items-center justify-between gap-7">
          <FaBell className="cursor-pointer" />
          <Info />
        </div>
      </div>
    
  );
};

export default Header;
