import React from 'react';
import './App.css';
import Main from './pages/main';
import { createGlobalStyle } from 'styled-components';

// Context API
import { GlobalProvider } from './context/GlobalState';

const GlobalStyle= createGlobalStyle`

  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
  }
`;

const App = () => {
  return (
    <GlobalProvider>
      <GlobalStyle />
      <div className="App">
        <Main />
      </div>
    </GlobalProvider>
  );
}

export default App;
