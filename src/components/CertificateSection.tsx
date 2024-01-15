import { useState } from "react";
import CertificateForm from "./forms/userForms/CertificateForm";
import Button from "../shared/Button";
import FormWrapper from "./FormWrapper";
import AllCertificates from "./tables/userTables/CertificatesTable";

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
          <CertificateForm hideForm={() => setShow(false)} />
        </FormWrapper>
      )}
    </div>
  );
};

export default CertificateSection;
