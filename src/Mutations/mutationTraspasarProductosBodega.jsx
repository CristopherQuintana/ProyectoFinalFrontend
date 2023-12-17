import { useMutation } from "react-query";
import clienteAxios from "../Helpers/clienteAxios";

export function useMutationTraspasarProductosBodega() {
  return useMutation({
    mutationFn: (idOrigen, idDestino, params) => 
    {return clienteAxios.post(`traspasarProductoBodega/${idOrigen}/${idDestino}}`, params)},
    onError: (error) => {
      console.error("Error al actualizar los productos", error);
    },
    onSuccess: () => {
      console.log("Productos Actualizados")
    },
    onMutate: (params) => console.log(params)
  });
}