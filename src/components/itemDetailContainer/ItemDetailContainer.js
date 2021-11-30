import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getProducts from './../../services/handleData'
import ItemDetail from "./../itemDetail/ItemDetail";
import { Grid, Paper, styled } from '@material-ui/core';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();

  useEffect(() => {
    getProducts
    .then((res) => {
      setItem(res.find((prod) => prod.id === parseInt(id)));
    })
  }, [id]);
  return(
      <Grid item xs={12}>
        <Item style={{marginTop: '75px'}}>
          <ItemDetail item={item} />;
        </Item>
      </Grid>
  )  
};
export default ItemDetailContainer;