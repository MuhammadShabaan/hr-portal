import {
  FaCodeBranch,
  FaHome,
  FaServer,
  FaTeamspeak,
  FaVoicemail,
} from "react-icons/fa";
import TabButton from "./TabButton";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";

const Tabs = () => {
  const { user }: any = useContext(UserContext);

  return (
    <div className="space-y-3">
      {user?.roles === "employee" ? (
        <>
          <TabButton
            icon={<FaHome className="text-white" />}
            label="Certificates"
            textColor="white"
          />
          <TabButton
            icon={<FaTeamspeak className="text-white" />}
            label="Payslip"
            textColor="white"
          />
          <TabButton
            icon={<FaCodeBranch className="text-white" />}
            label="Sugestions"
            textColor="white"
          />
          <TabButton
            icon={<FaVoicemail className="text-white" />}
            label="Allowances"
            textColor="white"
          />
          <TabButton
            icon={<FaServer className="text-white" />}
            label="Requests"
            textColor="white"
          />
        </>
      ) : (
        <>
          <TabButton
            icon={<FaHome className="text-white" />}
            label="Dashboard"
            textColor="white"
          />
          <TabButton
            icon={<FaTeamspeak className="text-white" />}
            label="Teams"
            textColor="white"
          />
          <TabButton
            icon={<FaCodeBranch className="text-white" />}
            label="Progress"
            textColor="white"
          />
          <TabButton
            icon={<FaVoicemail className="text-white" />}
            label="Mail"
            textColor="white"
          />
          <TabButton
            icon={<FaServer className="text-white" />}
            label="Setting"
            textColor="white"
          />
        </>
      )}
    </div>
  );
};

export default Tabs;
