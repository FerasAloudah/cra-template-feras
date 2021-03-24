import * as React from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { ChakraProvider, Container, theme } from '@chakra-ui/react';
import Header from 'components/Header';
import Spinner from 'components/Spinner';
import About from 'pages/About';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';

import './i18n';

const App: () => JSX.Element = () => (
  <ChakraProvider theme={theme}>
    <React.Suspense fallback={<Spinner />}>
      <Router>
        <Header />
        <Container maxW="container.xl">
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={About} path="/about" />
            <Route component={NotFound} path="/404" />
            <Redirect to="/404" />
          </Switch>
        </Container>
      </Router>
    </React.Suspense>
  </ChakraProvider>
);

export default App;
