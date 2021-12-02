import { ThemeProvider } from '@material-ui/core';
import { createTheme } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/itemDetailContainer/ItemDetailContainer"

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
        <BrowserRouter>
          <NavBar />
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
