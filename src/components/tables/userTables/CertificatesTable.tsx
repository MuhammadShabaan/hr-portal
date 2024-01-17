import useSWR from "swr";
import { DeleteUserCertificate } from "@/services/CertificateService";
import { DataTable } from "../dataTable/DataTable";
import { CertificatesColumns } from "../dataTableColumns/CertificatesColumn";
import { Toaster } from "../../ui/toaster";
import { useToast } from "../../ui/use-toast";
import { UserCertificate } from "@/types/Types";
import React, { useState } from "react";
import FormWrapper from "../../FormWrapper";
import CertificateForm from "../../forms/userForms/CertificateForm";

import pb from "@/services/PocketBase";

const AllCertificates: React.FC = (): JSX.Element => {
  const user = pb.authStore.model;
  const [showForm, setShowForm] = useState<boolean>(false);
  const [certificateToUpdate, setCertifcateToUpdate] =
    useState<UserCertificate>();

  const { toast } = useToast();

  const role = user?.role;

  const fetcher = async (
    url: string
  ): Promise<UserCertificate[] | undefined> => {
    const response = await fetch(url);
    const data = await response.json();
    return data?.items;
  };

  const {
    data: certificates,
    error,
    isLoading,
  } = useSWR(
    `http://127.0.0.1:8090/api/collections/certificates/records`,
    fetcher
  );

  const certificatesColumns = CertificatesColumns(role);

  const deleteCertificate = async (certificateId: string): Promise<void> => {
    const deletedCertificate = await DeleteUserCertificate(certificateId);
    if (deletedCertificate) {
      toast({
        title: "Success",
        description: "Deleted Successfully",
      });
    } else {
      toast({
        title: "Failure",
        description: "Unable to delete",
      });
    }
  };

  return (
    <div>
      <Toaster />
      {showForm && (
        <FormWrapper onClick={() => setShowForm(!showForm)}>
          <CertificateForm
            role={role}
            certificateToUpdate={certificateToUpdate}
            hideForm={() => setShowForm(!showForm)}
          />
        </FormWrapper>
      )}
      <DataTable
        columns={certificatesColumns}
        data={certificates || {}}
        handleDelete={(id: string) => deleteCertificate(id)}
        handleEdit={(certificate: UserCertificate) => {
          setCertifcateToUpdate(certificate);
          setShowForm(!showForm);
        }}
      />
    </div>
  );
};

export default AllCertificates;
