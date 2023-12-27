import { useState } from "react";

import Button from "../model/Button";
import FormWrapper from "./FormWrapper";

import EmployeeAllowance from "./user/EmpAllowance";
import FetchAllData from "@/hooks/fetchAll";
import useSWR from "swr";

const AllowanceSection = () => {
  const [show, setShow] = useState<boolean>(false);

  const fetcher = async (url: string): Promise<any> => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const { data, error, isLoading } = useSWR(
    `http://127.0.0.1:8090/api/collections/user_allowances/records`,
    fetcher
  );

  console.log("allowances", data?.items);

  return (
    <div className="py-5 px-6">
      <div>Allowance Section</div>
      <div className="w-[600px] h-[400px] rounded-md bg-white mb-4">
        <div className="flex items-center justify-end">
          <Button label="Request Allowance" onClick={() => setShow(!show)} />
        </div>{" "}
        <div>
          {data?.items?.map((allowance: any) => (
            <div
              key={allowance.id}
              className="flex items-center justify-between "
            >
              <p>{allowance.id}</p>
              <p>{allowance.status}</p>
            </div>
          ))}
        </div>
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
