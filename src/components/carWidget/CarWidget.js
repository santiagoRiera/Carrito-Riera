import * as React from 'react';
import { Badge, IconButton } from '@material-ui/core';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

export default function CarWidget() {
  return(
    <IconButton
      fontSize="large"
      aria-label="Show carts items"
      color="inherit"
  >
  <Badge badgeContent={1} color="secondary">
    <ShoppingBasketIcon />
  </Badge>
  </IconButton>
  )
}