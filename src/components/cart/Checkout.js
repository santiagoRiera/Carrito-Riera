import { Box, Button, Grid, TextField, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import { useState } from 'react';
import {Timestamp, getFirestore, collection, addDoc, writeBatch, doc} from 'firebase/firestore'

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

    const confirmOrder = ()=>{
        addDoc(ordersCollection, order).then(
            ({id})=>{
                alert(`Congrats ${client.name} ${client.surname} , your order has been processed successfully. The ID of your order is: ${id}`)
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
                    <Typography variant='h5'>Checkout</Typography>
                    <TextField
                        required
                        id="outlined-required"
                        name= 'name'
                        label="Name"
                        defaultValue=""
                        onChange={eventInputChange}
                    />
                    <TextField
                        required
                        id="outlined-required"
                        name='surname'
                        label="Surname"
                        defaultValue=""
                        onChange={eventInputChange}
                    />
                    <TextField
                        id="outlined-required"
                        name='email'
                        label="Email"
                        type="email"
                        onChange={eventInputChange}
                    />
                    <TextField
                        id="outlined-required"
                        name='telephone'
                        label="Telephone"
                        defaultValue=""
                        onChange={eventInputChange}
                    />
                    <TextField
                        id="outlined-required"
                        name='city'
                        label="City"
                        defaultValue=""
                        onChange={eventInputChange}
                    />
                    
                    <Link to="/cart" style={{textDecoration: 'none'}}>
                        <Grid item>
                            <Button style={{background:'white', marginTop: '15px', marginRight: '10px', border: 'solid 1px', borderColor: '#161412' }} variant="contained" > 
                            Go back
                            </Button>  
                            <Button style={{background:'white', marginTop: '15px', border: 'solid 1px', borderColor: '#161412' }} variant="contained" type='submit' onClick={confirmOrder}> 
                            Confirm 
                            </Button> 
                        </Grid>
                    </Link>
                </div>
            </Box>
        </Box>
    </Grid>
</Grid>
    )}

export default Checkout;