import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./../itemDetail/ItemDetail";
import { Grid, Paper, styled } from '@material-ui/core';
import { getDoc, getFirestore, doc } from "firebase/firestore"

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
    const db = getFirestore();
    const itemsCollection = doc(db, "item", id);
    getDoc(itemsCollection).then((snapshot) =>{
        setItem({id: snapshot.id, ...snapshot.data()});
        })
  }, [id]);
  return(
      <Grid item xs={12}>
        <Item style={{marginTop: '75px'}}>
          <ItemDetail item={item}/>;
        </Item>
      </Grid>
  )  
};
export default ItemDetailContainer;