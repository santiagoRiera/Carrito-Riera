import { useState } from 'react'
import {Link} from 'react-router-dom'
import { Box, Button, Modal, TextField, } from '@material-ui/core'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


export default function Form() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Button onClick={handleOpen} style={{background:'white', 
        border: 'solid 1px', 
        borderColor: '#161412',
        color: '#161412', 
        marginTop: '15px'}}>Checkout</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Box
                component="form"
                sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >

            <div>
                <TextField
                    id="outlined-required"
                    label="Name"
                    defaultValue=""
                />
                <TextField
                    id="outlined-disabled"
                    label="Telephone number"
                    defaultValue=""
                />
                <TextField
                    id="outlined-password-input"
                    label="Email"
                    type="email"
                    autoComplete="current-password"
                />
                <Link to="/checkout">
                    <Button style={{margin:15}} variant="contained" > Finalize</Button>   
                </Link>
            </div>
            </Box>
        </Box>
      </Modal>
    </div>
  );
}