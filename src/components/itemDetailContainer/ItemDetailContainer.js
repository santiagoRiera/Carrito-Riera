import { useState, useEffect } from "react";
import getProducts from './../../services/handleData'
import ItemDetail from "./../itemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const id = 1

  useEffect(() => {
    getProducts
    .then((res) => {
      setItem(res.find((prod) => prod.id === id));
    })
    .catch(err => alert('Algo no funciono bien', err))
  }, []);
  return <ItemDetail item={item} />;
};
export default ItemDetailContainer;