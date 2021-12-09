import * as React from 'react';
import { Badge, IconButton } from '@material-ui/core';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useCart } from '../../contexts/CartContext';

export default function CarWidget() {
  const { totalItems } = useCart()
  return(
    <IconButton
      fontSize="large"
      aria-label="Show carts items"
      color="secondary"
  >
  <Badge badgeContent={totalItems()} color="primary">
    <ShoppingBasketIcon />
  </Badge>
  </IconButton>
  )
}