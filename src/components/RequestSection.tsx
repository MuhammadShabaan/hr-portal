import { useState } from "react";
import Button from "../shared/Button";
import FormWrapper from "./FormWrapper";
import UserRequest from "./forms/userForms/RequestForm";
import AllRequests from "./tables/userTables/RequestsTable";

const RrequestSection = () => {
  return (
    <div className="py-5 px-6">
      <div>Request Section</div>
      <div className="w-[600px] h-[400px] rounded-md bg-white mb-4">
        <div>
          <AllRequests />
        </div>
      </div>
    </div>
  );
};

export default RrequestSection;
