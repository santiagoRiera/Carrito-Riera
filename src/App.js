import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"
import CartProvider from '../src/contexts/CartContext'
import Cart from "./components/cart/Cart"
import Checkout from "./components/cart/Checkout"

const theme = createTheme({
  palette: {
    primary: {
      main: '#5a473a'
    },
    secondary: {
      main: '#161412'
    },
    warning: {
      main: '#ddd9d6'
    }
  },
  typography: {
    fontFamily: "Arial"
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path='/cart/checkout' element= {<Checkout />} />
            <Route path="/category/:category" element={<ItemListContainer />} /> 
            <Route path="/item/:id" element={<ItemDetailContainer />} /> 
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
    
    
  );
}

export default App;
