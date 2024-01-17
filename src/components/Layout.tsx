import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col h-screen w-screen ">
      {/* header */}
      <div className="h-[80px]">
        <Header />
      </div>

      <div className="flex grow overflow-hidden">
        {/* Sidebar */}
        <div className="w-[330px]">
          <Sidebar />
        </div>

        {/* content */}
        <div className="grow overflow-auto ">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
