import useSWR from "swr";
import { DeleteUserAllowance } from "@/services/AllowanceService";
import { DataTable } from "../dataTable/DataTable";

import { Toaster } from "../../ui/toaster";
import { useToast } from "../../ui/use-toast";
import { UserAllowance } from "@/types/Types";
import React from "react";

import { AllowancesColumns } from "../dataTableColumns/AllowancesColumn";
import pb from "@/services/PocketBase";

const AllAllowances: React.FC = (): JSX.Element => {
  const { toast } = useToast();
  const user = pb.authStore.model;
  const role = user?.role;

  const fetcher = async (url: string): Promise<UserAllowance[] | undefined> => {
    const response = await fetch(url);
    const data = await response.json();
    return data?.items;
  };

  const {
    data: allowances,
    error,
    isLoading,
    mutate,
  } = useSWR(
    `http://127.0.0.1:8090/api/collections/user_allowances/records`,
    fetcher
  );

  const allowancesColumns = AllowancesColumns(role);

  const deleteAllowance = async (allowanceId: string): Promise<void> => {
    const deletedAllowance = await DeleteUserAllowance(allowanceId);
    if (deletedAllowance) {
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
    <>
      <Toaster />
      <DataTable
        columns={allowancesColumns}
        data={allowances || {}}
        onClick={(id: string) => deleteAllowance(id)}
      />
    </>
  );
};

export default AllAllowances;
