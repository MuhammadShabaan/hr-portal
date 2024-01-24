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
import Button from "@/shared/Button";
import { useNavigate } from "react-router-dom";

const AllCertificates: React.FC = (): JSX.Element => {
  const user = pb.authStore.model;
  const [showForm, setShowForm] = useState<boolean>(false);

  console.log("showForm", showForm);
  const [certificateToUpdate, setCertifcateToUpdate] =
    useState<UserCertificate>();

  const { toast } = useToast();

  const navigate = useNavigate();

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

  const mutateAfterAdditon = () => {
    mutate();
    toast({
      title: "Success",
      description: "Request sent succsessfully",
    });
  };

  return (
    <div className="overflow-y-auto">
      <Toaster />
      <div className="flex items-center justify-end">
        {role === "employee" && (
          <Button
            label="Request Certificate"
            onClick={() => setShowForm(!showForm)}
          />
        )}
      </div>{" "}
      <a
        href="http://127.0.0.1:8090/api/files/certificates/o9faq9151g90ujl/k50_brosur_1_bWtWMZhCUK.pdf"
        target="_blank"
      >
        view
      </a>
      {showForm && (
        <FormWrapper onClick={() => setShowForm(!showForm)}>
          <CertificateForm
            certificateToUpdate={certificateToUpdate}
            hideForm={() => setShowForm(!showForm)}
            updateData={() => mutateAfterAdditon()}
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
        collectionName="certificates"
      />
    </div>
  );
};

export default AllCertificates;
