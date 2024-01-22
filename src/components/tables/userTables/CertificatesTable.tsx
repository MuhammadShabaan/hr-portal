import useSWR from "swr";
import {
  DeleteUserCertificate,
  GetCertificates,
} from "@/services/CertificateService";
import { DataTable } from "../dataTable/DataTable";
import { CertificatesColumns } from "../dataTableColumns/CertificatesColumn";
import { Toaster } from "../../ui/toaster";
import { useToast } from "../../ui/use-toast";
import { UserCertificate } from "@/types/Types";
import React, { useState } from "react";
import FormWrapper from "../../FormWrapper";
import CertificateForm from "../../forms/userFroms/CertificateForm";

import pb from "@/services/PocketBase";
import useFetchCollection from "@/hooks/useFetchCollection";

const AllCertificates: React.FC = (): JSX.Element => {
  const user = pb.authStore.model;
  const [showForm, setShowForm] = useState<boolean>(false);
  const [certificateToUpdate, setCertifcateToUpdate] =
    useState<UserCertificate>();

  const { toast } = useToast();

  const role = user?.role;

  const fetcherString = "certificates";
  const {
    data: certificates,
    IsError,
    isLoading,
    mutate,
  } = useSWR(fetcherString, GetCertificates);

  const certificatesColumns = CertificatesColumns(role);

  const deleteCertificate = async (certificateId: string): Promise<void> => {
    const deletedCertificate = await DeleteUserCertificate(certificateId);
    if (deletedCertificate) {
      toast({
        title: "Success",
        description: "Deleted Successfully",
      });

      mutate();
    } else {
      toast({
        title: "Failure",
        description: "Unable to delete",
      });
    }
  };

  return (
    <div className="overflow-y-auto">
      <Toaster />
      {showForm && (
        <FormWrapper onClick={() => setShowForm(!showForm)}>
          <CertificateForm
            certificateToUpdate={certificateToUpdate}
            hideForm={() => setShowForm(!showForm)}
            updateData={mutate}
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
