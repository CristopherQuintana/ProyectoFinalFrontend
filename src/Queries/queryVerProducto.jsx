import { useQuery } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useQueryVerProducto (id) {
  return useQuery({
    queryKey: ["queryVerProducto", id],
    queryFn: queryVerProducto,
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    keepPreviousData: false,
    enabled: true,
  });
}

export const queryVerProducto = async (params) => {
  const [queryName, id] = params.queryKey;
  const { data } = await clienteAxios.get(`verProducto/${id}`);
  return data;
};