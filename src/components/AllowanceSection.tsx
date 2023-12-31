import { useState } from "react";
import Button from "../model/Button";
import FormWrapper from "./FormWrapper";
import EmployeeAllowance from "./user/EmpAllowance";
import AllAllowances from "./AllAllowances";

const AllowanceSection = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="py-5 px-6">
      <div>Allowance Section</div>
      <div className="w-[600px] h-[400px] rounded-md bg-white mb-4">
        <div className="flex items-center justify-end">
          <Button label="Request Allowance" onClick={() => setShow(!show)} />
        </div>{" "}
        <AllAllowances />
      </div>
      {show && (
        <FormWrapper onClick={() => setShow(!show)}>
          <EmployeeAllowance />
        </FormWrapper>
      )}
    </div>
  );
};

export default AllowanceSection;
