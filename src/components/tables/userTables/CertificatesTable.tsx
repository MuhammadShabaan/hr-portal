import useSWR from "swr";
import { DeleteCertificate } from "@/api/user";
import { DataTable } from "../dataTable/DataTable";
import { CertificatesColumns } from "../dataTableColumns/CertificatesColumn";
import { Toaster } from "../../ui/toaster";
import { useToast } from "../../ui/use-toast";
import { UserCertificate } from "@/types/Types";
import React from "react";

const AllCertificates: React.FC = (): JSX.Element => {
  const { toast } = useToast();

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

  const deleteCertificate = async (certificateId: string): Promise<void> => {
    const deletedCertificate = await DeleteCertificate(certificateId);
    if (deletedCertificate === undefined) {
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
      <DataTable
        columns={CertificatesColumns}
        data={certificates || {}}
        onClick={(id: string) => deleteCertificate(id)}
      />
    </div>
  );
};

export default AllCertificates;
