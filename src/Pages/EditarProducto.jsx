import { CircularProgress } from "@mui/material";
import { useQueryVerProducto } from "../Queries/queryVerProducto";
import FormProducto from "./Components/FormProducto";
import { useParams } from "react-router-dom";

export default function EditarProducto(){
    
    const paramsUrl = useParams();
    const {data:producto, isLoading} = useQueryVerProducto(paramsUrl.id);
    return isLoading ? <CircularProgress/> : <FormProducto form='edit' data={producto}/>
}

