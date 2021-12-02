import { Box, Button, Grid, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Link } from "react-router-dom";
import ItemCount from './../itemCount/ItemCount'
import { useCart } from '../../contexts/CartContext';

const ItemDetail = ({item}) => {
  const [itemCount, setItemCount] = useState(true)
  const [addButton, setAddButton] = useState(true);
  const [itemsCount, setItemsCount] = useState(0);
  const {addItem, products} = useCart()

  const onAdd = (count) => {
    setItemsCount(count)
  }

  const onAddToCart = (item, quantity) => {
    addItem(item, quantity)
    setItemCount(false);
    setAddButton(false);
  };

    return (
      <Grid container spacing={2} style={{maxWidth: 1100, margin: "0 auto"}}>
          <Grid item sm={5} sx={12}>
            <img src={item.pictureUrl} alt={item.pictureUrl} height="300px" width="100%" style={{ border:"solid 1px #eee", cursor: "pointer"}}/>
          </Grid>
          <Grid item sm={7} sx={12}>
              <Typography variant="subtitle1" color='secondary'>Category: {item.category}</Typography>
              <Box mt={2}>
                <Typography variant="h4" color='secondary'>{item.title}</Typography>
                <Typography variant="subtitle1" color='secondary'>{item.description}</Typography>
                <Typography variant="h5" color='secondary'>${item.price}</Typography>
               </Box>
               
          </Grid>
            <Grid item sm={12}>
                <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
              {addButton && (
                <Button onClick={() => onAddToCart (item, ItemCount)} style={{backgroundColor:"#161412", border:"none", color:'#ddd9d6'}}>
                  Add to cart
                </Button>
              )}
              {!addButton && (
                <div>
                  <p style={{fontSize:"1.5rem", color: '#161412'}}>{itemsCount} products added</p>
                  <Link to="/cart" style={{textDecoration: 'none'}}>
                    <Button style={{background:'#ddd9d6'}}>Finalize purchase</Button>
                  </Link>
                </div>
              )}
            </Grid>
            <Grid item>
              Stock: {item.stock} availabe products
            </Grid>
      </Grid>
    );
  };
  export default ItemDetail;