import { useState } from "react";
import Button from "../shared/Button";
import FormWrapper from "./FormWrapper";
import EmployeePayslip from "./EmployeePayslip";
import AllPayslips from "./tables/userTables/PayslipsTable";

const PayslipSection = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="py-5 px-6">
      <div>payslip Section</div>
      <div className="w-[600px] h-[400px] rounded-md bg-white mb-4">
        <div className="flex items-center justify-end">
          <Button label="Request Ceretificate" onClick={() => setShow(!show)} />
        </div>{" "}
        <AllPayslips />
      </div>
      {show && (
        <FormWrapper onClick={() => setShow(!show)}>
          <EmployeePayslip />
        </FormWrapper>
      )}
    </div>
  );
};

export default PayslipSection;
