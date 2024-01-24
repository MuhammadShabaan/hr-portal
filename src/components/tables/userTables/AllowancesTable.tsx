import useSWR from "swr";
import {
  DeleteUserAllowance,
  GetAllowances,
} from "@/services/AllowanceService";
import { DataTable } from "../dataTable/DataTable";
import { Toaster } from "../../ui/toaster";
import { useToast } from "../../ui/use-toast";
import React, { useEffect, useState } from "react";
import { AllowancesColumns } from "../dataTableColumns/AllowancesColumn";
import pb from "@/services/PocketBase";
import AllowanceForm from "../../forms/userFroms/AllowanceForm";
import FormWrapper from "../../../components/FormWrapper";
import Button from "@/shared/Button";

const AllAllowances: React.FC = (): JSX.Element => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [selectedAllowance, setSelectedAllowance] = useState<any>();
  const { toast } = useToast();
  const user = pb.authStore.model;
  const role = user?.role;

  const fetcherString = "allowances";
  const {
    data: allowances,
    error,
    isLoading,
    mutate,
  } = useSWR(fetcherString, GetAllowances);

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
    <div className="">
      <Toaster />
      <div className="flex items-center justify-end">
        {role === "employee" && (
          <Button
            label="Request Allowance"
            onClick={() => setShowForm(!showForm)}
          />
        )}
      </div>{" "}
      {showForm && (
        <FormWrapper onClick={() => setShowForm(!showForm)}>
          <AllowanceForm
            hideForm={() => setShowForm(!showForm)}
            selectedAllowance={selectedAllowance}
            updateData={() => mutate()}
          />
        </FormWrapper>
      )}
      <DataTable
        columns={allowancesColumns}
        data={allowances || {}}
        handleDelete={(id: string) => deleteAllowance(id)}
        handleEdit={(allowance) => {
          setSelectedAllowance(allowance);
          setShowForm(!showForm);
        }}
      />
    </div>
  );
};

export default AllAllowances;
