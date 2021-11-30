import * as React from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Box, Grid, Paper, styled } from '@material-ui/core';
import ItemList from './../itemList/ItemList'
import getProducts from './../../services/handleData'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ItemListContainer() {
  const [products, setProducts] = useState([])
  const [selectFilter, setSelectFilter] = useState([])

  useEffect(() => {
    getProducts
    .then(res => {
      setProducts(res)
      console.log('Primer useEffct')
    })
    .catch(err => alert('Algo no funciono bien', err))
  }, [])

  const { cat } = useParams();

  useEffect(() => {
    if (cat) {
      setSelectFilter( products.filter(res =>  res.category === cat))
      console.log('useEffct if setSelectFiler')
    } else{
      setSelectFilter(products)
      console.log('useEffct else')
    }
  }, [cat, products])

  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={3}>
        <Grid item >
          <Item elevation={0} style={{marginTop: '75px'}}>
            <ItemList products={selectFilter}/>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
  
