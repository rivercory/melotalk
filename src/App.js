import React from 'react';
import './css/App.css';
import Router from "./router";
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import transparenticon from './assets/icons/melotalk_transparent.svg';
import NavBar from './components/navbar';

const App = () => {
  const colors = {
    primary: {
      100: "#dbe4ff",
      200: "#bac8ff",
      300: "#91a7ff",
      400: "#748ffc",
      500: "#5c7cfa",
      600: "#4c6ef5",
      700: "#4263eb",
      800: "#3b5bdb",
      900: "#364fc7"
    }
  }

  const theme = extendTheme({ colors })

  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <Router />
    </ChakraProvider>
  );
};
export default App;