import useSWR from "swr";

const useFetchAllData = async (table: any): Promise<any> => {
  const fetcher = async (url: string): Promise<any> => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };
  const { data, error, isLoading } = useSWR(
    `http://127.0.0.1:8090/api/collections/${table}/records`,
    fetcher
  );

  return { data, error, isLoading };
};

export default useFetchAllData;
