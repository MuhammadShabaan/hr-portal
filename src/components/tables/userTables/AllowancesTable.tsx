import useSWR from "swr";
import { DeleteUserAllowance } from "@/services/UserService";
import { DataTable } from "../dataTable/DataTable";
import { AllowancesColumns } from "../dataTableColumns/AllowancesColumn";
import { Toaster } from "../../ui/toaster";
import { useToast } from "../../ui/use-toast";
import { UserAllowance } from "@/types/Types";
import React from "react";

const AllAllowances: React.FC = (): JSX.Element => {
  const { toast } = useToast();

  const fetcher = async (url: string): Promise<UserAllowance[] | undefined> => {
    const response = await fetch(url);
    const data = await response.json();
    return data?.items;
  };

  const {
    data: allowances,
    error,
    isLoading,
  } = useSWR(
    `http://127.0.0.1:8090/api/collections/user_allowances/records`,
    fetcher
  );

  const deleteAllowance = async (allowanceId: string): Promise<void> => {
    const deletedAllowance = await DeleteUserAllowance(allowanceId);
    if (deletedAllowance === undefined) {
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
    <>
      <Toaster />
      <DataTable
        columns={AllowancesColumns}
        data={allowances || {}}
        onClick={(id: string) => deleteAllowance(id)}
      />
    </>
  );
};

export default AllAllowances;
