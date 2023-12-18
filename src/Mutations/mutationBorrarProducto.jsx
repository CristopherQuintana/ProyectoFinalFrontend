import { useMutation } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useMutationBorrarProducto() {
  return useMutation({
    mutationFn: (id) => {return clienteAxios.delete(`borrarProducto/${id}`)},
    onError: (error) => {
      console.error("Error al borrar el producto", error);
    },
    onSuccess: () => {
      console.log("Producto Borrado")
    },
    onMutate: (params) => console.log(params)
  });
}