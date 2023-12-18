import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useQueryVerProductos } from '../Queries/queryVerProductos';
import { useParams } from 'react-router-dom';
import { Button, CircularProgress } from '@mui/material';
import { useMutationBorrarProducto } from '../Mutations/mutationBorrarProducto';
import Swal from 'sweetalert2';

export default function Productos() {

    const paramsUrl = useParams();
    const { data: productos, isLoading, isSuccess, isError } = useQueryVerProductos();
    const borrarPerro = useMutationBorrarProducto();

    function alertaBorrado() {
        Swal.fire({
        title: "¿Quieres borrar al producto?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Borrar",
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          borrarPerro.mutate(producto.id)
          Swal.fire("Borrado!", "", "success");
          navigate('/');
        }
      });
    }

    return (
        isLoading ? <CircularProgress/> :
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell align="right">Nombre</TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right">Producto</TableCell>
                <TableCell align="right">Cantidad</TableCell>
                <TableCell align="right">Precio&nbsp;($)</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {productos.map((producto) => (
                <TableRow
                key={producto.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell align="right" component="th" scope="producto">
                    {producto.nombre}
                </TableCell>
                <TableCell align="right">
                  <img src={producto.url_imagen} alt="foto" style={{ width: '80%', height: 'auto' }} />
                </TableCell>
                <TableCell align="right">{producto.producto}</TableCell>
                <TableCell align="right">{producto.cantidad}</TableCell>
                <TableCell align="right">{producto.precio}</TableCell>
                <TableCell align="right">
                    <Button>Editar</Button>
                </TableCell>
                <TableCell align="right">
                    <Button onClick={alertaBorrado} color="error">Borrar</Button>
                </TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
    );
}
