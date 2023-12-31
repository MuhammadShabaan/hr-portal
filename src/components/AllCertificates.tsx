import { DeleteCertificate } from "@/api/user";
import Button from "@/model/Button";
import { FaRemoveFormat } from "react-icons/fa";
import useSWR from "swr";

const AllCertificates = () => {
  const fetcher = async (url: string): Promise<any> => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const { data, error, isLoading } = useSWR(
    `http://127.0.0.1:8090/api/collections/certificates/records`,
    fetcher
  );

  const deleteCertificate = async (certificateId: any): Promise<any> => {
    const deletedCertificate = await DeleteCertificate(certificateId);
    if (deletedCertificate === undefined) {
      console.log(`Certificate with id:${certificateId} deleted successfully!`);
    }
  };
  return (
    <div>
      {data?.items?.map(({ id, type, title }: any) => (
        <div key={id} className="flex items-center justify-between mb-2">
          <p>{type}</p>
          <p>{title}</p>
          <div>
            <Button
              icon={<FaRemoveFormat />}
              onClick={() => deleteCertificate(id)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllCertificates;
