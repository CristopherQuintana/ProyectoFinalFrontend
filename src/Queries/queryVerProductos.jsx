import { useQuery } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useQueryVerProductos () {
  return useQuery({
    queryKey: ["queryVerProductos"],
    queryFn: queryVerProductos,
    retry: 0,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    keepPreviousData: false,
    enabled: true,
  });
}

export const queryVerProductos = async (params) => {
  const { data } = await clienteAxios.get(`verProductos`);
  return data;
};