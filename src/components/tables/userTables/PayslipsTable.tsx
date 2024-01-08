import useSWR from "swr";
import { DeleteUserPayslip } from "@/api/user";
import { DataTable } from "../dataTable/DataTable";
import { PayslipsColumns } from "../dataTableColumns/PayslipsColumn";
import { Toaster } from "../../ui/toaster";
import { useToast } from "../../ui/use-toast";
import { UserPayslip } from "@/types/Types";
import React from "react";

const AllPayslips: React.FC = (): JSX.Element => {
  const { toast } = useToast();

  const fetcher = async (url: string): Promise<UserPayslip[] | undefined> => {
    const response = await fetch(url);
    const data = await response.json();
    return data?.items;
  };

  const {
    data: payslips,
    error,
    isLoading,
  } = useSWR(`http://127.0.0.1:8090/api/collections/payslips/records`, fetcher);

  const deletePayslip = async (payslipId: string): Promise<void> => {
    const deletedPayslip = await DeleteUserPayslip(payslipId);
    if (deletedPayslip === undefined) {
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
        columns={PayslipsColumns}
        data={payslips || {}}
        onClick={(id: string): Promise<void> => deletePayslip(id)}
      />
    </div>
  );
};

export default AllPayslips;
