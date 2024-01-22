import useSWR from "swr";
import { DeleteUserPayslip, GetPayslips } from "@/services/PayslipService";
import { DataTable } from "../dataTable/DataTable";
import { PayslipsColumns } from "../dataTableColumns/PayslipsColumn";
import { Toaster } from "../../ui/toaster";
import { useToast } from "../../ui/use-toast";
import { UserPayslip } from "@/types/Types";
import React from "react";
import pb from "@/services/PocketBase";
import useFetchCollection from "@/hooks/useFetchCollection";

const AllPayslips: React.FC = (): JSX.Element => {
  const { toast } = useToast();

  const user = pb.authStore.model;

  const role = user?.role;

  const fetcherString = "payslips";

  const {
    data: payslips,
    IsError,
    isLoading,
    mutate,
  } = useSWR(fetcherString, GetPayslips);

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
