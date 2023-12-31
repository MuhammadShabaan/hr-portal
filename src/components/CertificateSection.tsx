import { useState } from "react";
import EmpCertificateForm from "./user/EmpCertificateForm";
import Button from "../model/Button";
import FormWrapper from "./FormWrapper";
import AllCertificates from "./AllCertificates";

const CertificateSection = () => {
  const [show, setShow] = useState<boolean>(false);

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
        <AllCertificates />
      </div>
      {show && (
        <FormWrapper
          onClick={() => {
            setShow(false);
          }}
        >
          <EmpCertificateForm hideForm={() => setShow(false)} />
        </FormWrapper>
      )}
    </div>
  );
};

export default CertificateSection;
