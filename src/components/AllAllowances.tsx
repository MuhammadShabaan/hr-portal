import { DeleteUserAllowance } from "@/api/user";
import Button from "@/model/Button";
import { FaRemoveFormat } from "react-icons/fa";
import useSWR from "swr";
import { DataTable } from "./tables/DataTable";
import { columns } from "./tables/AllowancesTable/columns";

const AllAllowances = () => {
  const fetcher = async (url: string): Promise<any> => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const { data, error, isLoading } = useSWR(
    `http://127.0.0.1:8090/api/collections/user_allowances/records`,
    fetcher
  );
  const deleteAllowance = async (allowanceId: any): Promise<any> => {
    console.log("id==>", allowanceId);
    const deletedAllowance = await DeleteUserAllowance(allowanceId);
    if (deletedAllowance === undefined) {
      console.log(`Allowance with id:${allowanceId} deleted successfully!`);
    }
  };
  console.log("data", data);
  return (
    <div>
      <DataTable
        columns={columns}
        data={data?.items || {}}
        onClick={(id: any) => deleteAllowance(id)}
      />
    </div>
  );
};

export default AllAllowances;
