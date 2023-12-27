import { useState } from "react";
import Button from "../model/Button";
import FormWrapper from "./FormWrapper";
import EmployeePayslip from "./user/EmpPayslip";
import useSWR from "swr";

const PayslipSection = () => {
  const [show, setShow] = useState<boolean>(false);

  const fetcher = async (url: string): Promise<any> => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const { data, error, isLoading } = useSWR(
    `http://127.0.0.1:8090/api/collections/payslips/records`,
    fetcher
  );

  console.log("payslips", data?.items);

  return (
    <div className="py-5 px-6">
      <div>payslip Section</div>
      <div className="w-[600px] h-[400px] rounded-md bg-white mb-4">
        <div className="flex items-center justify-end">
          <Button label="Request Ceretificate" onClick={() => setShow(!show)} />
        </div>{" "}
        <div>
          {data?.items?.map((payslip: any) => (
            <div
              key={payslip.id}
              className="flex items-center justify-between "
            >
              <p>{payslip.allowance}</p>
              <p>{payslip.basic_pay}</p>
            </div>
          ))}
        </div>
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
