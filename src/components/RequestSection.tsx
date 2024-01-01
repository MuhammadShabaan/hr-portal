import { useState } from "react";
import Button from "../model/Button";
import FormWrapper from "./FormWrapper";
import UserRequest from "./user/EmpRequest";
import AllRequests from "./AllRequests";

const RrequestSection = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="py-5 px-6">
      <div>Request Section</div>
      <div className="w-[600px] h-[400px] rounded-md bg-white mb-4">
        <div className="flex items-center justify-end">
          <Button label="Request Ceretificate" onClick={() => setShow(!show)} />
        </div>{" "}
        <div>
          <AllRequests />
        </div>
      </div>
      {show && (
        <FormWrapper onClick={() => setShow(!show)}>
          <UserRequest hideForm={() => setShow(false)} />
        </FormWrapper>
      )}
    </div>
  );
};

export default RrequestSection;
