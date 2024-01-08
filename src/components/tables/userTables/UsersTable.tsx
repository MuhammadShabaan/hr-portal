import { DeleteUser } from "@/api/user";
import useSWR from "swr";
import { DataTable } from "../dataTable/DataTable";
import { UsersColumns } from "../dataTableColumns/UsersColumn";
import { Toaster } from "../../ui/toaster";
import { useToast } from "../../ui/use-toast";
import { User } from "@/types/Types";
import React from "react";

const AllUsers: React.FC = (): JSX.Element => {
  const { toast } = useToast();

  const fetcher = async (url: string): Promise<User[] | undefined> => {
    const response = await fetch(url);
    const data = await response.json();
    return data?.items;
  };

  const {
    data: users,
    error,
    isLoading,
  } = useSWR("http://127.0.0.1:8090/api/collections/users/records", fetcher);

  const deleteUser = async (userId: any): Promise<void> => {
    const deletedUser = await DeleteUser(userId);
    if (deletedUser === undefined) {
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
        columns={UsersColumns}
        data={users || {}}
        onClick={(id: string) => deleteUser(id)}
      />
    </div>
  );
};

export default AllUsers;
