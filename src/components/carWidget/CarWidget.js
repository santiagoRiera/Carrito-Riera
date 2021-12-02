import * as React from 'react';
import { Badge, IconButton } from '@material-ui/core';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useCart } from '../../contexts/CartContext';

export default function CarWidget() {
  const { products } = useCart()
  console.log(products)

  return(
    <IconButton
      fontSize="large"
      aria-label="Show carts items"
      color="secondary"
  >
  <Badge badgeContent={0} color="primary">
    <ShoppingBasketIcon />
  </Badge>
  </IconButton>
  )
}