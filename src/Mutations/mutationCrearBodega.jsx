import { useMutation } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useMutationCrearBodega() {
  return useMutation({
    mutationFn: (params) => {return clienteAxios.post(`guardarBodega/`, params)},
    onError: (error) => {
      console.error("Error al guardar la bodega", error);
    },
    onSuccess: () => {
      console.log("Bodega Guardada")
    },
    onMutate: (params) => console.log(params)
  });
}