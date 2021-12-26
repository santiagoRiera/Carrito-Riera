import { Box, Button,Typography, makeStyles, Modal } from '@material-ui/core'
import { useState } from 'react';

const useStyles = makeStyles({
  button: {
    background:'white', 
    border: 'solid 1px', 
    borderColor: '#161412', 
    marginTop: '15px',
    marginBottom: '14px',
      '&:hover': {
          background: '#ddd9d6'
       },
  },
})

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

export default function ModalForm() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles()

  return (
    <div>
        <Button onClick={handleOpen} className={classes.button}>Checkout</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            You have not added products
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
