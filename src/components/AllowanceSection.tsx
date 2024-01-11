import { useState } from "react";
import Button from "../shared/Button";
import FormWrapper from "./FormWrapper";
import AllowanceFrom from "./forms/userForms/AllowanceForm";
import AllAllowances from "./tables/userTables/AllowancesTable";

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
          <AllowanceFrom />
        </FormWrapper>
      )}
    </div>
  );
};

export default AllowanceSection;
