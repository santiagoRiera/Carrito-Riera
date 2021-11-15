import * as React from 'react';
import { Box, Grid, Paper, styled } from '@material-ui/core';
import ItemCount from './../itemCount/ItemCount'
import ItemList from './../itemList/ItemList'
import getProducts from './../../services/handleData'
import { useState, useEffect } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ListItemContainer() {
  const [products, setProducts] = useState([])
  
  console.log('Los productos en el hook: ', products)

  useEffect(() => {
    getProducts
    .then(res => {
      setProducts(res)
    })
    .catch(err => alert('Algo no funciono bien', err))
  }, [])

  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Item style={{marginTop: '75px'}}>
            <ItemCount/>
          </Item>
        </Grid>
        <Grid item xs>
          <Item elevation={0}>
            <ItemList products={products}/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
  
