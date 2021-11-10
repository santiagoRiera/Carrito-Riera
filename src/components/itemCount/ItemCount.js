import * as React from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Box, TextField} from '@material-ui/core'
import Button from '@mui/material/Button';

export default function ItemCount() {
    const [stock, setStock] = React.useState(10)
    const [ count, setCount ] = React.useState(0)
    const [ cartItem, setCartItem] = React.useState(0)

    function handleStates(){
        setCartItem(cartItem + count)
        setStock(stock - count)
        setCount(0)
    }

    function alerts(mensaje){
        alert(mensaje)
        setCount(0)
    }

    const handleCounter = (value) => {
        if (value === 'Decrement'){
            setCount(count - 1)
        } 
        else if (value === 'Increment'){
            setCount(count + 1)
        }
    }

    const handleAdd = () => {
        if (count > stock){
            alerts(`Solo quedan ${stock} elementos en stock`)
        }
        else{
            if (cartItem >= 0){
                if (count > 0){
                    handleStates()
                }
                else{
                    if (count >= (-(cartItem))){
                        handleStates()
                    }
                    else{
                        alerts('No se puede quitar esa cantidad ya que quedaria el carrito en negativo')
                    }
                }
            }
            else{
                alerts('El carrito no puede ser menor a 0')
            }
            
        }
    }

  return (
    <Box sx={{ flexGrow: 1}}>
        <IconButton color="inherit" aria-label="remove" onClick={() => {handleCounter('Decrement')}}>
            <RemoveCircleIcon fontSize="large"/>
        </IconButton >
        <TextField color='inherit' disabled="true" label="Elements to add" variant="standard" value={count}/>
        <IconButton size="small" color="inherit" aria-label="Add" onClick={() => {handleCounter('Increment')}}>
            <AddCircleIcon fontSize="large"/>
        </IconButton>
        <IconButton color="primary" aria-label="Add to cart" onClick={() => {handleAdd()}}>
            <Button variant="contained">Add</Button>
        </IconButton>     
        <h2>Elements: {cartItem}</h2>
        <h2>Stock: {stock}</h2>
    </Box>
            
  );
}
