import { DeleteUser, GetUsers } from "@/services/UserService";
import useSWR from "swr";
import { DataTable } from "../dataTable/DataTable";
import { UsersColumns } from "../dataTableColumns/UsersColumn";
import { Toaster } from "../../ui/toaster";
import { useToast } from "../../ui/use-toast";
import React from "react";

const AllUsers: React.FC = (): JSX.Element => {
  const { toast } = useToast();

  const fetcherString = "users";
  const {
    data: users,
    error,
    isLoading,
    mutate,
  } = useSWR(fetcherString, GetUsers);

  const deleteUser = async (userId: any): Promise<void> => {
    const deletedUser = await DeleteUser(userId);
    if (deletedUser) {
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
        columns={UsersColumns}
        data={users || {}}
        handleDelete={(id: string) => deleteUser(id)}
      />
    </div>
  );
};

export default AllUsers;
