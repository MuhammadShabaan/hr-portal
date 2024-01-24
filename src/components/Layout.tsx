import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import { Outlet, useNavigate } from "react-router-dom";
import Button from "@/shared/Button";

const Layout: React.FC = () => {
  const navigate = useNavigate();
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
        <div className="grow overflow-auto p-4">
          <div className="space-x-20 rounded-md border border-gray-400 h-full flex items-start justify-center w-full overflow-auto ">
            {/* <Button
              label="Create Employee"
              onClick={() => navigate("/createnewemployee")}
            /> */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
