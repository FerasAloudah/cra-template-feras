import * as React from 'react';
import ReactDOM from 'react-dom';

import { ColorModeScript } from '@chakra-ui/react';

import App from './App';
import {__DEV__} from "./constants";
import reportWebVitals from './reportWebVitals';

if (__DEV__) {
  // eslint-disable-next-line no-console
  reportWebVitals(console.log);
}

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
