import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField, styled } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

export default function FormProducto(props) {

    const [image, setImage] = useState(null);

    const handleImage = (event) => {
        const file = event.target.files[0];
        const imagen = URL.createObjectURL(file);
        console.log(imagen);
        URL.revokeObjectURL(image)
        setImage(imagen);
    };

    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });

    return (
        <Card sx={{ maxWidth: 345 }}>
        {!image ? <></> : <CardMedia
            sx={{ height: 280 }}
            image={image}
            title="Producto"
      />}
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.form === 'create' ? 'Registro' : 'Edición'} de Producto
            </Typography>
            <TextField id="outlined-basic" label="Nombre" variant="outlined" defaultValue={props.data?.nombre || ''} />
            <br/>
            <br/>
            <TextField id="outlined-basic" label="Producto" variant="outlined" defaultValue={props.data?.producto || ''} />
            <br/>
            <br/>
            <TextField id="outlined-basic" label="Cantidad" variant="outlined" type="number" defaultValue={props.data?.cantidad || ''}/>
            <br/>
            <br/>
            <TextField id="outlined-basic" label="Precio" variant="outlined" type="number" defaultValue={props.data?.precio || ''}/>
        </CardContent>
        <CardActions>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
            Subir Imagen
            <VisuallyHiddenInput type="file" accept="image/*" onChange={handleImage} />
            </Button>
        </CardActions>
        </Card>
    );
}