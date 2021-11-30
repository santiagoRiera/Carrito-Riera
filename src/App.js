import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2D82B7'
    },
    secondary: {
      main: '#42E2B8'
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:category" element={<ItemListContainer />} /> 
            <Route path="/item/:id" element={<ItemDetailContainer />} /> 
          </Routes>
        </BrowserRouter>
    </ThemeProvider>
    
    
  );
}

export default App;
