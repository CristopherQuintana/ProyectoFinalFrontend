import { useMutation } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useMutationGuardarBodega() {
  return useMutation({
    mutationFn: (id, params) => {return clienteAxios.put(`actualizarBodega/${id}}`, params)},
    onError: (error) => {
      console.error("Error al actualizar la bodega", error);
    },
    onSuccess: () => {
      console.log("Bodega Actualizada")
    },
    onMutate: (params) => console.log(params)
  });
}