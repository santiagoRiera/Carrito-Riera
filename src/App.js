import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import * as themes from './themes.js';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer.js';

const customTheme = createTheme(themes.theme1)

function App() {
  return (
    <ThemeProvider theme={customTheme}>
        <NavBar/>
        <ItemListContainer/>
    </ThemeProvider>
    
    
  );
}

export default App;
