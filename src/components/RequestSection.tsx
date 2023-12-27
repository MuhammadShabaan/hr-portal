import { useState } from "react";
import Button from "../model/Button";
import FormWrapper from "./FormWrapper";
import UserRequest from "./user/EmpRequest";
import useSWR from "swr";

const RrequestSection = () => {
  const [show, setShow] = useState<boolean>(false);

  const fetcher = async (url: string): Promise<any> => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const { data, error, isLoading } = useSWR(
    `http://127.0.0.1:8090/api/collections/user_requests/records`,
    fetcher
  );

  console.log("requests", data?.items);
  return (
    <div className="py-5 px-6">
      <div>Request Section</div>
      <div className="w-[600px] h-[400px] rounded-md bg-white mb-4">
        <div className="flex items-center justify-end">
          <Button label="Request Ceretificate" onClick={() => setShow(!show)} />
        </div>{" "}
        <div>
          {data?.items?.map((request: any) => (
            <div
              key={request.id}
              className="flex items-center justify-between "
            >
              <p>{request.description}</p>
              <p>{request.status}</p>
              <p>{request.request_type}</p>
              <p>{request.note}</p>
            </div>
          ))}
        </div>
      </div>
      {show && (
        <FormWrapper onClick={() => setShow(!show)}>
          <UserRequest />
        </FormWrapper>
      )}
    </div>
  );
};

export default RrequestSection;
