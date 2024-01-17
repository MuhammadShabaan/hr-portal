import useSWR from "swr";
import { DeleteUserPayslip } from "@/services/PayslipService";
import { DataTable } from "../dataTable/DataTable";
import { PayslipsColumns } from "../dataTableColumns/PayslipsColumn";
import { Toaster } from "../../ui/toaster";
import { useToast } from "../../ui/use-toast";
import { UserPayslip } from "@/types/Types";
import React from "react";
import pb from "@/services/PocketBase";

const AllPayslips: React.FC = (): JSX.Element => {
  const { toast } = useToast();

  const user = pb.authStore.model;

  const role = user?.role;

  const fetcher = async (url: string): Promise<UserPayslip[] | undefined> => {
    const response = await fetch(url);
    const data = await response.json();
    return data?.items;
  };

  const {
    data: payslips,
    error,
    isLoading,
    mutate,
  } = useSWR(`http://127.0.0.1:8090/api/collections/payslips/records`, fetcher);

  const payslipsColumns = PayslipsColumns(role);

  const deletePayslip = async (payslipId: string): Promise<void> => {
    const deletedPayslip = await DeleteUserPayslip(payslipId);
    if (deletedPayslip) {
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
    <div>
      <Toaster />
      <DataTable
        columns={payslipsColumns}
        data={payslips || {}}
        onClick={(id: string): Promise<void> => deletePayslip(id)}
      />
    </div>
  );
};

export default AllPayslips;
