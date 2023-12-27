import { useState } from "react";
import EmpCertificateForm from "./user/EmpCertificateForm";
import Button from "../model/Button";
import FormWrapper from "./FormWrapper";
import useSWR from "swr";

const CertificateSection = () => {
  const [show, setShow] = useState<boolean>(false);
  // const [userCertificates, setUserCertificates] = useState<any>([]);

  const fetcher = async (url: string): Promise<any> => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const { data, error, isLoading } = useSWR(
    `http://127.0.0.1:8090/api/collections/certificates/records`,
    fetcher
  );

  return (
    <div className="py-5 px-6">
      <div>Certificate Section</div>
      <div className="w-[600px] rounded-md bg-white mb-4">
        <div className="flex items-center justify-end">
          <Button
            label="Request Ceretificate"
            onClick={() => {
              setShow(true);
            }}
          />
        </div>{" "}
        <div>
          {data?.items?.map((certificate: any) => (
            <div
              key={certificate.id}
              className="flex items-center justify-between "
            >
              <p>{certificate.type}</p>
              <p>{certificate.title}</p>
            </div>
          ))}
        </div>
      </div>
      {show && (
        <FormWrapper
          onClick={() => {
            setShow(false);
          }}
        >
          <EmpCertificateForm />
        </FormWrapper>
      )}
    </div>
  );
};

export default CertificateSection;
