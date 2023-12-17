import { useMutation } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useMutationGuardarBodega() {
  return useMutation({
    mutationFn: (id) => {return clienteAxios.delete(`borrarBodega/${id}`)},
    onError: (error) => {
      console.error("Error al borrar la bodega", error);
    },
    onSuccess: () => {
      console.log("Bodega Borrada")
    },
    onMutate: (params) => console.log(params)
  });
}