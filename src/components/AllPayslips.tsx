import { DeleteUserPayslip } from "@/api/user";
import Button from "@/model/Button";
import { FaRemoveFormat } from "react-icons/fa";
import useSWR from "swr";

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
      {data?.items?.map(({ id, allowance, basic_pay }: any) => (
        <div key={id} className="flex items-center justify-between mb-2 ">
          <p>{allowance}</p>
          <p>{basic_pay}</p>
          <div>
            <Button
              icon={<FaRemoveFormat />}
              onClick={() => deletePayslip(id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPayslips;
