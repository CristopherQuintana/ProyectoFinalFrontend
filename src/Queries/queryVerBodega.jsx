import { useQuery } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useQueryVerBodega (id) {
  return useQuery({
    queryKey: ["queryVerBodega", id],
    queryFn: queryVerBodega,
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    keepPreviousData: false,
    enabled: true,
  });
}

export const queryVerBodega = async (params) => {
  const [queryName, id] = params.queryKey;
  const { data } = await clienteAxios.get(`verBodega/${id}`);
  return data;
};