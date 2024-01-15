import TabButton from "@/shared/TabButton";
import ProfileInfo from "./ProfileInfo";
import { FaCodeBranch, FaHome, FaServer, FaTeamspeak, FaVoicemail } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-primary-800 h-full ">
      <div className="flex flex-col">
        <div className="my-9 sm:mt-2">
          <ProfileInfo />
        </div>
        <div>
       { tabButtons.map((button, index) => (
          <TabButton
            key={index}
            icon={button.icon}
            label={button.label}
            textColor={button.textColor}
            to={button.to}
          />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const tabButtons = [
  {
    icon: <FaHome className="text-white" />,
    label: "Certificates",
    textColor: "white",
    to: "/certificates",
  },
  {
    icon: <FaTeamspeak className="text-white" />,
    label: "Payslip",
    textColor: "white",
    to: "/payslip",
  },
  {
    icon: <FaCodeBranch className="text-white" />,
    label: "Suggestions",
    textColor: "white",
    to: "/suggestions",
  },
  {
    icon: <FaVoicemail className="text-white" />,
    label: "Allowances",
    textColor: "white",
    to: "/allowances",
  },
  {
    icon: <FaServer className="text-white" />,
    label: "Requests",
    textColor: "white",
    to: "/requests",
  },
];



