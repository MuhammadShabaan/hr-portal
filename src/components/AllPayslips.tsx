import { DeleteUserPayslip } from "@/api/user";
import useSWR from "swr";
import { DataTable } from "./tables/DataTable";
import { columns } from "./tables/payslipTable/columns";

const AllPayslips = () => {
  const fetcher = async (url: string): Promise<any> => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const { data, error, isLoading } = useSWR(
    `http://127.0.0.1:8090/api/collections/payslips/records`,
    fetcher
  );

  const deletePayslip = async (payslipId: any): Promise<any> => {
    const deletedPayslip = await DeleteUserPayslip(payslipId);
    if (deletedPayslip === undefined) {
      console.log(`Payslip with id:${payslipId} deleted successfully!`);
    }
  };
  return (
    <div>
      <DataTable
        columns={columns}
        data={data?.items || {}}
        onClick={(id: string) => deletePayslip(id)}
      />
    </div>
  );
};

export default AllPayslips;
