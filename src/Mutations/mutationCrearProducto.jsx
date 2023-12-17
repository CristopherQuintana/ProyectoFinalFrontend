import { useMutation } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useMutationGuardarProducto() {
  return useMutation({
    mutationFn: (params) => {return clienteAxios.post(`guardarProducto/`, params)},
    onError: (error) => {
      console.error("Error al guardar el producto", error);
    },
    onSuccess: () => {
      console.log("Producto Guardado")
    },
    onMutate: (params) => console.log(params)
  });
}