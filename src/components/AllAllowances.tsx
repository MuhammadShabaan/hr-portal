import { DeleteUserAllowance } from "@/api/user";
import Button from "@/model/Button";
import { FaRemoveFormat } from "react-icons/fa";
import useSWR from "swr";

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
    const deletedAllowance = await DeleteUserAllowance(allowanceId);
    if (deletedAllowance === undefined) {
      console.log(`Allowance with id:${allowanceId} deleted successfully!`);
    }
  };
  return (
    <div>
      {data?.items?.map(({ id, status }: any) => (
        <div key={id} className="flex items-center justify-between mb-2">
          <p>{id}</p>
          <p>{status}</p>
          <div>
            <Button
              icon={<FaRemoveFormat />}
              onClick={() => deleteAllowance(id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllAllowances;
