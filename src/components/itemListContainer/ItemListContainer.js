import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Box, Grid, Paper, styled, Typography, makeStyles } from '@material-ui/core';
import ItemList from './../itemList/ItemList'
import app from "./../firebase/Firebase"
import {collection, getDocs, getFirestore, orderBy, query, where} from "firebase/firestore"

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
    const db = getFirestore();
    const itemsCollection = collection(db, "item");
    const q = category
      ? query(itemsCollection, where("category", "==", category))
      : query(itemsCollection, orderBy("price", 'desc'));
    getDocs(q).then((snapshot) => {
      if (category === undefined) {
        setProducts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } else {
        let data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProducts(data);
      }
    });
  }, [category])

  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <Item elevation={0} className={classes.item1}>
            <Typography variant='h5' color='secondary'>Men's Shoes & Sneakers</Typography>
            <Typography variant='subtitle' color='secondary'>{category}</Typography>
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
  
