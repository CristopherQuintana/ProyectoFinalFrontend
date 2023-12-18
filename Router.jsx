import { Route, Routes } from "react-router-dom";
import Productos from "./src/Pages/Productos";
import CrearProducto from "./src/Pages/CrearProducto";
import EditarProducto from "./src/Pages/EditarProducto";

export default function RouterApp(){
    return (
        <Routes>
            <Route path="/" element={<Productos />} />
            <Route path="CrearProducto" element={<CrearProducto/>}/>
            <Route path="EditarProducto/:id" element={<EditarProducto/>}/>
        </Routes>
    )
}