import {
  FaCodeBranch,
  FaHome,
  FaServer,
  FaTeamspeak,
  FaVoicemail,
} from "react-icons/fa";
import TabButton from "./TabButton";

const Tabs = () => {
  return (
    <div className="space-y-3">
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
    </div>
  );
};

export default Tabs;
