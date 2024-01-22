import { useState } from "react";
import Button from "../shared/Button";
import FormWrapper from "./FormWrapper";
import UserRequest from "./forms/userFroms/RequestForm";
import AllRequests from "./tables/userTables/RequestsTable";

const RrequestSection = () => {
  return (
    <div className="py-5 px-6 w-full">
      <div className="text-lg md:text-2xl capitalize">Request</div>
      <div className="rounded-md bg-white mb-4">
        <div>
          <AllRequests />
        </div>
      </div>
    </div>
  );
};

export default RrequestSection;
