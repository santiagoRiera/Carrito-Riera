import { Box, Button, Grid, Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ItemCount from './../itemCount/ItemCount'
import { useCart } from '../../contexts/CartContext'

const ItemDetail = ({item}) => {
  const [ count, setCount ] = useState(0)
  const {addItem, products} = useCart()

  

  const onAddToCart = (item, quantity) => {
    addItem(item, quantity)
  }

  useEffect(() => {
    if (count === 0){
      return
    }else{
      onAddToCart()
    }
    
  }, [])

    return (
      <Grid container spacing={2} style={{maxWidth: 1100, margin: "0 auto"}}>
          <Grid item sm={5} sx={12}>
            <img src={item.pictureUrl} alt={item.pictureUrl} height="300px" width="100%" style={{ border:"solid 1px #eee", cursor: "pointer"}}/>
          </Grid>
          <Grid item sm={6} sx={12} style={{marginLeft: '50px'}} >
              <Typography variant="subtitle1" color='secondary'>Category: {item.category}</Typography>
              <Box mt={2}>
                <Typography variant="h4" color='secondary'>{item.title}</Typography>
                <Typography variant="subtitle1" color='secondary'>{item.description}</Typography>
                <Typography variant="h5" color='secondary' style={{marginBottom: '20px'}}>${item.price}</Typography>
               </Box>
              <Box>
                <ItemCount stock={item.stock} initial={0} count={count} setCount={setCount}  />
                <Button onClick={() => onAddToCart (item, count)} style={{background:'white', border: 'solid 1px', borderColor: '#161412', marginTop: '15px'}}>
                  Add to cart
                </Button>
              </Box>
              <Link to="/cart" style={{textDecoration: 'none'}}>
                  <Button style={{background:'white', marginTop: '20px', border: 'solid 1px', borderColor: '#161412' }}>Finalize purchase</Button>
              </Link>
          </Grid>
                
            <Grid item>
              Stock: {item.stock} availabe products
            </Grid>
      </Grid>
    );
  };
  export default ItemDetail;