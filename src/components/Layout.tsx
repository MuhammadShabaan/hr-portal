import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
   
    <div className="flex flex-col h-screen w-screen ">
      
      {/* header */}
      <div className="h-[80px]">
        <Header />
      </div>
      
      
      <div className="flex grow overflow-hidden">
        
        {/* Sidebar */}
        <div className="w-[330px]"><Sidebar/></div>
        
        {/* content */}
        <div className="grow overflow-auto ">
            {children}
        </div>

      </div>
    </div>
  );
};

export default Layout;
