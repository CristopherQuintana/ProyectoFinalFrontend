import { useMutation } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useMutationEgresarProductosBodega() {
  return useMutation({
    mutationFn: (id, params) => {return clienteAxios.put(`egresarProductosBodega/${id}}`, params)},
    onError: (error) => {
      console.error("Error al actualizar los productos", error);
    },
    onSuccess: () => {
      console.log("Productos Actualizados")
    },
    onMutate: (params) => console.log(params)
  });
}