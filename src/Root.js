import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import App from './App';

import {
  About, Categories, Contact, Detail, Help, Home, Search,
} from './scenes';

import theme from './theme';

const Root = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Home} />
        <Route path="/categories/:type" component={Categories} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/search" component={Search} />
        <Route path="/help" component={Help} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </App>
    </BrowserRouter>
  </ThemeProvider>
);

export default Root;
