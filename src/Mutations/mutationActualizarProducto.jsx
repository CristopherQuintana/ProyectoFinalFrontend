import { useMutation } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useMutationGuardarProducto() {
  return useMutation({
    mutationFn: (id, params) => {return clienteAxios.put(`actualizarProducto/${id}}`, params)},
    onError: (error) => {
      console.error("Error al actualizar el producto", error);
    },
    onSuccess: () => {
      console.log("Producto Actualizado")
    },
    onMutate: (params) => console.log(params)
  });
}