import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { Box, TextField} from '@material-ui/core'

export default function ItemCount({stock, initial, count, setCount}) {

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

  return (
    <Box sx={{ flexGrow: 1}}>
        <IconButton color="secondary" style={{color: '#161412'}} aria-label="remove" onClick={handleRemove}>
            <RemoveCircleIcon fontSize="large"/>
        </IconButton >
        <TextField disabled={true} label="" variant="standard" value={count} fullWidth={true} style={{maxWidth: '80px', marginTop: '10px'}}/>
        <IconButton size="small" style={{color: '#161412'}} aria-label="Add" onClick={handleAdd}>
            <AddCircleIcon fontSize="large"/>
        </IconButton>
    </Box>
            
  );
}

