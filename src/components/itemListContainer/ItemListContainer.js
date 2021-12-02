import * as React from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Box, Grid, Paper, styled, Typography, makeStyles } from '@material-ui/core';
import ItemList from './../itemList/ItemList'
import getProducts from './../../services/handleData'


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
  item1: {
    background: '#ddd9d6',
    marginTop: '65px',
},
})

export default function ItemListContainer() {
  const [products, setProducts] = useState([])

  const classes = useStyles()

  const { category } = useParams()

  useEffect(() => {
    getProducts
    .then(res => {
      category ? setProducts(res.filter((products) => products.category === category)) :
      setProducts(res)
    })
    .catch(err => alert('Algo no funciono bien', err))
  }, [category])

  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <Item elevation={0} className={classes.item1}>
            <Typography variant='h5' color='secondary'>Men's Shoes & Sneakers</Typography>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item elevation={0}>
            <ItemList products={products}/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
  
