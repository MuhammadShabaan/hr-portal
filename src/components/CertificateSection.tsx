import { useState } from "react";
import CertificateForm from "./forms/userFroms/CertificateForm";
import Button from "../shared/Button";
import FormWrapper from "./FormWrapper";
import AllCertificates from "./tables/userTables/CertificatesTable";

const CertificateSection = () => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="w-full py-5 px-6">
      <div className="text-lg md:text-2xl capitalize">Certificate Section</div>
      <div className="rounded-md bg-white ">
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
