import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import { Providers } from './providers';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme/theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
          <Providers>
            <App />
          </Providers>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
