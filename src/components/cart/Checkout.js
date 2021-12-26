import { Box, Button, Divider, Grid, TextField, Typography, makeStyles} from '@material-ui/core'
import {Link} from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import { useState } from 'react';
import {Timestamp, getFirestore, collection, addDoc, writeBatch, doc} from 'firebase/firestore'

const useStyles = makeStyles({
    button: {
      background:'white', 
      border: 'solid 1px', 
      borderColor: '#161412', 
      marginTop: '15px',
      marginRight: '10px',
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

const Checkout = () => {
    const db= getFirestore();
    const ordersCollection = collection(db, 'orders');
    const {products, totalPrice, clear}=useCart();
    const classes = useStyles()
    const [check, setCheck] = useState(false)
    const [idOrder, setIdOrder] = useState('')
    const [client, setClient]=useState([
        {
            name: '',
            surname: '',
            email: '',
            telephone: '',
            city: ''

        }
    ]);


    const order = {
        buyer: client,
        products: products,
        total: totalPrice(),
        date: Timestamp.fromDate(new Date())
    }

    const confirmOrder = () => {
        setCheck(true)
        addDoc(ordersCollection, order).then(
            ({id})=>{
                setIdOrder(id)
            },
            )
            const batch = writeBatch(db);
            products.forEach((item) => {
              const itemRef = doc(db, "item", item.id);
              batch.update(itemRef, { stock: item.stock - item.quantity });
            });
        
            batch.commit();
            clear()
            
    }

    const eventInputChange = (event) => {
        setClient({
            ...client,
            [event.target.name]: event.target.value
        })

    }

    const defaultSubmit = (event)=>{
        event.preventDefault();
    }

    return (
        <Grid container spacing={2} style={{maxWidth: 1100, margin: "0 auto"}}>
            {check === false ? 
                <Grid item>
                    <Box sx={style} onSubmit={defaultSubmit}>
                    <Box
                        component="form"
                        sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                    <div>
                        <Typography variant='h5' style={{marginBottom:'10px'}}>Checkout</Typography>
                        <Divider/>
                        <TextField
                            required
                            id="outlined-required"
                            name= 'name'
                            label="Name"
                            value={client.name}
                            onChange={eventInputChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            name='surname'
                            label="Surname"
                            value={client.surname}
                            onChange={eventInputChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            name='email'
                            label="Email"
                            value={client.email}
                            type="email"
                            onChange={eventInputChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            name='telephone'
                            label="Telephone"
                            type='number'
                            value={client.telephone}
                            onChange={eventInputChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            name='city'
                            label="City"
                            value={client.city}
                            onChange={eventInputChange}
                        />
                        
                        <Grid item>
                            <Link to="/cart" style={{textDecoration: 'none'}}>
                                <Button className={classes.button} variant="contained" > 
                                    Go back
                                </Button>  
                            </Link>
                            <Button className={classes.button} variant="contained" type='submit' onClick={confirmOrder}> 
                                Confirm 
                            </Button>
                        </Grid>
                    </div>
                </Box>
            </Box>
        </Grid>
        : (
            <Grid item>
                    <Box sx={style}>
                    <Box
                        sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >

                    <div>
                        <Typography variant='h5' style={{marginBottom:'10px'}}>{client.name} your order was confirmed!</Typography>
                        <Typography variant='subtitle1'>The ID of your order is: {idOrder}</Typography>
                        <Divider/>                        
                        <Link to="/" style={{textDecoration: 'none'}}>
                            <Grid item>
                                <Button className={classes.button} variant="contained" > 
                                    Go home
                                </Button>  
                            </Grid>
                        </Link>
                    </div>
                </Box>
            </Box>
        </Grid>
        )}
</Grid>
    )}

export default Checkout;