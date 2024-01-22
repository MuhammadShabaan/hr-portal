import useSWR from "swr";

const useFetchCollection = (collectionName: string) => {
  const fetcher = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data?.items;
  };
  const { data, error, isLoading, mutate } = useSWR(
    `http://127.0.0.1:8090/api/collections/${collectionName}/records`,
    fetcher
  );

  return { data: data, IsError: error, isLoading, mutate };
};

export default useFetchCollection;
