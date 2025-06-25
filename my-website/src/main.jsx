import React from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import App from './App.jsx'
import {ChakraProvider} from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom"
import { system } from "@chakra-ui/react/preset";

const root = createRoot(document.getElementById('root')).render(
  <ChakraProvider value={system}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ChakraProvider>,
)
