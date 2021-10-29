import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import * as themes from './themes.js';
import NavBar from './components/navbar/NavBar';

const customTheme = createTheme(themes.theme1)

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <NavBar/>
      </div>
    </ThemeProvider>
    
    
  );
}

export default App;
