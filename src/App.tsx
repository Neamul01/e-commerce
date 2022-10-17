import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';


const theme = createTheme({
  palette: {
    secondary: {}
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
