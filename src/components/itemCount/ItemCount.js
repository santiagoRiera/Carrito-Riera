import * as React from 'react';
import { useState, useEffect } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Box, TextField} from '@material-ui/core'

export default function ItemCount({stock, initial, onAdd}) {
    const [ count, setCount ] = useState(initial)

    const handleAdd = () => {
        const newValue = count + 1;
        if (newValue <= stock) {
            setCount(newValue);
        }
    }

    const handleRemove = () => {
        const newValue = count - 1;
        if (newValue >= initial) {
            setCount(newValue);
        }
    }

    /* const onAdd = () => {
        const message = `Agregaste ${count} producto`;
        //   Utilizo un condicional ternario (condicional) ? (true) : (false)
        count === 1 ? alert(message) : alert(`${message}s`);
        
      }; */
      useEffect(() => {
        onAdd(count);
      }, [count])

  return (
    <Box sx={{ flexGrow: 1}}>
        <IconButton color="inherit" aria-label="remove" onClick={handleRemove}>
            <RemoveCircleIcon fontSize="large"/>
        </IconButton >
        <TextField disabled={true} label="Elements to add" variant="standard" value={count}/>
        <IconButton size="small" color="inherit" aria-label="Add" onClick={handleAdd}>
            <AddCircleIcon fontSize="large"/>
        </IconButton>
        {/* <IconButton color="primary" aria-label="Add to cart">
            <Button variant="contained">Add</Button>
        </IconButton>  */} 
    </Box>
            
  );
}

