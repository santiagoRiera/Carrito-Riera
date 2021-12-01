import { Box, Button, Grid, Typography } from '@material-ui/core';
import { useState } from 'react';
import { Link } from "react-router-dom";
import ItemCount from './../itemCount/ItemCount'

const ItemDetail = ({item}) => {
  const [itemCount, setItemCount] = useState(true)
  const [addButton, setAddButton] = useState(true);
  const [itemsCount, setItemsCount] = useState(0);

  const onAdd = (count) => {
    setItemsCount(count)
    console.log('OnAdd desde itemDetail')
  }

  const onAddToCart = () => {
    setItemCount(false);
    setAddButton(false);
  };

    return (
      <Grid container spacing={1} style={{maxWidth: 1100, margin: "0 auto"}}>
          <Grid item sm={5} sx={12}>
            <img src={item.pictureUrl} alt={item.pictureUrl} height="300px" width="100%" style={{ border:"solid 1px #eee", cursor: "pointer"}}/>
          </Grid>
          <Grid item sm={7} sx={12}>
              <Typography variant="subtitle1">Category: {item.category}</Typography>
              <Box mt={2}>
                <Typography variant="h4">{item.title}</Typography>
                <Typography variant="subtitle1">{item.description}</Typography>
                <Typography variant="h5">${item.price}</Typography>
               </Box>
               
          </Grid>
            <Grid item sm={12} spacing={2}>
                <ItemCount stock={item.stock} initial={0} onAdd={onAdd} />
              {addButton && (
                <Button onClick={onAddToCart} style={{backgroundColor:"rgb(79, 192, 172)", border:"none"}}>
                  Add to cart
                </Button>
              )}
              {!addButton && (
                <div>
                  <p style={{fontSize:"1.5rem"}}>{itemsCount} products added</p>
                  <Link to="/cart">
                    <Button>Finalize purchase</Button>
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