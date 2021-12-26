import { Box, Button, Grid, Typography, makeStyles, Card, CardActionArea, CardMedia } from '@material-ui/core';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import ItemCount from './../itemCount/ItemCount'
import { useCart } from '../../contexts/CartContext'

const useStyles = makeStyles({
  button: {
    background:'white', 
    border: 'solid 1px', 
    borderColor: '#161412', 
    marginTop: '15px', 
    marginBottom: '15px',
    marginRight: '10px',
      '&:hover': {
          background: '#ddd9d6'
       },
  },
})

const ItemDetail = ({item}) => {
  const classes = useStyles()
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
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="400"
                image={item.pictureUrl}
                alt={item.title}
              />
            </CardActionArea>
          </Card>
          <Grid item>
            <Typography variant='subtitle'>Stock: {item.stock} availabe products</Typography> 
          </Grid>
        </Grid>
        <Grid item sm={6} sx={12} style={{marginLeft: '50px'}} >
            <Typography variant="subtitle1" color='secondary'>Category: {item.category}</Typography>
            <Box mt={2}>
              <Typography variant="h4" color='secondary'>{item.title}</Typography>
              <Typography variant="h5" color='secondary' style={{marginTop: '10px', marginBottom: '10px'}}>${item.price}</Typography>
              <Typography variant="subtitle1" color='secondary' style={{marginBottom: '20px'}}>{item.description}</Typography>
              </Box>
              <ItemCount stock={item.stock} initial={0} count={count} setCount={setCount}  />    
              <Button onClick={() => onAddToCart (item, count)} className={classes.button}>
                Add product
              </Button>
            <Link to="/cart" style={{textDecoration: 'none'}}>
                <Button className={classes.button}>Go to cart</Button>
            </Link>
        </Grid>
      </Grid>
    );
  };
  export default ItemDetail;