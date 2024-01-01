import { DeleteUser } from "@/api/user";
import { UserContext } from "@/context/UserContext";
import Button from "@/model/Button";
import { useContext } from "react";
import { FaRemoveFormat } from "react-icons/fa";
import useSWR from "swr";
import { DataTable } from "./tables/DataTable";
import { columns } from "./tables/usersTable/columns";

const AllUsers = () => {
  const { user }: any = useContext(UserContext);

  const fetcher = async (url: string): Promise<UsersList | undefined> => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const { data, error, isLoading } = useSWR(
    "http://127.0.0.1:8090/api/collections/users/records",
    fetcher
  );

  const deleteUser = async (userId: any): Promise<any> => {
    const deletedUser = await DeleteUser(userId);
    if (deletedUser === undefined) {
      console.log(`User with id:${userId} deleted successfully!`);
    }
  };

  return (
    <div>
      <DataTable
        columns={columns}
        data={data?.items || {}}
        onClick={(id: string) => deleteUser(id)}
      />
    </div>
  );
};

export default AllUsers;
